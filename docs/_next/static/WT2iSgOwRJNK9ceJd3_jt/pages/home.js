;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    '3D1N': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/home',
        function () {
          return n('CH2o')
        }
      ])
    },
    CH2o: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('1OyB'),
        o = n('vuIU'),
        s = n('md7G'),
        a = n('foSv'),
        i = n('Ji7U'),
        c = n('q1tI'),
        u = n.n(c),
        l = n('K6CT'),
        f = n.n(l),
        p = (n('dFTG'), n('xj1T')),
        h = n.n(p),
        d = u.a.createElement
      function v() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' === typeof Proxy) return !0
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch (e) {
          return !1
        }
      }
      var y = (function (e) {
        Object(i.a)(c, e)
        var t,
          n =
            ((t = c),
            function () {
              var e,
                n = Object(a.a)(t)
              if (v()) {
                var r = Object(a.a)(this).constructor
                e = Reflect.construct(n, arguments, r)
              } else e = n.apply(this, arguments)
              return Object(s.a)(this, e)
            })
        function c() {
          return Object(r.a)(this, c), n.apply(this, arguments)
        }
        return (
          Object(o.a)(c, [
            {
              key: 'render',
              value: function () {
                return d(
                  'div',
                  { className: 'home' },
                  d('h2', null, 'Getting started with Sandhands'),
                  d(
                    'p',
                    null,
                    'Sandhands is used to sanitize all kinds of arbitarily complex user input! Make sure to check out the ',
                    ' ',
                    d(
                      'li',
                      null,
                      d(f.a, { href: '/Sandhands/format.html' }, d('a', null, 'Format section'))
                    ),
                    ' ',
                    'and',
                    ' ',
                    d(
                      'li',
                      null,
                      d(
                        f.a,
                        { href: '/Sandhands/sandbox.html' },
                        d('a', null, 'play around with the sandbox!')
                      )
                    )
                  ),
                  d('br', null),
                  d('h2', null, 'A Basic Express Example'),
                  d(
                    h.a,
                    { className: 'javascript example' },
                    "const express = require('express')\nconst {sandhandsExpress} = require('sandhands')\nconst bodyParser = require('body-parser')\n\nconst app = express()\n\napp.use(bodyParser.json())\n\napp.post('/register', sandhandsExpress({\n  username: 'username',\n  email: 'email',\n  password: 'password'\n}), (req, res) => {\n  console.log('Got Registration Details', req.body)\n  res.send('Registered')\n})\n\nconst port = 8050\n\napp.listen(port, err => {\n  if (err) return console.log(err)\n  console.log(`Server running on Port #${port}`)\n})"
                  )
                )
              }
            }
          ]),
          c
        )
      })(c.Component)
      t.default = y
    },
    K6CT: function (e, t, n) {
      e.exports = n('cTJO')
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('/GRZ'),
        o = n('i2R6'),
        s = n('tCBg'),
        a = n('T0f4'),
        i = n('48fX')
      function c() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' === typeof Proxy) return !0
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch (e) {
          return !1
        }
      }
      var u = n('AroE'),
        l = n('7KCV')
      ;(t.__esModule = !0), (t.default = void 0)
      var f,
        p = l(n('q1tI')),
        h = n('QmWs'),
        d = n('g/15'),
        v = u(n('nOHt'))
      function y(e) {
        return e && 'object' === typeof e ? (0, d.formatWithValidation)(e) : e
      }
      var m = new Map(),
        g = window.IntersectionObserver,
        w = {}
      function b() {
        return (
          f ||
          (g
            ? (f = new g(
                function (e) {
                  e.forEach(function (e) {
                    if (m.has(e.target)) {
                      var t = m.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (f.unobserve(e.target), m.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        )
      }
      var k = (function (e) {
        i(u, e)
        var t,
          n =
            ((t = u),
            function () {
              var e,
                n = a(t)
              if (c()) {
                var r = a(this).constructor
                e = Reflect.construct(n, arguments, r)
              } else e = n.apply(this, arguments)
              return s(this, e)
            })
        function u(e) {
          var t
          return (
            r(this, u),
            ((t = n.call(this, e)).p = void 0),
            (t.cleanUpListeners = function () {}),
            (t.formatUrls = (function (e) {
              var t = null,
                n = null,
                r = null
              return function (o, s) {
                if (r && o === t && s === n) return r
                var a = e(o, s)
                return (t = o), (n = s), (r = a), a
              }
            })(function (e, t) {
              return { href: y(e), as: t ? y(t) : t }
            })),
            (t.linkClicked = function (e) {
              var n = e.currentTarget,
                r = n.nodeName,
                o = n.target
              if (
                'A' !== r ||
                !(
                  (o && '_self' !== o) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var s = t.formatUrls(t.props.href, t.props.as),
                  a = s.href,
                  i = s.as
                if (
                  (function (e) {
                    var t = (0, h.parse)(e, !1, !0),
                      n = (0, h.parse)((0, d.getLocationOrigin)(), !1, !0)
                    return !t.host || (t.protocol === n.protocol && t.host === n.host)
                  })(a)
                ) {
                  var c = window.location.pathname
                  ;(a = (0, h.resolve)(c, a)),
                    (i = i ? (0, h.resolve)(c, i) : a),
                    e.preventDefault()
                  var u = t.props.scroll
                  null == u && (u = i.indexOf('#') < 0),
                    v.default[t.props.replace ? 'replace' : 'push'](a, i, {
                      shallow: t.props.shallow
                    }).then(function (e) {
                      e && u && (window.scrollTo(0, 0), document.body.focus())
                    })
                }
              }
            }),
            (t.p = !1 !== e.prefetch),
            t
          )
        }
        return (
          o(u, [
            {
              key: 'componentWillUnmount',
              value: function () {
                this.cleanUpListeners()
              }
            },
            {
              key: 'getPaths',
              value: function () {
                var e = window.location.pathname,
                  t = this.formatUrls(this.props.href, this.props.as),
                  n = t.href,
                  r = t.as,
                  o = (0, h.resolve)(e, n)
                return [o, r ? (0, h.resolve)(e, r) : o]
              }
            },
            {
              key: 'handleRef',
              value: function (e) {
                var t = this
                this.p &&
                  g &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  w[this.getPaths().join('%')] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var n = b()
                      return n
                        ? (n.observe(e),
                          m.set(e, t),
                          function () {
                            try {
                              n.unobserve(e)
                            } catch (t) {
                              console.error(t)
                            }
                            m.delete(e)
                          })
                        : function () {}
                    })(e, function () {
                      t.prefetch()
                    })))
              }
            },
            {
              key: 'prefetch',
              value: function (e) {
                if (this.p) {
                  var t = this.getPaths()
                  v.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0
                  }),
                    (w[t.join('%')] = !0)
                }
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.children,
                  n = this.formatUrls(this.props.href, this.props.as),
                  r = n.href,
                  o = n.as
                'string' === typeof t && (t = p.default.createElement('a', null, t))
                var s = p.Children.only(t),
                  a = {
                    ref: function (t) {
                      e.handleRef(t),
                        s &&
                          'object' === typeof s &&
                          s.ref &&
                          ('function' === typeof s.ref
                            ? s.ref(t)
                            : 'object' === typeof s.ref && (s.ref.current = t))
                    },
                    onMouseEnter: function (t) {
                      s.props &&
                        'function' === typeof s.props.onMouseEnter &&
                        s.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 })
                    },
                    onClick: function (t) {
                      s.props && 'function' === typeof s.props.onClick && s.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t)
                    }
                  }
                return (
                  (!this.props.passHref && ('a' !== s.type || 'href' in s.props)) ||
                    (a.href = o || r),
                  p.default.cloneElement(s, a)
                )
              }
            }
          ]),
          u
        )
      })(p.Component)
      t.default = k
    }
  },
  [['3D1N', 0, 1, 2, 3, 4]]
])
