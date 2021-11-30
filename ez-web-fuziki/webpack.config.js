// 開発or本番モードの選択(development、production、noneのいずれか設定必須)
// development: 開発時のファイル出力のモード(最適化より時間短縮,エラー表示などを優先)
// production: 本番時のファイル出力のモード(最適化されて出力される)
const MODE = "development";
const webpack = require('webpack');

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,

    // メインのJS
    entry: {
        common: "./docroot/_src/js/common.js"
    },
    devtool: 'source-map',
    target: ["web", "es5"],
    // 出力ファイル
    output: {
        filename: "[name].js"
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                // ローダーの対象 // 拡張子 .js の場合
                test: /\.js$/,
                // ローダーの処理対象から外すディレクトリ
                exclude: /node_modules/,
                use: [
                    {
                        // Babel を利用する
                        loader: "babel-loader",
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2020 を ES5 に変換
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            },
            // CSSファイルの読み込み
            {
                // 対象となるファイルの拡張子
                test: /\.css/,
                // ローダー名
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    {
                        loader: "css-loader",
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            url: false,
                            // ソースマップを有効にする
                            sourceMap: enabledSourceMap
                        }
                    }
                ]
            }
        ]
    }
}