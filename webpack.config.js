const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const config = {
  entry: {
    server: "./server/app.ts",
    client: "./client/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js", "css", "scss"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true }
            },
            {
              loader: 'sass-loader',
              options: { minimize: true }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { minimize: true }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  devtool: "source-map",
  mode: "development",
  node: {
    fs: "empty",
    net: "empty"
  },
  target: 'node',
  externals: [
    nodeExternals()
  ]
};

module.exports = config;
