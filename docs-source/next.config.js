const withLess = require('@zeit/next-less')
module.exports = withLess({
  exportPathMap: function() {
    return {
      '/Sandhands/home.html': { page: '/Sandhands/home' },
      '/Sandhands/sandbox.html': { page: '/Sandhands/sandbox' },
      '/Sandhands/methods.html': { page: '/Sandhands/methods' },
      '/Sandhands/format.html': { page: '/Sandhands/format' },
    };
  }
})
