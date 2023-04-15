const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "sass:math";
          @import "./src/assets/css/_config.scss";
        `
      }
    }
  }
})
