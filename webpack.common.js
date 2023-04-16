module.exports = {
    entry: {
        main:"./src/index.js",
        vendor:"./src/vendor.js"
    },
    module: {
        rules: [
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