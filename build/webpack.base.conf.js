var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.jsx', '.js', '.vue', '.json', '.css', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/styles')
    }
  },
  plugins: [
     new SpriteLoaderPlugin()
  ],
  module: {
    rules: [
        // {
        //     test: /\.svg$/,
        //     loader: 'svg-sprite-loader',
        //     include: path.resolve('./src/assets/icons'),
        //     options: {
        //         extract: true,
        //         spriteFilename: 'icons-sprite.svg'
        //     }
        // },
        //
        //
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: [
            {
            //   options: {
            //     formatter: eslintFormatter,
            //   },
              loader: 'babel-loader',
            },
          ],
        },
        {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'srcset-loader',
            options: {
                sizes: ['400w', '800w', '1800w'],
                placeholder: true,
            },
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        },
    //   {
    //     test: /\.(js|vue)$/,
    //     loader: 'eslint-loader',
    //     enforce: 'pre',
    //     include: [resolve('src'), resolve('test')],
    //     options: {
    //       formatter: require('eslint-friendly-formatter')
    //     }
    //   },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
