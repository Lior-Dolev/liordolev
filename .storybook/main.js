const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Paths = require('../Paths.js');

module.exports = {
  stories: ['../src/components/**/*.story.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push(
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
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'file-loader' }],
      },
    );

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    );

    config.resolve.extensions.push('.ts', '.tsx', '.js');
    config.resolve.alias = {
      '@components': Paths.components,
    };

    return config;
  },
};
