const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => ({
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "../server/public/scripts"),
    publicPath: "/scripts/",
  },
  devtool: argv.mode === "production" ? "source-map" : "eval-cheap-module-source-map",
  optimization: {
    moduleIds: "deterministic",
    chunkIds: "deterministic",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../../node_modules/tinymce"),
          to: path.resolve(__dirname, "../server/public/tinymce"),
        },
      ],
    }),
  ],
});
