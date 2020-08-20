const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const miniCss = require('mini-css-extract-plugin');

const options = {

}
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
       test:/\.(s*)css$/,
       use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
       ]
    }]
 },
  plugins: [
    new miniCss({
        filename: 'style.css',
     }),
     new LiveReloadPlugin(options)
  ]
};