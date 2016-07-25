var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: './app/index.js',
    css: './app/index.css',
    html: './app/index.html'
  },
  output: { 
    path: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { 
        test: /\.css$/, 
        loader: "file?name=[name].[ext]" 
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};