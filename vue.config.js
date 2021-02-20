module.exports = {
  pages: {
    client: {
      entry: "src/pages/client/main.js",
      template: "public/index.html",
      filename: "client.html",
      title: "client",
      chunks: ["chunk-vendors", "chunk-common", "client"],
    },
    master: {
      entry: "src/pages/master/main.js",
      template: "public/index.html",
      filename: "master.html",
      title: "master",
      chunks: ["chunk-vendors", "chunk-common", "master"],
    },
  },

  devServer: {
    // If your frontend app and the backend API server are not running on the same host,
    // you will need to proxy API requests to the API server during development.
    // This is configurable via the
    proxy: "http://localhost:8080",
  },

  transpileDependencies: ["vuetify"],
};
