const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'system',
    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: ["raw-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    "alias": {
      "single-spa": require.resolve("single-spa/lib/es5/esm/single-spa.min.js")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  externals: ['single-spa'],
  devServer: {
    historyApiFallback: true,
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
