const path = require('path');

module.exports = {
  /** 基础配置 */
  mode: 'development',
  // 为 entry 提供解析文件目录的起始路径
  context: path.resolve(__dirname, '../../', 'src'),
  // 入口文件
  entry: {
    app: './index.js' // 相对 package.json 执行位置
  },
  // 编译输出路径
  output: {
    path: path.resolve(__dirname, '..', 'dist'), // 需要提供一个完整路径 absolute path
    filename: '[name].bundle.js' // 指定文件名
  },
  resolve: {
    extensions: ['js', 'jsx'].map(ext => `.${ext}`)
  }
};
