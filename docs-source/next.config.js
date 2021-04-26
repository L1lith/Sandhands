const withLess = require('@zeit/next-less')
module.exports = withLess({
  basePath: process.env.NODE_ENV !== 'production' ? '' : '/Sandhands',
  exportPathMap: function () {
    return {
      '/home.html': { page: '/home' },
      '/sandbox.html': { page: '/sandbox' },
      '/methods.html': { page: '/methods' },
      '/format.html': { page: '/format' }
    }
  }
})
