const HtmlWebPackPlugin = require("html-webpack-plugin");
const DotEnvPlugin = require("dotenv-webpack");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: "10000",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|eot|ttf)$/,
        use: { loader: "file-loader" },
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
