'use strict'

const path = require(`path`)
const ExtractTextPlugin = require(`extract-text-webpack-plugin`)

const extractLess = new ExtractTextPlugin({
    filename: `[name].[contenthash].css`,
});

const themePath = path.join(__dirname, `src`, `import.less`)

module.exports = {
  entry: path.join(__dirname, `src`, `index.js`),
  output: {
		path: path.join(__dirname, `dist`),
		filename: `[name].js`
	},
  module: {
    rules: [{
      test: /\.less$/,
      use: extractLess.extract([
        { loader: `style-loader` },
        { loader: `css-loader` },
        {
          loader: `less-loader`,
          options: {
            globalVars: {
              theme: `'${themePath}'`
            }
          }
        }
      ])
    }]
  },
  plugins: [
    extractLess
  ]
}

