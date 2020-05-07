const path = require("path");
const webpack = require("webpack");
require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../public"),
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, "src/actions/"),
      lib: path.resolve(__dirname, "src/lib/"),
    },
  },
};
