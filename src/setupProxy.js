const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1/collections/entertainment',
    createProxyMiddleware({
      target: 'https://ace.qtstage.io',
      changeOrigin: true,
    })
  );
};