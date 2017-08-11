const VueI18nLoader = require('vue-i18n-loader');

var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

// https://github.com/webpack/loader-utils#interpolatename
module.exports = {
    cssModules: {
        // https://github.com/webpack/loader-utils#interpolatename
    //   localIdentName: !isProduction ? '[name]-[ext]--[local]--[hash:base64:5]' : '[emoji]',
      localIdentName: !isProduction ? '[name]---[local]---[hash:base64:5]' : '[hash:base64:8]',
      camelCase: true
    },
  loaders: Object.assign({
    i18n: '@kazupon/vue-i18n-loader'
  }, utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }))
}