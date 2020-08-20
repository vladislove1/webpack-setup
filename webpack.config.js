const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

const options = {

}
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'], // ?name=[name].[ext] is only necessary to preserve the original file name
            publicPath: 'assets/',
            outputPath: 'assets/'
        },
    ]
 },
  plugins: [
    new miniCss({
        filename: 'style.css',
     }),
     new LiveReloadPlugin(options),
     new HtmlWebpackPlugin({
        template: './index.html'
    })
  ]
};