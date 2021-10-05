const path = require('path')
module.exports = {
  entry: [
    './src/js/AppEntry.jsx'
  ]
  ,output: {
    path: __dirname + '/static'
    ,filename: 'bundle.js'
  }
  ,module: {
    rules:[
      {
        test: /\.js$|jsx/
        ,exclude: /(node_modules|bower_components)/
        ,use: {loader: 'babel-loader'}
      }
      ,{
        test: /\.css$/
        ,use: ['style-loader', 'css-loader']
      }
    ]
  }
}