module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/static',
      publicPath: '/',
      filename: 'main.js'
    },
    devServer: {
      static: './static',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      ]
    },
  };