var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry:path.resolve(__dirname, 'test.js'),
  output: {
    path:path.resolve(__dirname, "test"),
    filename:"test.js",
    publicPath: __dirname,

  },
  
}