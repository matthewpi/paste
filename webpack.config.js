const path    = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin       = require("html-webpack-plugin");
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin            = require("terser-webpack-plugin");

const environment = (process.env.NODE_ENV || "production").trim();
const isProduction = environment === "production";

module.exports = {
    mode:    environment,
    target:  "web",
    devtool: "eval-source-map",

    performance: {
        hints: false,
    },

    entry: [
        "./src/index.ts",
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: (isProduction) ? "bundle.[chunkhash:8].js" : "bundle.[hash:8].js",
        chunkFilename: (isProduction) ? "[name].[chunkhash:8].js" : "[name].[hash:8].js",
        publicPath: "/",
        crossOriginLoading: "anonymous",
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader",

                options: {
                    cacheDirectory: !isProduction,
                },
            },


            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",

                options: {
                    cacheDirectory: !isProduction,

                    presets: [
                        "@babel/env",
                    ],
                },
            },

            {
                test: /\.css$/,

                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { sourceMap: true, importLoaders: 1 } },
                ],
            },
        ],
    },

    resolve: {
        alias: {
            "~": path.join(__dirname, "src"),
        },

        extensions: [ ".js", ".json", ".ts" ],
        symlinks: false,
    },

    plugins: [
        new webpack.EnvironmentPlugin([ "NODE_ENV" ]),

        new MiniCssExtractPlugin({
            filename: (environment === "production") ? "bundle.[chunkhash:8].css" : "bundle.[hash:8].css",
        }),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            inject: false,
        }),
    ],

    watchOptions: {
        poll: 1000,
        ignored: /node_modules/,
    },

    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1,
                },
            },

            automaticNameDelimiter: "~",
        },

        usedExports: true,
        sideEffects: false,
        runtimeChunk: false,
        removeEmptyChunks: true,
        minimize: isProduction,

        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                extractComments: false,

                terserOptions: {
                    mangle: true,

                    output: {
                        comments: false,
                    },
                },
            }),

            new OptimizeCSSAssetsPlugin({}),
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: "/",
        historyApiFallback: true,
        compress: true,

        allowedHosts: [
            "krygon.test",
        ],

        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
};
