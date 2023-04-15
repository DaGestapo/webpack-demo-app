const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            }, 
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader:"file-loader",
                    options: {
                        name:"[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
};