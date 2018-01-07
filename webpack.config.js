module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        loader: 'json-loader',
        test: /\.json$/,
        include: [
          /node_modules/
        ]
      }
    ]
  },
  node: {
         fs: 'empty',
         net: 'empty',
         tls: 'empty'
       },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
