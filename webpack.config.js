const Paths = require('./Paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: Paths.dist,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': Paths.components,
      '@layouts': Paths.layouts,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: require.resolve('awesome-typescript-loader') }],
      },
      {
        test: /\.js?$/,
        use: [{ loader: require.resolve('babel-loader') }],
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'url-loader' }],
      },
      {
        test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Paths.template,
      favicon: Paths.favicon,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};
