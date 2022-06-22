const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js' ,
    output: {
        filename: 'main.js',
      //  path: path.resolve(__dirname, './dist'),
    },
    optimization: {
        usedExports: true,
        // minimize: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Plugin Sample',
            meta: {
                viewport: 'width=device-width'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    }
};



