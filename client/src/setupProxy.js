const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/api/countries"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};