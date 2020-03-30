const util = require('./webpack.util');
module.exports = {
  module: {
    rules: [
      /** babel */
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: util.resolveApp('src'),
        loader: require.resolve('babel-loader'),
        options: {
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      },
      /** sass */
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
};
