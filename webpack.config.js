const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(js?)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
