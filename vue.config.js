module.exports = {
  pages: {
    client: {
      entry: "src/pages/client/main.js",
      template: "public/index.html",
      filename: "client.html",
      title: "client",
      chunks: ["chunk-vendors", "chunk-common", "client"],
    },
    admin: {
      entry: "src/pages/admin/main.js",
      template: "public/index.html",
      filename: "admin.html",
      title: "admin",
      chunks: ["chunk-vendors", "chunk-common", "admin"],
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
