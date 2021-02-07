webpackHotUpdate('styles', {
  /***/ './styles/_app.less':
    /*!**************************!*\
  !*** ./styles/_app.less ***!
  \**************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin;
      if (true) {
        var injectCss = function injectCss(prev, href) {
          var link = prev.cloneNode()
          link.href = href
          link.onload = function () {
            prev.parentNode.removeChild(prev)
          }
          prev.stale = true
          prev.parentNode.insertBefore(link, prev)
        }
        module.hot.dispose(function () {
          window.__webpack_reload_css__ = true
        })
        if (window.__webpack_reload_css__) {
          module.hot.__webpack_reload_css__ = false
          console.log('[HMR] Reloading stylesheets...')
          var prefix = document.location.protocol + '//' + document.location.host
          document.querySelectorAll('link[href][rel=stylesheet]').forEach(function (link) {
            if (!link.href.match(prefix) || link.stale) return
            injectCss(link, link.href.split('?')[0] + '?unix=1608206239303')
          })
        }
      }

      /***/
    },

  /***/ './styles/header.less':
    /*!****************************!*\
  !*** ./styles/header.less ***!
  \****************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin;
      if (true) {
        var injectCss = function injectCss(prev, href) {
          var link = prev.cloneNode()
          link.href = href
          link.onload = function () {
            prev.parentNode.removeChild(prev)
          }
          prev.stale = true
          prev.parentNode.insertBefore(link, prev)
        }
        module.hot.dispose(function () {
          window.__webpack_reload_css__ = true
        })
        if (window.__webpack_reload_css__) {
          module.hot.__webpack_reload_css__ = false
          console.log('[HMR] Reloading stylesheets...')
          var prefix = document.location.protocol + '//' + document.location.host
          document.querySelectorAll('link[href][rel=stylesheet]').forEach(function (link) {
            if (!link.href.match(prefix) || link.stale) return
            injectCss(link, link.href.split('?')[0] + '?unix=1608206239355')
          })
        }
      }

      /***/
    },

  /***/ './styles/highlight.less':
    /*!*******************************!*\
  !*** ./styles/highlight.less ***!
  \*******************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin;
      if (true) {
        var injectCss = function injectCss(prev, href) {
          var link = prev.cloneNode()
          link.href = href
          link.onload = function () {
            prev.parentNode.removeChild(prev)
          }
          prev.stale = true
          prev.parentNode.insertBefore(link, prev)
        }
        module.hot.dispose(function () {
          window.__webpack_reload_css__ = true
        })
        if (window.__webpack_reload_css__) {
          module.hot.__webpack_reload_css__ = false
          console.log('[HMR] Reloading stylesheets...')
          var prefix = document.location.protocol + '//' + document.location.host
          document.querySelectorAll('link[href][rel=stylesheet]').forEach(function (link) {
            if (!link.href.match(prefix) || link.stale) return
            injectCss(link, link.href.split('?')[0] + '?unix=1608206239306')
          })
        }
      }

      /***/
    }
})
//# sourceMappingURL=styles.f81507d79ce33c86595a.hot-update.js.map
