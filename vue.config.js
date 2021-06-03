module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: "http://bebras-api.herokuapp.com",
        changeOrigin: true
      },
    }
  }
}
