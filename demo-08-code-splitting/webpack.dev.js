/*webpack 配置是标准的 Node.js CommonJS 模块
* 通过 require(...) 导入其他文件*/
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
    entry: {/*指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的*/
        /*entry: {[entryChunkName: string]: string|Array<string>}*/
        /*常见应用场景
        * 1. 分离应用程序 app 和 第三方库 vendor
        * 2. 多页面应用程序：每个HTML 文档只使用一个入口起点*/

        index: './src/index.js',
        another: './src/another-module.js'
    },

    /*loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量*/
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting'
        }),
        // new webpack.optimization.minimize,
    ],

    output: { /*output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist*/
        filename: '[name].bundle.js', /*使用占位符 [name]，来确保每个文件具有唯一的名称*/
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        /*本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。*/
        rules: [
            {
                /*“嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下。*/
                test: /\.txt$/, /*用于标识出应该被对应的 loader 进行转换的某个或某些文件。*/
                use: 'raw-loader' /*表示进行转换时，应该使用哪个 loader*/
                /*require() 是 commonJS 的导包方式
                * import 是ES6 的*/
            }
        ]
    }
}

module.exports = config