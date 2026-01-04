// Setting up webpack for backend express app
// https://www.youtube.com/watch?v=2bdJWZPwtRg

const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config({path: path.resolve(__dirname, '.env.development')});

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'inline-source-map',
  entry: './server.js',
  output: {
    filename: 'app.cjs',
    clean: {
      keep: /public\//, 
    },
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
  ],
  ignoreWarnings: [
    { 
      module: new RegExp('node_modules/express/lib/view.js'),
      message: /the request of a dependency is an expression/,
    },
    {
      module: new RegExp('node_modules/mongodb/lib/deps.js'),
    },
  ],
}