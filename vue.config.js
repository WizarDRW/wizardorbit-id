module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*"
    },
  }
}
