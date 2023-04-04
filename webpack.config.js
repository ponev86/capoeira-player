const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ development }) => ({
  entry: './src/capoeira-player.ts',
  devtool: development ? 'inline-source-map' : false,
  mode: development ? 'development' : 'production',
  output: {
    filename: 'capoeira-player.js',
    path: path.resolve(__dirname, 'dist'),
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({ extensions: ['ts'] }),
    new MiniCssExtractPlugin({
      filename: 'capoeira-player.css',
    }),
  ],
});
