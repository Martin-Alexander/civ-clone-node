const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: "./civ-clone-node.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
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
      }
    ]
  },
  plugins: [],
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
