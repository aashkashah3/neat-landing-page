module.exports = {

  context: __dirname + "/src",

  entry: {
    javascript: ["babel-polyfill", "./app.js"],
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },

      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },

	  {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }
    ],
  },
}
