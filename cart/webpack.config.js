const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require("webpack").container;

const plugins = [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
]

if (process.env.MFE) {
  plugins.push(
    new ModuleFederationPlugin({
        name: 'Cart',
        filename: "remoteEntry.js",
        exposes: {
          "./Cart": "./src/Cart",
          "./MiniCart": "./src/MiniCart",
        },
        shared: {
          react: {
            singleton: true,
          },
          'react-dom': {
            singleton: true,
          },
          'react-router-dom': {
            singleton: true,
          }
        }
    })
  )
}

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: process.env.MFE ? 3102 : 3202,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins,
}
