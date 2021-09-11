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
      }, "The All format is a special class we can import that acts as a wildcard. Please be careful with this as any kind of dangerous input could be passed. Please only use this if you know what you are doing."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }
      }, "Here's an example of the sanitation behavior using these options"), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybWF0LmpzIl0sIm5hbWVzIjpbIkZvcm1hdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNJQUZGLEVBTUU7QUFBSyxVQUFFLEVBQUMsWUFBUjtBQUFxQixpQkFBUyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBRkYsRUFLRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtPQUxGLEVBY0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFkRixFQWlCRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNQQWpCRixDQU5GLEVBaUNFO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsaUJBQVMsRUFBQyxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7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RDs7OztFQWhUa0JDLCtDOztBQW1UTkQscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybWF0LmJhNzljNzQ4Mzk4ZGUzN2U5Zjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJ3JlYWN0LWhpZ2hsaWdodCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZm9ybWF0Lmxlc3MnXHJcblxyXG5jbGFzcyBGb3JtYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWF0XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2V0aXRsZVwiPkZvcm1hdDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIFRoaXMgc2VjdGlvbiBkZXNjcmliZXMgdGhlIGZvcm1hdCAodGhlIHNhbml0YXRpb24gc2NoZW1hKSB3ZSBnaXZlIHRvIFNhbmRoYW5kcyB0byBkZWZpbmVcclxuICAgICAgICAgIGhvdyBpdCBzaG91bGQgc2FuaXRpemUgdGhlIGlucHV0LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGlkPVwicHJpbWl0aXZlc1wiIGNsYXNzTmFtZT1cInByaW1pdGl2ZXMgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5QcmltaXRpdmVzIEJhc2ljczwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBOdWxsIGFuZCB1bmRlZmluZWQgY2FuIGJlIHBhc3NlZCBpbiBhcyBpcywgYW5kIGl0IHdpbGwgZXhwZWN0IHN0cmljdCBlcXVhbGl0eS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG52YWxpZCgnJywgbnVsbCkgLy8gZmFsc2VcclxudmFsaWQodW5kZWZpbmVkLCBudWxsKSAvLyBmYWxzZVxyXG52YWxpZChudWxsLCBudWxsKSAvLyB0cnVlXHJcblxyXG52YWxpZCgnJywgdW5kZWZpbmVkKSAvLyBmYWxzZVxyXG52YWxpZChudWxsLCB1bmRlZmluZWQpIC8vIGZhbHNlXHJcbnZhbGlkKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIE51bWJlcnMsIFN0cmluZ3MsIGFuZCBCb29sZWFucyBjYW4gYmUgcGFzc2VkIGluIGJ5IHVzaW5nIHRoZWlyIGNsYXNzIG5hbWVzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbnZhbGlkKDEyLCBTdHJpbmcpIC8vIGZhbHNlXHJcbnZhbGlkKFN0cmluZywgU3RyaW5nKSAvLyBmYWxzZVxyXG52YWxpZCgnaGVsbG8gd29ybGQnLCBTdHJpbmcpIC8vIHRydWVcclxuXHJcbnZhbGlkKCdnYW5vbmRvcmYnLCBOdW1iZXIpIC8vIGZhbHNlXHJcbnZhbGlkKE51bWJlciwgTnVtYmVyKSAvLyBmYWxzZVxyXG52YWxpZCg0MiwgTnVtYmVyKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwib3B0aW9uc1wiIGNsYXNzTmFtZT1cIm9wdGlvbnMgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5PcHRpb25zPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIEFsbCBkYXRhIHR5cGVzIGhhdmUgYSBzZXQgb2YgZGVmYXVsdCBvcHRpb25zIHdoaWNoIGFjY29tcGFueSB0aGVtLiBXZSBjYW4gb3ZlcnJpZGUgdGhlXHJcbiAgICAgICAgICAgIGRlZmF1bHRzIHdpdGggb3VyIG93biBhcmd1bWVudHMgdHdvIGRpZmZlcmVudCB3YXlzXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICBUaGUgZmlyc3Qgd2F5IGlzIHdlIGNhbiBwYXNzIHRoZSBvcHRpb25zIGFzIHRoZSB0aGlyZCBhcmd1bWVudCBhZnRlciB0aGUgZm9ybWF0IHRvIHRoZVxyXG4gICAgICAgICAgICBtZXRob2QuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoJ2hlbGxvJywgU3RyaW5nLCB7bWluTGVuZ3RoOiA4fSkpIC8vIGZhbHNlXHJcbmNvbnNvbGUubG9nKHZhbGlkKCdoZWxsbyB3b3JsZCcsIFN0cmluZywge21pbkxlbmd0aDogOH0pKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIFRoZSBzZWNvbmQgd2F5IHRvIHBhc3Mgb3B0aW9ucyBpcyBpbnNpZGUgdGhlIGZvcm1hdCBpdHNlbGYuIFdlIHVzZSBhIHNwZWNpYWwgb2JqZWN0XHJcbiAgICAgICAgICAgIHN5bnRheCB0byBkZXNpZ25hdGUgdGhpczpcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChcIkxpbHlcIiwge186IFN0cmluZywgbG93ZXJjYXNlOiB0cnVlfSkpIC8vIGZhbHNlXHJcbmNvbnNvbGUubG9nKHZhbGlkKFwibGlseVwiLCB7XzogU3RyaW5nLCBsb3dlcmNhc2U6IHRydWV9KSkgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInN0cmluZ3NcIiBjbGFzc05hbWU9XCJzdHJpbmdzIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+U3RyaW5nczwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlRoZSBmb2xsb3dpbmcgb3B0aW9ucyBhcmUgYXZhaWxhYmxlIGZvciBzdHJpbmdzOjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+ZW1haWw8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmVkIHRoZSBzdHJpbmcgYmUgYSB2YWxpZCBlbWFpbC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bG93ZXJjYXNlPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlZCB0aGUgc3RyaW5nIGJlIGxvd2VyY2FzZS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+dXBwZXJjYXNlPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlZCB0aGUgc3RyaW5nIGJlIHVwcGVyY2FzZS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWluTGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgU2V0IHRoZSBtaW5pbXVtIHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgc3RyaW5nLiBEZWZhdWx0OiAxXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1heExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIG1heGltdW0gcmVxdWlyZWQgbGVuZ3RoIG9mIHRoZSBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmxlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIGV4YWN0IHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgc3RyaW5nLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5hbGxvd2VkPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCBhIHN0cmluZyB0byB3aGl0ZWxpc3QgdGhlIGlucHV0IHN0cmluZy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+YmFubmVkPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCBhIHN0cmluZyB0byBibGFja2xpc3QgdGhlIGlucHV0IHN0cmluZy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+d2hpdGVzcGFjZTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEZsYWcgYXMgZmFsc2UgdG8gcmVxdWlyZSB0aGUgc3RyaW5nIHRvIGNvbnRhaW4gbm8gd2hpdGVzcGFjZXMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnJlZ2V4PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBpbnB1dCBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnRyaW1tZWQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gcmVxdWlyZSB0aGUgc3RyaW5nIHRvIG5vdCBiZWdpbiBvciBlbmQgd2l0aCB3aGl0ZXNwYWNlLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwibnVtYmVyc1wiIGNsYXNzTmFtZT1cIm51bWJlcnMgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5OdW1iZXJzPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+aW50ZWdlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZSB3aG9sZSBudW1iZXJzLiBEZWZhdWx0OiBmYWxzZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5hbGxvd05hTjwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gYWxsb3cgTmFOLiBEZWZhdWx0OiBmYWxzZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5maW5pdGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyBmYWxzZSB0byBhbGxvdyBJbmZpbml0eS4gRGVmYXVsdDogdHJ1ZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5taW48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSBpbnB1dDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5tYXg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtYXhpbXVtIHZhbHVlIG9mIHRoZSBpbnB1dDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5ldmVuPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIGV2ZW4gbnVtYmVycy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+b2RkPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIG9kZCBudW1iZXJzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwib2JqZWN0c1wiIGNsYXNzTmFtZT1cIm9iamVjdCBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPk9iamVjdHM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgV2UgY2FuIHNhbml0aXplIG9iamVjdHMgYnkgY3JlYXRpbmcgb3VyIG93biBvYmplY3QgcmVwcmVzZW50aW5nIGhvdyB3ZSBleHBlY3QgdGhlIGlucHV0XHJcbiAgICAgICAgICAgIHRvIGJlIGZvcm1hdHRlZC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+c3RyaWN0PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgYWxsIGlucHV0IHZhbHVlcyB0byBiZSBkZWZpbmVkIGJ5IHRoZSBmb3JtYXQgaW4gb3JkZXIgdG8gYmVcclxuICAgICAgICAgICAgICAgIHZhbGlkICh1bmxlc3MgZmxhZ2dlZCBhcyBvcHRpb25hbCkuIFRoaXMgYWxzbyBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIHByb3ZpZGluZyB0aGVpclxyXG4gICAgICAgICAgICAgICAgb3duIGFkZGl0aW9uYWwgcHJvcGVydGllcy4gRGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5hbGxPcHRpb25hbDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gbWFrZSBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb3B0aW9uYWw8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+YmFubmVkUHJvcHM8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBQcm92aWRlIGFuIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIChzdHJpbmdzKSB0byBkZXNpZ25hdGUgd2hpY2ggcHJvcGVydGllcyBhcmUgbm90XHJcbiAgICAgICAgICAgICAgICBhbGxvd2VkIHRvIGJlIHByb3ZpZGVkLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5vcHRpb25hbFByb3BzPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgUHJvdmlkZSBhbiBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyAoc3RyaW5ncykgdG8gZGVzaWduYXRlIHdoaWNoIHByb3BlcnRpZXMgYXJlXHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5IZXJlJ3MgYW4gZXhhbXBsZSBvZiB0aGUgc2FuaXRhdGlvbiBiZWhhdmlvciB1c2luZyB0aGVzZSBvcHRpb25zPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKHt9LCB7fSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoe30sIHthOiBTdHJpbmd9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoe2E6ICdoZWxsbyB3b3JsZCd9LCB7YTogU3RyaW5nfSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoe30sIHtfOiB7YTogU3RyaW5nfSwgb3B0aW9uYWxQcm9wczogW1wiYVwiXX0pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHtiOiAxMn0sIHt9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoe2I6IDEyfSwge30sIHtzdHJpY3Q6IGZhbHNlfSkpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJhcnJheXNcIiBjbGFzc05hbWU9XCJhcnJheSBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPkFycmF5czwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBXZSBjYW4gc2FuaXRpemUgYXJyYXlzIGJ5IGNyZWF0aW5nIG91ciBvd24gYXJyYXkgcmVwcmVzZW50aW5nIGhvdyB3ZSBleHBlY3QgdGhlIGlucHV0IHRvXHJcbiAgICAgICAgICAgIGJlIGZvcm1hdHRlZC4gVGhlIGRlZmF1bHQgYXJyYXkgYmVoYXZpb3IgbWlnaHQgc2VlbSBjb25mdXNpbmcgYXQgZmlyc3QsIGhvd2V2ZXIgb25jZSB5b3VcclxuICAgICAgICAgICAgdW5kZXJzdGFuZCBpdCBpbiBwcmFjdGljZSBpdCBpcyBzaW1wbGUgYW5kIGV4cHJlc3NpdmUuXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5zdGFuZGFyZDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5NYW51YWxseSBzZXQgdGhlIHN0YW5kYXJkIHRvIHVzZSBmb3IgYWxsIGFycmF5IHZhbHVlczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5maXJzdEFzU3RhbmRhcmQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gc3BsaWNlIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBmb3JtYXQgYXJyYXkgYW5kIHVzZSBpdCB0byB2YWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgYWxsIHZhbHVlcyBvZiB0aGUgaW5wdXQgYXJyYXkgdGhhdCBhcmUgbm90IGV4cGxpY2l0bHkgZGVmaW5lZCBieSB0aGUgZm9ybWF0IGFycmF5LlxyXG4gICAgICAgICAgICAgICAgVGhlIHZhbHVlcyBvZiBhbGwgb2YgdGhlIGZvcm1hdCBhcnJheSBhcmUgYWxsIHNoaWZ0ZWQgdG8gdGhlIGxlZnQgYnkgb25lIGluZGV4LlxyXG4gICAgICAgICAgICAgICAgRGVmYXVsdDogdHJ1ZSBpZiB0aGUgYXJyYXkgbGVuZ3RoIGlzIGVxdWFsIHRvIDFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+c3RyaWN0PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgYWxsIGFycmF5IGluZGV4cyB0byBiZSBkZWZpbmVkIGJ5IHRoZSBmb3JtYXQgaW4gb3JkZXIgdG8gYmVcclxuICAgICAgICAgICAgICAgIHZhbGlkLiBEZWZhdWx0OiB0cnVlIGlmIHRoZSBmb3JtYXQgbGVuZ3RoIGlzIGF0IGxlYXN0IDFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWluTGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgU2V0IHRoZSBtaW5pbXVtIHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgYXJyYXkuIERlZmF1bHQ6IDEgdW5sZXNzIHRoZSBmb3JtYXQgYXJyYXkgaXNcclxuICAgICAgICAgICAgICAgIGVtcHR5IGFuZCB0aGVyZSBpcyBubyBzdGFuZGFyZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWF4TGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGFycmF5LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5sZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBleGFjdCByZXF1aXJlZCBsZW5ndGggb2YgdGhlIGFycmF5LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwPkhlcmUncyBhbiBleGFtcGxlIG9mIHRoZSBzYW5pdGF0aW9uIGJlaGF2aW9yIHVzaW5nIHRoZXNlIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoW10sIFtdKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZChbXSwgW051bWJlcl0pKSAvLyB0cnVlIC0gQmVjYXVzZSB0aGUgZm9ybWF0IGFycmF5IGlzIG9ubHkgb25lIGVsZW1lbnQgbG9uZyB0aGUgZmlyc3QgdmFsdWUgaXMgc2V0IGFzIHRoZSBmaXJzdEFzU3RhbmRhcmQgZm9ybWF0LCBhbmQgc3RyaWN0IGlzIG5vdCBhc3N1bWVkIHRvIGJlIHRydWUuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFsxMl0sIFtOdW1iZXJdKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZChbNTQsIDI1XSwgW051bWJlcl0pKSAvLyB0cnVlIC0gQXMgeW91IGNhbiBzZWVcclxuY29uc29sZS5sb2codmFsaWQoWzEyLCAxMl0sIFtOdW1iZXIsIE51bWJlcl0pKSAvLyB0cnVlIC0gQmVjYXVzZSB0aGUgZm9ybWF0IGFycmF5IGlzIGxvbmdlciB0aGFuIG9uZSBlbGVtZW50IGZpcnN0QXNTdGFuZGFyZCBpcyBub3QgYXNzdW1lZCBhbmQgc3RyaWN0IGlzIHNldCB0byB0cnVlLlxyXG5cclxuY29uc29sZS5sb2codmFsaWQoWzUyLCA2MywgMTRdLCBbTnVtYmVyLCBOdW1iZXJdKSkgLy8gZmFsc2UgLSBCZWNhdXNlIHN0cmljdCBpcyBhc3N1bWVkIGV4dHJhIGFycmF5IGVsZW1lbnRzIHdpbGwgY2F1c2UgdmFsaWRhdGlvbiB0byBmYWlsLlxyXG5cclxuY29uc29sZS5sb2codmFsaWQoWydhJywgMTUsIDI1XSwge186W051bWJlciwgU3RyaW5nXSwgZmlyc3RBc1N0YW5kYXJkOiB0cnVlfSkpIC8vIHRydWUgLSBXZSBjYW4gYWxzbyB1c2UgZmlyc3RBc1N0YW5kYXJkIGFsb25nc2lkZSB3aXRoIHNwZWNpZmljIGZvcm1hdHMgZm9yIGNlcnRhaW4gYXJyYXkgaW5kZXhlcyBieSBzZXR0aW5nIGl0IGV4cGxpY2l0bHkgaW4gdGhlIGlubGluZSBvcHRpb25zLiBUaGUgZmlyc3QgaW5kZXggKE51bWJlcikgd2lsbCBiZSB0aGUgc3RhbmRhcmQgZm9ybWF0IGZvciBhbGwgaW5kZXhlcywgYW5kIHRoZSBzZWNvbmQgaW5kZXggd2lsbCBub3cgYmVjb21lIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5IG9mIGN1c3RvbSBmb3JtYXRzIGZvciBzcGVjaWZpYyBpbmRleGVzLCBtZWFuaW5nIHRoZSBmaXJzdCBhcnJheSBpbmRleCB3aWxsIGJlIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nLCBhbmQgYWxsIGZvbGxvd2luZyBpbmRleGVzIHdpbGwgYmUgZXhwZWN0ZWQgdG8gYmUgbnVtYmVycy5gfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmdW5jdGlvbnNcIiBjbGFzc05hbWU9XCJmdW5jdGlvbiBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPkZ1bmN0aW9uczwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBGdW5jdGlvbnMgYXV0b21hdGljYWxseSBzdXBwb3J0IGFsbCBvZiB0aGUgb2JqZWN0IG9wdGlvbnMgYmVjYXVzZSBmdW5jdGlvbnMgYXJlXHJcbiAgICAgICAgICAgIGVmZmVjdGl2ZWx5IGFsc28gb2JqZWN0cy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwidW5pdmVyc2FsXCIgY2xhc3NOYW1lPVwidW5pdmVyc2FsIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+VW5pdmVyc2FsIE9wdGlvbnM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj52YWxpZGF0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEV4cGVjdHMgYSBmdW5jdGlvbiBvciBhcnJheSBvZiBmdW5jdGlvbnMgdG8gY29tcGFyZSB0aGUgaW5wdXQgd2l0aC4gSWYgYW55IGRvbid0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZSwgcmVqZWN0IHRoZSBpbnB1dC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+ZXF1YWxUbzwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEV4cGVjdHMgdGhlIGlucHV0IHRvIGJlIHN0cmljdGx5IGVxdWFsICh1c2luZyB0aGUgPT09IG9wZXJhdG9yKSB0byB0aGUgdmFsdWUgb2YgdGhlXHJcbiAgICAgICAgICAgICAgICBlcXVhbFRvIG9wdGlvbi5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+ZGVlcEVxdWFsVG88L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBFeHBlY3RzIHRoZSBpbnB1dCB0byBiZSBkZWVwbHkgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIHRoZSBkZWVwRXF1YWxUbyBvcHRpb24uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm51bGxhYmxlPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRmxhZyBhcyB0cnVlIGluIG9yZGVyIHRvIGFjY2VwdCBudWxsIGluc3RlYWQgb2YgdGhlIHByb3ZpZGVkIGZvcm1hdCwgaGVuY2UgbWFraW5nXHJcbiAgICAgICAgICAgICAgICB0aGUgaW5wdXQgXCJudWxsYWJsZVwiLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnMgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5BbGw8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgVGhlIEFsbCBmb3JtYXQgaXMgYSBzcGVjaWFsIGNsYXNzIHdlIGNhbiBpbXBvcnQgdGhhdCBhY3RzIGFzIGEgd2lsZGNhcmQuIFBsZWFzZSBiZVxyXG4gICAgICAgICAgICBjYXJlZnVsIHdpdGggdGhpcyBhcyBhbnkga2luZCBvZiBkYW5nZXJvdXMgaW5wdXQgY291bGQgYmUgcGFzc2VkLiBQbGVhc2Ugb25seSB1c2UgdGhpc1xyXG4gICAgICAgICAgICBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5IZXJlJ3MgYW4gZXhhbXBsZSBvZiB0aGUgc2FuaXRhdGlvbiBiZWhhdmlvciB1c2luZyB0aGVzZSBvcHRpb25zPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWQsIEFsbH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoXCJIZWxsbyA6KVwiLCBBbGwpKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKEluZmluaXR5LCBBbGwpKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHthOiAnaGVsbG8gd29ybGQnLCBiOiAxMn0sIHthOiBTdHJpbmcsIGI6IEFsbH0pKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==