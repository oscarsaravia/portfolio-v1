/* eslint-disable linebreak-style */
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jsx)$/,
        use: ['eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
}
