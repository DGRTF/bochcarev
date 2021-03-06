const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: ['web', 'es5'],
  entry: "./src/App.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        // loader:
        use: [
          {
            loader: 'ts-loader',
            // options: {
            //   outputPath: './',
            //   publicPath: "./"
            // },
          }
          //  "babel-loader",
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
          publicPath: "fonts/"
        }
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        include: [path.join(__dirname, "src/assets")],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
              publicPath: "img/"
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          { loader: 'style-loader' },
          // {
          //     loader: MiniCssExtractPlugin.loader,
          // },
          // Translates CSS into CommonJS
          { loader: 'css-loader' },
          // { loader: 'postcss-loader' },
          // { loader: 'resolve-url-loader' },
          {
            // Compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  resolve: { extensions: ["*", ".ts", ".tsx", '.js'] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
  ]
};