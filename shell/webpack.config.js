const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3100,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new ModuleFederationPlugin({
        name: 'Shell',
        remotes: {
            Catalog: 'Catalog@http://localhost:3101/remoteEntry.js',
            Cart: 'Cart@http://localhost:3102/remoteEntry.js',
            // you can also use remote urls
            // SignIn: "SignIn@http://d21ugy3cbs42qx.cloudfront.net/signin/remoteEntry.js"
        },
        shared: {
          react: {
            singleton: true,
          },
          'react-dom': {
            singleton: true,
          }
        }
    })
  ],
}
