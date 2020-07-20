const HtmlWebPackPlugin = require("html-webpack-plugin");
const DotEnvPlugin = require("dotenv-webpack");

module.exports = {
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
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
    new DotEnvPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
