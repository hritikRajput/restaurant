const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
  },
  module:{
    rules:[
      {
        test: /\.jpg$/i,
        type: 'asset/resource'
      }
    ]
  }
};