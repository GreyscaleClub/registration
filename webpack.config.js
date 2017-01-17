module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path:'./build/',
    filename: 'bundle.js',
  },

  devServer: {
    hot: true,
    inline: true,
    colors: true,
    host: '0.0.0.0',
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },

      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  }
}
