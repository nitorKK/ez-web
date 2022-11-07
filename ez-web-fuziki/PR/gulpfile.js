// style.scssをタスクを作成する
// gulpプラグインを読み込みます
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const bsync = require('browser-sync');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');

/**
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
  // style.scssファイルを取得
  src("./assets/scss/*.scss")
    // Sassのコンパイルを実行
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(postcss([mqpacker()]))
    .pipe(sourcemaps.write("./")) // gulp.destの直前に指定
    .pipe(dest("assets/css"));

const browserSync = () => 
  bsync({
    server: {
        baseDir: "./"
        ,index  : "index.html"
    }
  });
const browserReload = () => 
  browserSync().reload();

  // gulp.watch(paths.js + "**/*.js", ['reload']);
  // gulp.watch(paths.html + "**/*.html", ['reload']);
  // gulp.watch(paths.css + "**/*.css", ['reload']);

/**
 * Sassファイルを監視し、変更があったらSassを変換します
 */
const watchFiles = () => {
  watch("assets/scss/*.scss", compileSass);
  watch(["assets/scss/*.scss", "assets/scss/*.js", "*.html" ], browserReload);
}
// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
exports.default = watchFiles;
// exports.default = () => {
//   watch(filesrc.html, html)
//   watch(filesrc.css, css)
// };
exports.cps = compileSass;
exports.bs = browserSync;