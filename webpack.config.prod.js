const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkgPath = path.resolve(__dirname, './package.json');
const pkgData = JSON.parse(fs.readFileSync(pkgPath));

module.exports = {
  mode: "production",
  devtool: false,
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: pkgData.name + '-V' + pkgData.version + '.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          },
        ]
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use:[{
          loader: "file-loader",
          options: {
            name: '[name][hash:8].[ext]',
            outputPath: './assets',
            publicPath: './assets'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: "./public/index.html",
      inject: 'body'
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments:false,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
};
