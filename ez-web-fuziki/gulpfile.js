// gulpfile.js
const gulp = require('gulp'),
  bs = require('browser-sync'),
  changed = require('gulp-changed'),
  plumber = require('gulp-plumber'),
  gulpSass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  bourbon = require('node-bourbon'),
  gulpPostcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  sortCSSmq = require("sort-css-media-queries"),
  stylelint = require('stylelint'),
  rename = require('gulp-rename'),
  sortMediaQueries = require("node-css-mqpacker"),
  gulpImagemin = require('gulp-imagemin'),
  mozjpeg = require('imagemin-mozjpeg'),
  pngquant = require('imagemin-pngquant'),
  ejs = require('gulp-ejs'),
  fs = require('fs'),
  del = require('del'),
  notify = require('gulp-notify'),
  htmlbeautify = require("gulp-html-beautify"),
  webpackStream = require("webpack-stream"),
  webpack = require("webpack");

const setting = {
  prefixer: {
    cascade: false,
    grid: "autoplace"
  },
  srcDir: 'docroot/html/', //ソースコードの存在するベースのディレクトリ
  destDir: 'docroot/html/', //コンパイル後に出力するベースのディレクトリ
  destRoot: 'docroot/html/', //出力するドキュメントルート
  jsonDir: 'docroot/_json/', //json格納ディレクトリ
  tmplDir: 'docroot/_templates/',
  assetSrcDir: 'docroot/_src/', // アセットファイルのソースディレクトリ
  assetDistDir: 'docroot/html/', // アセットファイルの出力先ディレクトリ
  webpack: require("./webpack.config")
};
bourbon.with('css/**/*.css', setting.assetSrcDir + 'scss/**/*.scss');

const ejs_src = [
  setting.tmplDir + "page/**/*.ejs"
];
const json_src = JSON.parse(fs.readFileSync(setting.jsonDir + 'config.json'));


/**
 * SCSS整形
 */
const lintSass = () => {
  return gulp
    .src(setting.assetSrcDir + 'scss/**/*.scss', {
      since: gulp.lastRun(lintSass)
    })
    .pipe(plumber())
    .pipe(gulpPostcss([
      stylelint({
        fix: true,
        // reporters: [
        //     { formatter: "string", console: true }
        // ]
      })
    ], {syntax: require('postcss-scss')}))
    .pipe(gulp.dest(setting.assetSrcDir + 'scss'));
}
exports.lintSass = lintSass;


/**
 * SCSSコンパイル
 * @returns {*}
 */
const sassCompile = () => {
  const processors = [
    autoprefixer(setting.prefixer),
    sortMediaQueries()
  ];

  return gulp.src([
    setting.assetSrcDir + 'scss/**/*.scss',
    '!' + setting.assetSrcDir + 'scss/lib-admin/**/*.scss'
  ])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(gulpSass({
      includePaths: bourbon.includePaths,
      outputStyle: 'expanded'
    }))
    .pipe(gulpPostcss(processors))
    .pipe(gulpPostcss([mqpacker({sort: sortCSSmq})]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(setting.assetDistDir + 'css'));
};
exports.sassCompile = sassCompile;


/**
 * 画像圧縮
 */
const imageMin = () => {
  return gulp
    .src(setting.assetSrcDir + 'images/**')
    // .pipe(changed(setting.assetDistDir + 'images'))
    .pipe(
      gulpImagemin([
        pngquant({
          quality: [.60, .70], // 画質
          speed: 1 // スピード
        }),
        mozjpeg({quality: 65}), // 画質
        gulpImagemin.svgo(),
        gulpImagemin.optipng(),
        gulpImagemin.gifsicle({optimizationLevel: 3}) // 圧縮率
      ])
    )
    .pipe(gulp.dest(setting.assetDistDir + 'images'));
}
exports.imageMin = imageMin;


/**
 * 圧縮済み画像全削除
 */
const imageDel = () => {
  return del(setting.assetDistDir + 'images')
}
exports.imageDel = imageDel;


/**
 * ejs task
 */
const ejsCompile = () => {
  return gulp.src(ejs_src)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(ejs({json: json_src}))
    .pipe(rename({extname: '.html'}))
    .pipe(htmlbeautify({
      "indent_size": 4,
      "indent_char": " ",
      "max_preserve_newlines": 0,
      "preserve_newlines": false,
      "extra_liners": [],
    }))
    .pipe(gulp.dest(setting.destDir));
}
exports.ejsCompile = ejsCompile;


/**
 * 出力されたHTML全削除
 */
const htmlDel = () => {
  return del(setting.destDir + '*.html')
}
exports.htmlDel = htmlDel;


/**
 * Webpack JSトランスパイル
 * @returns {*}
 */
const webpackJs = () => {
  // webpackStreamの第2引数にwebpackを渡す
  return webpackStream(setting.webpack, webpack)
    .pipe(gulp.dest(setting.assetDistDir + 'js'));
};
exports.webpackJs = webpackJs;


/**
 * オートリロード
 * @param done - コールバック
 */
const sync = done => {
  const initObj = {
    port: 8080,
    server: setting.destRoot,
    reloadOnRestart: true,
    notify: false,
    ghostMode: false
  };
  bs.init(initObj);
  done();
};

const browserReload = done => {
  bs.reload();
  done();
  console.log('Browser reload completed');
};

/**
 * ファイル監視
 * @param done - コールバック
 */
const watchFiles = done => {
  gulp.watch([setting.assetSrcDir + 'images/**/*'], {interval: 500}, gulp.series(imageMin, browserReload));
  gulp.watch([setting.assetSrcDir + 'js/**/*.js'], {interval: 500}, gulp.series(webpackJs, browserReload));
  gulp.watch([setting.tmplDir + '**/*.ejs'], {interval: 500}, gulp.series(ejsCompile, browserReload));
  gulp.watch([
    setting.assetSrcDir + 'scss/**/*.scss',
    '!' + setting.assetSrcDir + 'scss/lib-admin/**/*.scss'
  ], {interval: 200}, gulp.series(sassCompile, browserReload));//lintSass, 
  done();
};

/**
 * デフォルト処理
 */
exports.default = gulp.series(
  gulp.parallel(
    gulp.series(lintSass, sassCompile),
    gulp.series(htmlDel, ejsCompile),
    sync
  ), watchFiles
);
