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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/.css$/,
        use:[
          "style-loader", "css-loader"
        ]
      }
    ]
  },
  plugins: [
    
  ],
  resolve: {
    "alias": {
      "single-spa": require.resolve("single-spa/lib/es5/esm/single-spa.min.js")
    }
  },
  externals: ["react", "react-dom", "single-spa","app-mf-javascript"],
  devServer: {
    historyApiFallback: true,
    port: 9002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }
};
