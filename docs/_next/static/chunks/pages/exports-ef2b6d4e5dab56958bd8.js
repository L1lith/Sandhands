_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"02Ru":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exports",function(){return n("nGoU")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),s=n("7KCV");t.__esModule=!0,t.default=void 0;var r,o=s(n("q1tI")),i=n("elyg"),c=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=r||(u?r=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function m(e,t,n,a){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=o.default.useState(),s=a(n,2),r=s[0],l=s[1],p=(0,c.useRouter)(),h=p&&p.pathname||"/",v=o.default.useMemo((function(){var t=(0,i.resolveHref)(h,e.href,!0),n=a(t,2),s=n[0],r=n[1];return{href:s,as:e.as?(0,i.resolveHref)(h,e.as):r||s}}),[h,e.href,e.as]),g=v.href,b=v.as;o.default.useEffect((function(){if(t&&u&&r&&r.tagName&&(0,i.isLocalURL)(g)&&!d[g+"%"+b])return f(r,(function(){m(p,g,b)}))}),[t,r,g,b,p]);var y=e.children,N=e.replace,w=e.shallow,x=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var S=o.Children.only(y),j={ref:function(e){e&&l(e),S&&"object"===typeof S&&S.ref&&("function"===typeof S.ref?S.ref(e):"object"===typeof S.ref&&(S.ref.current=e))},onClick:function(e){S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,a,s,r,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[s?"replace":"push"](n,a,{shallow:r}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,g,b,N,w,x)}};return t&&(j.onMouseEnter=function(e){(0,i.isLocalURL)(g)&&(S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),m(p,g,b,{priority:!0}))}),(e.passHref||"a"===S.type&&!("href"in S.props))&&(j.href=(0,i.addBasePath)((0,i.addLocale)(b,p&&p.locale,p&&p.defaultLocale))),o.default.cloneElement(S,j)};t.default=p},nGoU:function(e,t,n){"use strict";n.r(t);var a=n("1OyB"),s=n("vuIU"),r=n("Ji7U"),o=n("md7G"),i=n("foSv"),c=n("q1tI"),l=n.n(c),u=n("YFqc"),d=n.n(u),f=n("xj1T"),m=n.n(f),p=l.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var s=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var v=function(e){Object(r.a)(n,e);var t=h(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return p("div",{className:"exports"},p("h1",{className:"pagetitle"},"Exports"),p("p",{className:"description"},"This section describes the usage of Sandhands's exports. To see the more about the sanitation format please see ",p(d.a,{href:"/format.html"},"here"),"."),p("div",{id:"sanitize",className:"export section"},p("h2",{className:"name"},"Sanitize"),p("p",{className:"description"},"Throws the first error found in the input."),p(m.a,{className:"javascript example"},'const {sanitize} = require(\'sandhands\')\n\nsanitize(1, String) // throws error with message "Invalid Type"\nsanitize(14, {_: Number, min: 22}) // throws error with message "Too small"')),p("div",{id:"valid",className:"export section"},p("h2",{className:"name"},"Valid"),p("p",{className:"description"},"Returns a boolean repesenting whether or not the input matched the format."),p(m.a,{className:"javascript example"},"const {valid} = require('sandhands')\n\nconsole.log(valid(12, String)) // false\nconsole.log(valid('', String)) // false (the default minimum string length is 1)\nconsole.log(valid('foo bar', String)) // true")),p("div",{id:"details",className:"export section"},p("h2",{className:"name"},"Details"),p("p",{className:"description"},"Returns a array/object representing where and what the errors are dependant upon the format"),p(m.a,{className:"javascript example"},'const {details} = require(\'sandhands\')\n\nconsole.log(details(12, String)) // "Invalid Type"\nconsole.log(details(\'\', String)) // "Too short"\nconsole.log(details(\'foo bar\', String)) // null\nconsole.log(details({a: 24}, {a: String, b: String})) // {a: "Expected String", b: "Property Required"}')),p("div",{id:"format",className:"export section"},p("h2",{className:"name"},"Format"),p("p",{className:"description"},"Shorthand for creating formats that have options. This can be useful for writing inline options."),p(m.a,{className:"javascript Example"},"import {details, Format, F} from 'sandhands'\n\nconsole.log(details('Mixed Case', Format(String).lowercase())) // \"Lowercase Only\"\nconsole.log(details('myname@jef.com', F(String).email().minLength(25))) // \"Too short\"\nconsole.log(details({name: Format(String).lowerCase()})) // Also writeable as {_: String, lowercase: true}")),p("div",{id:"set-default",className:"export section"},p("h2",{className:"name"},"Set Default"),p("p",{className:"description"},"Set the default options for any data type"),p(m.a,{className:"javascript example"},"const {setDefault, valid} = require('sandhands')\nconsole.log(valid('', String)) // returns false because the default minimum length for strings is 1\nsetDefault(String, {minLength: 0})\nconsole.log(valid('', String)) // returns true because we've now lowered the minimum length to 0")),p("div",{id:"custom-format",className:"export section"},p("h2",{className:"name"},"Custom Format"),p("p",{className:"description"},"Set a custom format. The default custom formats can be found"," ",p("a",{href:"https://github.com/L1lith/Sandhands/blob/master/source/customFormats.js"},"here"),", but they can be overriden."),p(m.a,{className:"javascript example"},"const {valid, customFormat} = require('sandhands')\ncustomFormat('ticketNumber', {_: Number, min: 1000, max: 2000})\nconsole.log(valid(12, 'ticketNumber')) // false\nconsole.log(valid(1532, 'ticketNumber')) // true\nconsooe.log(valid(1523, {_: 'ticketNumber', even: true})) // false")),p("div",{id:"sandhands-express",className:"export section"},p("h2",{className:"name"},"Sandhands Express"),p("p",{className:"description"},"The express middleware allows you to seamlessly sanitize your inputs. You must also use a body parsing library in conjunction to set the req.body to be sanitized."),p(m.a,{className:"javascript example"},"const server = require('express')()\nconst {sandhandsExpress} = require('sandhands')\nconst bodyParser = require('body-parser')\n\nserver.use(bodyParser.json())\n\nserver.post('/register', sandhandsExpress({\n  username: 'username',\n  email: 'email',\n  password: 'password'\n}), (req, res) => {\n  console.log('Got Registration Details', req.body)\n  res.send('Registered')\n})\n\nserver.listen(8050, err => {\n  if (err) return console.log(err)\n  console.log(\"Server Running.\")\n})")))}}]),n}(c.Component);t.default=v}},[["02Ru",0,1,2,3]]]);