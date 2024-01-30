const path = require('path');


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
    ],
  },
  plugins: [
   
  ],
  externals: ["single-spa"],
  devServer: {
    historyApiFallback: true,
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
