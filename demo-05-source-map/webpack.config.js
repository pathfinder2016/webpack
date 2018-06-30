const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js' /*New entrance */
    },
    output: {
        filename: '[name].bundle.js', /*Dynamic generate the bundle name*/
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),/*每次构建前清理 /dist 文件夹, 因此只会生成用到的文件*/
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(png|svg|jpg|git)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}