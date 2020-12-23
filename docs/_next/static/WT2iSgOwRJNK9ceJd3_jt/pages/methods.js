;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    '1HVj': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/methods',
        function () {
          return n('tnup')
        }
      ])
    },
    K6CT: function (e, t, n) {
      e.exports = n('cTJO')
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('/GRZ'),
        s = n('i2R6'),
        a = n('tCBg'),
        o = n('T0f4'),
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
      var l = n('AroE'),
        u = n('7KCV')
      ;(t.__esModule = !0), (t.default = void 0)
      var f,
        d = u(n('q1tI')),
        p = n('QmWs'),
        h = n('g/15'),
        m = l(n('nOHt'))
      function v(e) {
        return e && 'object' === typeof e ? (0, h.formatWithValidation)(e) : e
      }
      var g = new Map(),
        y = window.IntersectionObserver,
        b = {}
      function w() {
        return (
          f ||
          (y
            ? (f = new y(
                function (e) {
                  e.forEach(function (e) {
                    if (g.has(e.target)) {
                      var t = g.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (f.unobserve(e.target), g.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        )
      }
      var N = (function (e) {
        i(l, e)
        var t,
          n =
            ((t = l),
            function () {
              var e,
                n = o(t)
              if (c()) {
                var r = o(this).constructor
                e = Reflect.construct(n, arguments, r)
              } else e = n.apply(this, arguments)
              return a(this, e)
            })
        function l(e) {
          var t
          return (
            r(this, l),
            ((t = n.call(this, e)).p = void 0),
            (t.cleanUpListeners = function () {}),
            (t.formatUrls = (function (e) {
              var t = null,
                n = null,
                r = null
              return function (s, a) {
                if (r && s === t && a === n) return r
                var o = e(s, a)
                return (t = s), (n = a), (r = o), o
              }
            })(function (e, t) {
              return { href: v(e), as: t ? v(t) : t }
            })),
            (t.linkClicked = function (e) {
              var n = e.currentTarget,
                r = n.nodeName,
                s = n.target
              if (
                'A' !== r ||
                !(
                  (s && '_self' !== s) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var a = t.formatUrls(t.props.href, t.props.as),
                  o = a.href,
                  i = a.as
                if (
                  (function (e) {
                    var t = (0, p.parse)(e, !1, !0),
                      n = (0, p.parse)((0, h.getLocationOrigin)(), !1, !0)
                    return !t.host || (t.protocol === n.protocol && t.host === n.host)
                  })(o)
                ) {
                  var c = window.location.pathname
                  ;(o = (0, p.resolve)(c, o)),
                    (i = i ? (0, p.resolve)(c, i) : o),
                    e.preventDefault()
                  var l = t.props.scroll
                  null == l && (l = i.indexOf('#') < 0),
                    m.default[t.props.replace ? 'replace' : 'push'](o, i, {
                      shallow: t.props.shallow
                    }).then(function (e) {
                      e && l && (window.scrollTo(0, 0), document.body.focus())
                    })
                }
              }
            }),
            (t.p = !1 !== e.prefetch),
            t
          )
        }
        return (
          s(l, [
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
                  s = (0, p.resolve)(e, n)
                return [s, r ? (0, p.resolve)(e, r) : s]
              }
            },
            {
              key: 'handleRef',
              value: function (e) {
                var t = this
                this.p &&
                  y &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  b[this.getPaths().join('%')] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var n = w()
                      return n
                        ? (n.observe(e),
                          g.set(e, t),
                          function () {
                            try {
                              n.unobserve(e)
                            } catch (t) {
                              console.error(t)
                            }
                            g.delete(e)
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
                  m.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0
                  }),
                    (b[t.join('%')] = !0)
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
                  s = n.as
                'string' === typeof t && (t = d.default.createElement('a', null, t))
                var a = d.Children.only(t),
                  o = {
                    ref: function (t) {
                      e.handleRef(t),
                        a &&
                          'object' === typeof a &&
                          a.ref &&
                          ('function' === typeof a.ref
                            ? a.ref(t)
                            : 'object' === typeof a.ref && (a.ref.current = t))
                    },
                    onMouseEnter: function (t) {
                      a.props &&
                        'function' === typeof a.props.onMouseEnter &&
                        a.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 })
                    },
                    onClick: function (t) {
                      a.props && 'function' === typeof a.props.onClick && a.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t)
                    }
                  }
                return (
                  (!this.props.passHref && ('a' !== a.type || 'href' in a.props)) ||
                    (o.href = s || r),
                  d.default.cloneElement(a, o)
                )
              }
            }
          ]),
          l
        )
      })(d.Component)
      t.default = N
    },
    tnup: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('1OyB'),
        s = n('vuIU'),
        a = n('md7G'),
        o = n('foSv'),
        i = n('Ji7U'),
        c = n('q1tI'),
        l = n.n(c),
        u = n('K6CT'),
        f = n.n(u),
        d = n('xj1T'),
        p = n.n(d),
        h = l.a.createElement
      function m() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' === typeof Proxy) return !0
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
        } catch (e) {
          return !1
        }
      }
      var v = (function (e) {
        Object(i.a)(c, e)
        var t,
          n =
            ((t = c),
            function () {
              var e,
                n = Object(o.a)(t)
              if (m()) {
                var r = Object(o.a)(this).constructor
                e = Reflect.construct(n, arguments, r)
              } else e = n.apply(this, arguments)
              return Object(a.a)(this, e)
            })
        function c() {
          return Object(r.a)(this, c), n.apply(this, arguments)
        }
        return (
          Object(s.a)(c, [
            {
              key: 'render',
              value: function () {
                return h(
                  'div',
                  { className: 'methods' },
                  h('h1', { className: 'pagetitle' }, 'Methods'),
                  h(
                    'p',
                    { className: 'description' },
                    "This section describes the usage of Sandhands's methods. To see the more about the sanitation format please see ",
                    h(f.a, { href: '/Sandhands/format.html' }, 'here'),
                    '.'
                  ),
                  h(
                    'div',
                    { id: 'sanitize', className: 'method section' },
                    h('h2', { className: 'name' }, 'Sanitize'),
                    h(
                      'p',
                      { className: 'description' },
                      'Throws the first error found in the input.'
                    ),
                    h(
                      p.a,
                      { className: 'javascript example' },
                      'const {sanitize} = require(\'sandhands\')\n\nsanitize(1, String) // throws error with message "Invalid Type"\nsanitize(14, {_: Number, min: 22}) // throws error with message "Too small"'
                    )
                  ),
                  h(
                    'div',
                    { id: 'valid', className: 'method section' },
                    h('h2', { className: 'name' }, 'Valid'),
                    h(
                      'p',
                      { className: 'description' },
                      'Returns a boolean repesenting whether or not the input matched the format.'
                    ),
                    h(
                      p.a,
                      { className: 'javascript example' },
                      "const {valid} = require('sandhands')\n\nconsole.log(valid(12, String)) // false\nconsole.log(valid('', String)) // false (the default minimum string length is 1)\nconsole.log(valid('foo bar', String)) // true"
                    )
                  ),
                  h(
                    'div',
                    { id: 'details', className: 'method section' },
                    h('h2', { className: 'name' }, 'Details'),
                    h(
                      'p',
                      { className: 'description' },
                      'Returns a array/object representing where and what the errors are dependant upon the format'
                    ),
                    h(
                      p.a,
                      { className: 'javascript example' },
                      'const {details} = require(\'sandhands\')\n\nconsole.log(details(12, String)) // "Invalid Type"\nconsole.log(details(\'\', String)) // "Too short"\nconsole.log(details(\'foo bar\', String)) // null\nconsole.log(details({a: 24}, {a: String, b: String})) // {a: "Expected String", b: "Property Required"}'
                    )
                  ),
                  h(
                    'div',
                    { id: 'format', className: 'method section' },
                    h('h2', { className: 'name' }, 'Format'),
                    h(
                      'p',
                      { className: 'description' },
                      'Shorthand for creating formats that have options. This can be useful for writing inline options.'
                    ),
                    h(
                      p.a,
                      { className: 'javascript Example' },
                      "import {details, Format, F} from 'sandhands'\n\nconsole.log(details('Mixed Case', Format(String).lowercase())) // \"Lowercase Only\"\nconsole.log(details('myname@jef.com', F(String).email().minLength(25))) // \"Too short\"\nconsole.log(details({name: Format(String).lowerCase()})) // Also writeable as {_: String, lowercase: true}"
                    )
                  ),
                  h(
                    'div',
                    { id: 'set-default', className: 'method section' },
                    h('h2', { className: 'name' }, 'Set Default'),
                    h(
                      'p',
                      { className: 'description' },
                      'Set the default options for any data type'
                    ),
                    h(
                      p.a,
                      { className: 'javascript example' },
                      "const {setDefault, valid} = require('sandhands')\nconsole.log(valid('', String)) // returns false because the default minimum length for strings is 1\nsetDefault(String, {minLength: 0})\nconsole.log(valid('', String)) // returns true because we've now lowered the minimum length to 0"
                    )
                  ),
                  h(
                    'div',
                    { id: 'custom-format', className: 'method section' },
                    h('h2', { className: 'name' }, 'Custom Format'),
                    h(
                      'p',
                      { className: 'description' },
                      'Set a custom format. The default custom formats can be found ',
                      h(
                        'a',
                        {
                          href:
                            'https://github.com/L1lith/Sandhands/blob/master/source/customFormats.js'
                        },
                        'here'
                      ),
                      ', but they can be overriden.'
                    ),
                    h(
                      p.a,
                      { className: 'javascript example' },
                      "const {valid, customFormat} = require('sandhands')\ncustomFormat('ticketNumber', {_: Number, min: 1000, max: 2000})\nconsole.log(valid(12, 'ticketNumber')) // false\nconsole.log(valid(1532, 'ticketNumber')) // true\nconsooe.log(valid(1523, {_: 'ticketNumber', even: true})) // false"
                    )
                  ),
                  h(
                    'div',
                    { id: 'sandhands-express', className: 'method section' },
                    h('h2', { className: 'name' }, 'Sandhands Express'),
                    h(
                      'p',
                      { className: 'description' },
                      'The express middleware allows you to seamlessly sanitize your inputs. You must also use a body parsing library in conjunction to set the req.body to be sanitized.'
                    ),
                    h(
                      p.a,
                      { className: 'javascript example' },
                      "const server = require('express')()\nconst {sandhandsExpress} = require('sandhands')\nconst bodyParser = require('body-parser')\n\nserver.use(bodyParser.json())\n\nserver.post('/register', sandhandsExpress({\n  username: 'username',\n  email: 'email',\n  password: 'password'\n}), (req, res) => {\n  console.log('Got Registration Details', req.body)\n  res.send('Registered')\n})\n\nserver.listen(8050, err => {\n  if (err) return console.log(err)\n  console.log(\"Server Running.\")\n})"
                    )
                  )
                )
              }
            }
          ]),
          c
        )
      })(c.Component)
      t.default = v
    }
  },
  [['1HVj', 0, 1, 2, 3]]
])
