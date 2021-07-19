const path = require('path');
   module.exports = {
       mode: 'development',
       // if your file is named something else, change app.ts
       entry: './consoleresume.ts', 
       output: {
           path: path.resolve(__dirname, 'dist'),
           filename: 'consoleresume.js'   //here too
       },
       module: {
           rules: [{
               test: /\.tsx?$/,
               use: 'ts-loader',
               exclude: /node_modules/
           }]
       },
       resolve: {
           extensions: ['.ts', '.tsx', '.js']
       }
   }