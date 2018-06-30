const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js' /*New entrance */
    },
    output: {
        filename: '[name].bundle.js', /*Dynamic generate the bundle name*/
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader"}
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