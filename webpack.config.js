const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    proxy: [
      {
        context: ["/reviews"], // Масив шляхів для проксі
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    ],
  },
};
