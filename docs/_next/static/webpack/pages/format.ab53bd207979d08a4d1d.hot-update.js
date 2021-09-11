webpackHotUpdate_N_E("pages/format",{

/***/ "./pages/format.js":
/*!*************************!*\
  !*** ./pages/format.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_format_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/format.less */ "./styles/format.less");
/* harmony import */ var _styles_format_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_format_less__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\05L1\\Projects\\Sandhands\\docs-source\\pages\\format.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Format = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Format, _Component);

  var _super = _createSuper(Format);

  function Format() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Format);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Format, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "format",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 7
        }
      }, __jsx("h1", {
        className: "pagetitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, "Format"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, "This section describes the format (the sanitation schema) we give to Sandhands to define how it should sanitize the input."), __jsx("div", {
        id: "primitives",
        className: "primitives section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }, "Primitives Basics"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, "Null and undefined can be passed in as is, and it will expect strict equality."), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nvalid('', null) // false\nvalid(undefined, null) // false\nvalid(null, null) // true\n\nvalid('', undefined) // false\nvalid(null, undefined) // false\nvalid(undefined, undefined) // true"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, "Numbers, Strings, and Booleans can be passed in by using their class names."), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nvalid(12, String) // false\nvalid(String, String) // false\nvalid('hello world', String) // true\n\nvalid('ganondorf', Number) // false\nvalid(Number, Number) // false\nvalid(42, Number) // true")), __jsx("div", {
        id: "options",
        className: "options section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, "Options"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, "All data types have a set of default options which accompany them. We can override the defaults with our own arguments two different ways", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }), "The first way is we can pass the options as the third argument after the format to the method."), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid('hello', String, {minLength: 8})) // false\nconsole.log(valid('hello world', String, {minLength: 8})) // true"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, "The second way to pass options is inside the format itself. We use a special object syntax to designate this:"), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid(\"Lily\", {_: String, lowercase: true})) // false\nconsole.log(valid(\"lily\", {_: String, lowercase: true})) // true")), __jsx("div", {
        id: "strings",
        className: "strings section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, "Strings"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, "The following options are available for strings:"), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, "email"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, "Flag as true to required the string be a valid email.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      }, "lowercase"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, "Flag as true to required the string be lowercase.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, "uppercase"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, "Flag as true to required the string be uppercase.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }, "minLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }, "Set the minimum required length of the string. Default: 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }, "maxLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }
      }, "Set the maximum required length of the string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }
      }, "length"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      }, "Set the exact required length of the string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }
      }, "allowed"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }
      }, "Set a string to whitelist the input string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 15
        }
      }, "banned"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      }, "Set a string to blacklist the input string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 15
        }
      }, "whitespace"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }
      }, "Flag as false to require the string to contain no whitespaces.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      }, "regex"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, "Set a regular expression to test the input string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }
      }, "trimmed"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }
      }, "Flag as true to require the string to not begin or end with whitespace.")))), __jsx("div", {
        id: "numbers",
        className: "numbers section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }
      }, "Numbers"), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }, "integer"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 15
        }
      }, "Flag as true to require whole numbers. Default: false")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 15
        }
      }, "allowNaN"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, "Flag as true to allow NaN. Default: false")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      }, "finite"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }, "Flag as false to allow Infinity. Default: true")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 15
        }
      }, "min"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      }, "Set the minimum value of the input")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 15
        }
      }, "max"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 15
        }
      }, "Set the maximum value of the input")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 15
        }
      }, "even"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }
      }, "Flag as true to require even numbers.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }
      }, "odd"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 15
        }
      }, "Flag as true to require odd numbers.")))), __jsx("div", {
        id: "objects",
        className: "object section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, "Objects"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, "We can sanitize objects by creating our own object representing how we expect the input to be formatted."), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 15
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }
      }, "Flag as true to require all input values to be defined by the format in order to be valid (unless flagged as optional). This also prevents the user from providing their own additional properties. Default: true")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }
      }, "allOptional"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 15
        }
      }, "Flag as true to make all of the properties optional")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }
      }, "bannedProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }
      }, "Provide an array of property names (strings) to designate which properties are not allowed to be provided.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 15
        }
      }, "optionalProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 15
        }
      }, "Provide an array of property names (strings) to designate which properties are optional."))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, "Here's an example of the sanitation behavior using these options"), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid({}, {})) // true\nconsole.log(valid({}, {a: String})) // false\nconsole.log(valid({a: 'hello world'}, {a: String})) // true\nconsole.log(valid({}, {_: {a: String}, optionalProps: [\"a\"]})) // true\nconsole.log(valid({b: 12}, {})) // false\nconsole.log(valid({b: 12}, {}, {strict: false})) // true")), __jsx("div", {
        id: "arrays",
        className: "array section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }
      }, "Arrays"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }
      }, "We can sanitize arrays by creating our own array representing how we expect the input to be formatted. The default array behavior might seem confusing at first, however once you understand it in practice it is simple and expressive."), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 15
        }
      }, "standard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 15
        }
      }, "Manually set the standard to use for all array values")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      }, "firstAsStandard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 15
        }
      }, "Flag as true to splice the first element of the format array and use it to validate all values of the input array that are not explicitly defined by the format array. The values of all of the format array are all shifted to the left by one index. Default: true if the array length is equal to 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 15
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 15
        }
      }, "Flag as true to require all array indexs to be defined by the format in order to be valid. Default: true if the format length is at least 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 15
        }
      }, "minLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 15
        }
      }, "Set the minimum required length of the array. Default: 1 unless the format array is empty and there is no standard.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 15
        }
      }, "maxLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      }, "Set the maximum length of the array.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 15
        }
      }, "length"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }
      }, "Set the exact required length of the array."))), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }
      }, "Here's an example of the sanitation behavior using these options"), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid([], [])) // true\nconsole.log(valid([], [Number])) // true - Because the format array is only one element long the first value is set as the firstAsStandard format, and strict is not assumed to be true.\nconsole.log(valid([12], [Number])) // true\nconsole.log(valid([54, 25], [Number])) // true - As you can see\nconsole.log(valid([12, 12], [Number, Number])) // true - Because the format array is longer than one element firstAsStandard is not assumed and strict is set to true.\n\nconsole.log(valid([52, 63, 14], [Number, Number])) // false - Because strict is assumed extra array elements will cause validation to fail.\n\nconsole.log(valid(['a', 15, 25], {_:[Number, String], firstAsStandard: true})) // true - We can also use firstAsStandard alongside with specific formats for certain array indexes by setting it explicitly in the inline options. The first index (Number) will be the standard format for all indexes, and the second index will now become the beginning of the array of custom formats for specific indexes, meaning the first array index will be expected to be a string, and all following indexes will be expected to be numbers.")), __jsx("div", {
        id: "functions",
        className: "function section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }
      }, "Functions"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }
      }, "Functions automatically support all of the object options because functions are effectively also objects.")), __jsx("div", {
        id: "universal",
        className: "universal section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }
      }, "Universal Options"), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 15
        }
      }, "validate"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 15
        }
      }, "Expects a function or array of functions to compare the input with. If any don't return true, reject the input.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 15
        }
      }, "equalTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 15
        }
      }, "Expects the input to be strictly equal (using the === operator) to the value of the equalTo option.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }
      }, "deepEqualTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 15
        }
      }, "Expects the input to be deeply equal to the value of the deepEqualTo option.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 15
        }
      }, "nullable"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 15
        }
      }, "Flag as true in order to accept null instead of the provided format, hence making the input \"nullable\".")))), __jsx("div", {
        className: "numbers section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }
      }, "All"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }
      }, "The All format is a special class we can import that acts as a wildcard. Please be careful with this as any kind of dangerous input could be passed. Please only use this if you know what you are doing."), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }
      }, "const {valid, All} = require('sandhands')\n\nconsole.log(valid(\"Hello :)\", All)) // true\nconsole.log(valid(Infinity, All)) // true\nconsole.log(valid({a: 'hello world', b: 12}, {a: String, b: All})) // true")));
    }
  }]);

  return Format;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Format);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybWF0LmpzIl0sIm5hbWVzIjpbIkZvcm1hdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNJQUZGLEVBTUU7QUFBSyxVQUFFLEVBQUMsWUFBUjtBQUFxQixpQkFBUyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBRkYsRUFLRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtPQUxGLEVBY0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFkRixFQWlCRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNQQWpCRixDQU5GLEVBaUNFO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsaUJBQVMsRUFBQyxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7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d2VicGFjay9wYWdlcy9mb3JtYXQuYWI1M2JkMjA3OTc5ZDA4YTRkMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAncmVhY3QtaGlnaGxpZ2h0J1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9mb3JtYXQubGVzcydcclxuXHJcbmNsYXNzIEZvcm1hdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYXRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZXRpdGxlXCI+Rm9ybWF0PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgVGhpcyBzZWN0aW9uIGRlc2NyaWJlcyB0aGUgZm9ybWF0ICh0aGUgc2FuaXRhdGlvbiBzY2hlbWEpIHdlIGdpdmUgdG8gU2FuZGhhbmRzIHRvIGRlZmluZVxyXG4gICAgICAgICAgaG93IGl0IHNob3VsZCBzYW5pdGl6ZSB0aGUgaW5wdXQuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmltaXRpdmVzXCIgY2xhc3NOYW1lPVwicHJpbWl0aXZlcyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPlByaW1pdGl2ZXMgQmFzaWNzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIE51bGwgYW5kIHVuZGVmaW5lZCBjYW4gYmUgcGFzc2VkIGluIGFzIGlzLCBhbmQgaXQgd2lsbCBleHBlY3Qgc3RyaWN0IGVxdWFsaXR5LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbnZhbGlkKCcnLCBudWxsKSAvLyBmYWxzZVxyXG52YWxpZCh1bmRlZmluZWQsIG51bGwpIC8vIGZhbHNlXHJcbnZhbGlkKG51bGwsIG51bGwpIC8vIHRydWVcclxuXHJcbnZhbGlkKCcnLCB1bmRlZmluZWQpIC8vIGZhbHNlXHJcbnZhbGlkKG51bGwsIHVuZGVmaW5lZCkgLy8gZmFsc2VcclxudmFsaWQodW5kZWZpbmVkLCB1bmRlZmluZWQpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgTnVtYmVycywgU3RyaW5ncywgYW5kIEJvb2xlYW5zIGNhbiBiZSBwYXNzZWQgaW4gYnkgdXNpbmcgdGhlaXIgY2xhc3MgbmFtZXMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxudmFsaWQoMTIsIFN0cmluZykgLy8gZmFsc2VcclxudmFsaWQoU3RyaW5nLCBTdHJpbmcpIC8vIGZhbHNlXHJcbnZhbGlkKCdoZWxsbyB3b3JsZCcsIFN0cmluZykgLy8gdHJ1ZVxyXG5cclxudmFsaWQoJ2dhbm9uZG9yZicsIE51bWJlcikgLy8gZmFsc2VcclxudmFsaWQoTnVtYmVyLCBOdW1iZXIpIC8vIGZhbHNlXHJcbnZhbGlkKDQyLCBOdW1iZXIpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvcHRpb25zXCIgY2xhc3NOYW1lPVwib3B0aW9ucyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPk9wdGlvbnM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgQWxsIGRhdGEgdHlwZXMgaGF2ZSBhIHNldCBvZiBkZWZhdWx0IG9wdGlvbnMgd2hpY2ggYWNjb21wYW55IHRoZW0uIFdlIGNhbiBvdmVycmlkZSB0aGVcclxuICAgICAgICAgICAgZGVmYXVsdHMgd2l0aCBvdXIgb3duIGFyZ3VtZW50cyB0d28gZGlmZmVyZW50IHdheXNcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFRoZSBmaXJzdCB3YXkgaXMgd2UgY2FuIHBhc3MgdGhlIG9wdGlvbnMgYXMgdGhlIHRoaXJkIGFyZ3VtZW50IGFmdGVyIHRoZSBmb3JtYXQgdG8gdGhlXHJcbiAgICAgICAgICAgIG1ldGhvZC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZCgnaGVsbG8nLCBTdHJpbmcsIHttaW5MZW5ndGg6IDh9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoJ2hlbGxvIHdvcmxkJywgU3RyaW5nLCB7bWluTGVuZ3RoOiA4fSkpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgVGhlIHNlY29uZCB3YXkgdG8gcGFzcyBvcHRpb25zIGlzIGluc2lkZSB0aGUgZm9ybWF0IGl0c2VsZi4gV2UgdXNlIGEgc3BlY2lhbCBvYmplY3RcclxuICAgICAgICAgICAgc3ludGF4IHRvIGRlc2lnbmF0ZSB0aGlzOlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFwiTGlseVwiLCB7XzogU3RyaW5nLCBsb3dlcmNhc2U6IHRydWV9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoXCJsaWx5XCIsIHtfOiBTdHJpbmcsIGxvd2VyY2FzZTogdHJ1ZX0pKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwic3RyaW5nc1wiIGNsYXNzTmFtZT1cInN0cmluZ3Mgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5TdHJpbmdzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+VGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSBhdmFpbGFibGUgZm9yIHN0cmluZ3M6PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5lbWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZWQgdGhlIHN0cmluZyBiZSBhIHZhbGlkIGVtYWlsLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5sb3dlcmNhc2U8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmVkIHRoZSBzdHJpbmcgYmUgbG93ZXJjYXNlLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj51cHBlcmNhc2U8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmVkIHRoZSBzdHJpbmcgYmUgdXBwZXJjYXNlLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5taW5MZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBTZXQgdGhlIG1pbmltdW0gcmVxdWlyZWQgbGVuZ3RoIG9mIHRoZSBzdHJpbmcuIERlZmF1bHQ6IDFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWF4TGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWF4aW11bSByZXF1aXJlZCBsZW5ndGggb2YgdGhlIHN0cmluZy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgZXhhY3QgcmVxdWlyZWQgbGVuZ3RoIG9mIHRoZSBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbG93ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IGEgc3RyaW5nIHRvIHdoaXRlbGlzdCB0aGUgaW5wdXQgc3RyaW5nLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5iYW5uZWQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IGEgc3RyaW5nIHRvIGJsYWNrbGlzdCB0aGUgaW5wdXQgc3RyaW5nLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj53aGl0ZXNwYWNlPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRmxhZyBhcyBmYWxzZSB0byByZXF1aXJlIHRoZSBzdHJpbmcgdG8gY29udGFpbiBubyB3aGl0ZXNwYWNlcy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+cmVnZXg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRvIHRlc3QgdGhlIGlucHV0IHN0cmluZy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+dHJpbW1lZDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIHRoZSBzdHJpbmcgdG8gbm90IGJlZ2luIG9yIGVuZCB3aXRoIHdoaXRlc3BhY2UuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJudW1iZXJzXCIgY2xhc3NOYW1lPVwibnVtYmVycyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPk51bWJlcnM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5pbnRlZ2VyPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIHdob2xlIG51bWJlcnMuIERlZmF1bHQ6IGZhbHNlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbG93TmFOPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byBhbGxvdyBOYU4uIERlZmF1bHQ6IGZhbHNlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmZpbml0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIGZhbHNlIHRvIGFsbG93IEluZmluaXR5LiBEZWZhdWx0OiB0cnVlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1pbjwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIG1pbmltdW0gdmFsdWUgb2YgdGhlIGlucHV0PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1heDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIGlucHV0PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmV2ZW48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgZXZlbiBudW1iZXJzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5vZGQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgb2RkIG51bWJlcnMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvYmplY3RzXCIgY2xhc3NOYW1lPVwib2JqZWN0IHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+T2JqZWN0czwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBXZSBjYW4gc2FuaXRpemUgb2JqZWN0cyBieSBjcmVhdGluZyBvdXIgb3duIG9iamVjdCByZXByZXNlbnRpbmcgaG93IHdlIGV4cGVjdCB0aGUgaW5wdXRcclxuICAgICAgICAgICAgdG8gYmUgZm9ybWF0dGVkLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5zdHJpY3Q8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gcmVxdWlyZSBhbGwgaW5wdXQgdmFsdWVzIHRvIGJlIGRlZmluZWQgYnkgdGhlIGZvcm1hdCBpbiBvcmRlciB0byBiZVxyXG4gICAgICAgICAgICAgICAgdmFsaWQgKHVubGVzcyBmbGFnZ2VkIGFzIG9wdGlvbmFsKS4gVGhpcyBhbHNvIHByZXZlbnRzIHRoZSB1c2VyIGZyb20gcHJvdmlkaW5nIHRoZWlyXHJcbiAgICAgICAgICAgICAgICBvd24gYWRkaXRpb25hbCBwcm9wZXJ0aWVzLiBEZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbE9wdGlvbmFsPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byBtYWtlIGFsbCBvZiB0aGUgcHJvcGVydGllcyBvcHRpb25hbDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5iYW5uZWRQcm9wczwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIFByb3ZpZGUgYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgKHN0cmluZ3MpIHRvIGRlc2lnbmF0ZSB3aGljaCBwcm9wZXJ0aWVzIGFyZSBub3RcclxuICAgICAgICAgICAgICAgIGFsbG93ZWQgdG8gYmUgcHJvdmlkZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm9wdGlvbmFsUHJvcHM8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBQcm92aWRlIGFuIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIChzdHJpbmdzKSB0byBkZXNpZ25hdGUgd2hpY2ggcHJvcGVydGllcyBhcmVcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwPkhlcmUncyBhbiBleGFtcGxlIG9mIHRoZSBzYW5pdGF0aW9uIGJlaGF2aW9yIHVzaW5nIHRoZXNlIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoe30sIHt9KSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7fSwge2E6IFN0cmluZ30pKSAvLyBmYWxzZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7YTogJ2hlbGxvIHdvcmxkJ30sIHthOiBTdHJpbmd9KSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7fSwge186IHthOiBTdHJpbmd9LCBvcHRpb25hbFByb3BzOiBbXCJhXCJdfSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoe2I6IDEyfSwge30pKSAvLyBmYWxzZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7YjogMTJ9LCB7fSwge3N0cmljdDogZmFsc2V9KSkgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImFycmF5c1wiIGNsYXNzTmFtZT1cImFycmF5IHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+QXJyYXlzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIFdlIGNhbiBzYW5pdGl6ZSBhcnJheXMgYnkgY3JlYXRpbmcgb3VyIG93biBhcnJheSByZXByZXNlbnRpbmcgaG93IHdlIGV4cGVjdCB0aGUgaW5wdXQgdG9cclxuICAgICAgICAgICAgYmUgZm9ybWF0dGVkLiBUaGUgZGVmYXVsdCBhcnJheSBiZWhhdmlvciBtaWdodCBzZWVtIGNvbmZ1c2luZyBhdCBmaXJzdCwgaG93ZXZlciBvbmNlIHlvdVxyXG4gICAgICAgICAgICB1bmRlcnN0YW5kIGl0IGluIHByYWN0aWNlIGl0IGlzIHNpbXBsZSBhbmQgZXhwcmVzc2l2ZS5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnN0YW5kYXJkPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPk1hbnVhbGx5IHNldCB0aGUgc3RhbmRhcmQgdG8gdXNlIGZvciBhbGwgYXJyYXkgdmFsdWVzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmZpcnN0QXNTdGFuZGFyZDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSB0byBzcGxpY2UgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGZvcm1hdCBhcnJheSBhbmQgdXNlIGl0IHRvIHZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICBhbGwgdmFsdWVzIG9mIHRoZSBpbnB1dCBhcnJheSB0aGF0IGFyZSBub3QgZXhwbGljaXRseSBkZWZpbmVkIGJ5IHRoZSBmb3JtYXQgYXJyYXkuXHJcbiAgICAgICAgICAgICAgICBUaGUgdmFsdWVzIG9mIGFsbCBvZiB0aGUgZm9ybWF0IGFycmF5IGFyZSBhbGwgc2hpZnRlZCB0byB0aGUgbGVmdCBieSBvbmUgaW5kZXguXHJcbiAgICAgICAgICAgICAgICBEZWZhdWx0OiB0cnVlIGlmIHRoZSBhcnJheSBsZW5ndGggaXMgZXF1YWwgdG8gMVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5zdHJpY3Q8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gcmVxdWlyZSBhbGwgYXJyYXkgaW5kZXhzIHRvIGJlIGRlZmluZWQgYnkgdGhlIGZvcm1hdCBpbiBvcmRlciB0byBiZVxyXG4gICAgICAgICAgICAgICAgdmFsaWQuIERlZmF1bHQ6IHRydWUgaWYgdGhlIGZvcm1hdCBsZW5ndGggaXMgYXQgbGVhc3QgMVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5taW5MZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBTZXQgdGhlIG1pbmltdW0gcmVxdWlyZWQgbGVuZ3RoIG9mIHRoZSBhcnJheS4gRGVmYXVsdDogMSB1bmxlc3MgdGhlIGZvcm1hdCBhcnJheSBpc1xyXG4gICAgICAgICAgICAgICAgZW1wdHkgYW5kIHRoZXJlIGlzIG5vIHN0YW5kYXJkLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5tYXhMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgYXJyYXkuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmxlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIGV4YWN0IHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgYXJyYXkuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHA+SGVyZSdzIGFuIGV4YW1wbGUgb2YgdGhlIHNhbml0YXRpb24gYmVoYXZpb3IgdXNpbmcgdGhlc2Ugb3B0aW9uczwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChbXSwgW10pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKFtdLCBbTnVtYmVyXSkpIC8vIHRydWUgLSBCZWNhdXNlIHRoZSBmb3JtYXQgYXJyYXkgaXMgb25seSBvbmUgZWxlbWVudCBsb25nIHRoZSBmaXJzdCB2YWx1ZSBpcyBzZXQgYXMgdGhlIGZpcnN0QXNTdGFuZGFyZCBmb3JtYXQsIGFuZCBzdHJpY3QgaXMgbm90IGFzc3VtZWQgdG8gYmUgdHJ1ZS5cclxuY29uc29sZS5sb2codmFsaWQoWzEyXSwgW051bWJlcl0pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKFs1NCwgMjVdLCBbTnVtYmVyXSkpIC8vIHRydWUgLSBBcyB5b3UgY2FuIHNlZVxyXG5jb25zb2xlLmxvZyh2YWxpZChbMTIsIDEyXSwgW051bWJlciwgTnVtYmVyXSkpIC8vIHRydWUgLSBCZWNhdXNlIHRoZSBmb3JtYXQgYXJyYXkgaXMgbG9uZ2VyIHRoYW4gb25lIGVsZW1lbnQgZmlyc3RBc1N0YW5kYXJkIGlzIG5vdCBhc3N1bWVkIGFuZCBzdHJpY3QgaXMgc2V0IHRvIHRydWUuXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChbNTIsIDYzLCAxNF0sIFtOdW1iZXIsIE51bWJlcl0pKSAvLyBmYWxzZSAtIEJlY2F1c2Ugc3RyaWN0IGlzIGFzc3VtZWQgZXh0cmEgYXJyYXkgZWxlbWVudHMgd2lsbCBjYXVzZSB2YWxpZGF0aW9uIHRvIGZhaWwuXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChbJ2EnLCAxNSwgMjVdLCB7XzpbTnVtYmVyLCBTdHJpbmddLCBmaXJzdEFzU3RhbmRhcmQ6IHRydWV9KSkgLy8gdHJ1ZSAtIFdlIGNhbiBhbHNvIHVzZSBmaXJzdEFzU3RhbmRhcmQgYWxvbmdzaWRlIHdpdGggc3BlY2lmaWMgZm9ybWF0cyBmb3IgY2VydGFpbiBhcnJheSBpbmRleGVzIGJ5IHNldHRpbmcgaXQgZXhwbGljaXRseSBpbiB0aGUgaW5saW5lIG9wdGlvbnMuIFRoZSBmaXJzdCBpbmRleCAoTnVtYmVyKSB3aWxsIGJlIHRoZSBzdGFuZGFyZCBmb3JtYXQgZm9yIGFsbCBpbmRleGVzLCBhbmQgdGhlIHNlY29uZCBpbmRleCB3aWxsIG5vdyBiZWNvbWUgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkgb2YgY3VzdG9tIGZvcm1hdHMgZm9yIHNwZWNpZmljIGluZGV4ZXMsIG1lYW5pbmcgdGhlIGZpcnN0IGFycmF5IGluZGV4IHdpbGwgYmUgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcsIGFuZCBhbGwgZm9sbG93aW5nIGluZGV4ZXMgd2lsbCBiZSBleHBlY3RlZCB0byBiZSBudW1iZXJzLmB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZ1bmN0aW9uc1wiIGNsYXNzTmFtZT1cImZ1bmN0aW9uIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+RnVuY3Rpb25zPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIEZ1bmN0aW9ucyBhdXRvbWF0aWNhbGx5IHN1cHBvcnQgYWxsIG9mIHRoZSBvYmplY3Qgb3B0aW9ucyBiZWNhdXNlIGZ1bmN0aW9ucyBhcmVcclxuICAgICAgICAgICAgZWZmZWN0aXZlbHkgYWxzbyBvYmplY3RzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ1bml2ZXJzYWxcIiBjbGFzc05hbWU9XCJ1bml2ZXJzYWwgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5Vbml2ZXJzYWwgT3B0aW9uczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnZhbGlkYXRlPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRXhwZWN0cyBhIGZ1bmN0aW9uIG9yIGFycmF5IG9mIGZ1bmN0aW9ucyB0byBjb21wYXJlIHRoZSBpbnB1dCB3aXRoLiBJZiBhbnkgZG9uJ3RcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlLCByZWplY3QgdGhlIGlucHV0LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5lcXVhbFRvPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRXhwZWN0cyB0aGUgaW5wdXQgdG8gYmUgc3RyaWN0bHkgZXF1YWwgKHVzaW5nIHRoZSA9PT0gb3BlcmF0b3IpIHRvIHRoZSB2YWx1ZSBvZiB0aGVcclxuICAgICAgICAgICAgICAgIGVxdWFsVG8gb3B0aW9uLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5kZWVwRXF1YWxUbzwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEV4cGVjdHMgdGhlIGlucHV0IHRvIGJlIGRlZXBseSBlcXVhbCB0byB0aGUgdmFsdWUgb2YgdGhlIGRlZXBFcXVhbFRvIG9wdGlvbi5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bnVsbGFibGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgaW4gb3JkZXIgdG8gYWNjZXB0IG51bGwgaW5zdGVhZCBvZiB0aGUgcHJvdmlkZWQgZm9ybWF0LCBoZW5jZSBtYWtpbmdcclxuICAgICAgICAgICAgICAgIHRoZSBpbnB1dCBcIm51bGxhYmxlXCIuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVycyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPkFsbDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBUaGUgQWxsIGZvcm1hdCBpcyBhIHNwZWNpYWwgY2xhc3Mgd2UgY2FuIGltcG9ydCB0aGF0IGFjdHMgYXMgYSB3aWxkY2FyZC4gUGxlYXNlIGJlXHJcbiAgICAgICAgICAgIGNhcmVmdWwgd2l0aCB0aGlzIGFzIGFueSBraW5kIG9mIGRhbmdlcm91cyBpbnB1dCBjb3VsZCBiZSBwYXNzZWQuIFBsZWFzZSBvbmx5IHVzZSB0aGlzXHJcbiAgICAgICAgICAgIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkLCBBbGx9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFwiSGVsbG8gOilcIiwgQWxsKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZChJbmZpbml0eSwgQWxsKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7YTogJ2hlbGxvIHdvcmxkJywgYjogMTJ9LCB7YTogU3RyaW5nLCBiOiBBbGx9KSkgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=