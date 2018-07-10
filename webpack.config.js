
const path = require('path');

module.exports = {
  
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    libraryTarget: "commonjs2",
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};