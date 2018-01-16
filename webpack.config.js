module.exports = {

  entry: "./src/js/app.js",

  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitError: true,
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devtool: "eval-source-map"
};
