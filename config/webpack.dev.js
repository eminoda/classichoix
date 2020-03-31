const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    port: 3000
  }
};

/**
 * 文档速查
 *
 * # webpack cli 命令行参数
 * - https://webpack.js.org/api/cli/
 *
 * # options 具体参数
 * - content
 *  - https://webpack.js.org/configuration/entry-context/#context
 *
 * # html-webpack-plugin
 * - https://www.npmjs.com/package/html-webpack-plugin
 *
 * # babel-loader
 * - https://babeljs.io/docs/en/plugins
 * - https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
 * - https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
 */

const webpackMerge = require('webpack-merge');
const webpackBase = require('./merge/webpack.base');
const webpackModule = require('./merge/webpack.module');
const webpackPlugins = require('./merge/webpack.plugins');
const webpackServer = {
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    port: 3000
  }
};

module.exports = webpackMerge(webpackBase, webpackModule, webpackPlugins, webpackServer);
