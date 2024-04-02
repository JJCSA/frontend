const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://backend.stage.jjcusa.org:9080',
        changeOrigin: true,
    }));
};