const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: 'http://172.23.128.93:3000/upload-single',
    // proxy: 'https://api.tfdevs.com',
    // proxy: 'https://linkedin-data-api.p.rapidapi.com/data-connection-count',
    
  }
})
