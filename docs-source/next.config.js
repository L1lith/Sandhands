const withLess = require('@zeit/next-less')
module.exports = withLess({
  assetPrefix: '/Sandhands',
  exportPathMap: function() {
    return {
      '/home.html': { page: '/home' },
      '/sandbox.html': { page: '/sandbox' },
      '/methods.html': { page: '/methods' },
      '/format.html': { page: '/format' }
    };
  }
})
