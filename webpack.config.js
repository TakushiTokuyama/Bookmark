module.exports = {
    mode: 'development',
    entry: './src/views/app.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
      }, {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader'}],
      }]
    },
    target: 'node',
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devtool: 'cheap-module-source-map',
  }