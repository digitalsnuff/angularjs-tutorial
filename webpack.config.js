const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

// https://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config

module.exports = {
    entry: {
        "main": path.resolve(__dirname, "src", "main.js"),
        "todo": path.resolve(__dirname, "src/todo", "todo.js"),
        "sportstore": path.resolve(__dirname, "src/sportstore", "sportstore.js"),
        "admin": path.resolve(__dirname, "src/sportstore", "admin.js"),
    },
    output: {
        filename: `[name].js`,
        chunkFilename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    watch: false,
    mode: "development",
    devServer: {
        contentBase: [path.join(__dirname, 'src/sportstore'), path.join(__dirname, 'src/sportstore/assets/scss')],
        liveReload: true,
        open: true,
        index: 'sportstore.html',
        historyApiFallback: {
            disableDotRule: true,
            index: 'sportstore.html',
            rewrites: [{
                    from: /(.*)/,
                    to: '/'
                },
                {
                    from: /\./,
                    to: '/'
                },
                {
                    from: /^(admin)/,
                    to: '/',
                    index: 'admin.html'
                }
            ]
        }
    },
    // devtool: "source-map",
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            {
                test: /\.(scss)$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + "/";
                            },
                        },
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: `sass-loader`,
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [require("autoprefixer")];
                            },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: "~",
            enforceSizeThreshold: 50000,
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    test: (module) => /[\\/]node_modules[\\/]/.test(module.context),
                    priority: -10,
                    name: "vendor",
                    chunks: "all",
                    reuseExistingChunk: true,
                    priority: 1,
                    enforce: true,
                    // test(module, chunks) {
                    //     const name = module.nameForCondition && module.nameForCondition();
                    //     return chunks.some((chunk) => {
                    //         return (
                    //             chunk.name === "main" && /[\\/]node_modules[\\/]/.test(name)
                    //         );
                    //     });
                    // },
                },
                main: {
                    name: "main",
                    chunks: "all",
                    priority: 2,
                    enforce: true,
                    test(module, chunks) {
                        return chunks.some((chunk) => {
                            chunk.name === "main";
                        });
                    },
                },
                sportstore: {
                    name: "sportstore",
                    chunks: "all",
                    priority: 2,
                    enforce: true,
                    test(module, chunks) {
                        return chunks.some((chunk) => {
                            chunk.name === "sportstore";
                        });
                    },
                },
                sportstore: {
                    name: "admin",
                    chunks: "all",
                    priority: 2,
                    enforce: true,
                    test(module, chunks) {
                        return chunks.some((chunk) => {
                            chunk.name === "admin";
                        });
                    },
                },
                todo: {
                    name: "todo",
                    chunks: "all",
                    priority: 2,
                    enforce: true,
                    test(module, chunks) {
                        return chunks.some((chunk) => {
                            chunk.name === "todo";
                        });
                    },
                },
                stylesVendor: {
                    name: "vendor",
                    test: /scss\/vendor\.scss$/,
                    chunks: (chunk) => chunk.name,
                    enforce: true,
                },
                stylesApp: {
                    name: "app",
                    test: /scss\/app\.scss$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src", "index.html"),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'todo.html',
            template: path.resolve(__dirname, "src/todo", "todo.html"),
            chunks: ['todo']
        }),
        new HtmlWebpackPlugin({
            filename: 'sportstore.html',
            template: path.resolve(__dirname, "src/sportstore", "sportstore.html"),
            chunks: ['sportstore']
        }),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: path.resolve(__dirname, "src/sportstore", "admin.html"),
            chunks: ['admin']
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[name]-[hash].css",
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist/"],
        }),
    ],
    resolve: {
        modules: [process.env.NODE_PATH || "node_modules"],
    },
};

//SuppressChunksPlugin