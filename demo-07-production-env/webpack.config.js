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
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' /*ublicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问*/
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist' /*以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。*/
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),/*每次构建前清理 /dist 文件夹, 因此只会生成用到的文件*/
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module: {
        rules: [/*对于入口文件所涉及的文件，对于不同的后缀，采用不同的loader*/
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