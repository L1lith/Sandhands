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
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, "email"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, "Flag as true to required the string be a valid email.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, "lowercase"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, "Flag as true to required the string be lowercase.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, "uppercase"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, "Flag as true to required the string be uppercase.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, "minLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, "Set the minimum required length of the string. Default: 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }, "maxLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, "Set the maximum required length of the string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, "length"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, "Set the exact required length of the string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, "allowed"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }
      }, "Set a string to whitelist the input string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }, "banned"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, "Set a string to blacklist the input string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, "whitespace"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, "Flag as false to require the string to contain no whitespaces.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }
      }, "regex"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, "Set a regular expression to test the input string.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, "trimmed"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }
      }, "Flag as true to require the string to not begin or end with whitespace."))), __jsx("div", {
        id: "numbers",
        className: "numbers section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }
      }, "Numbers"), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }
      }, "integer"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }
      }, "Flag as true to require whole numbers. Default: false")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }
      }, "allowNaN"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, "Flag as true to allow NaN. Default: false")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, "finite"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, "Flag as false to allow Infinity. Default: true")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }
      }, "min"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, "Set the minimum value of the input")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }
      }, "max"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }
      }, "Set the maximum value of the input")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }
      }, "even"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      }, "Flag as true to require even numbers.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, "odd"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, "Flag as true to require odd numbers."))), __jsx("div", {
        id: "objects",
        className: "object section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }
      }, "Objects"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }
      }, "We can sanitize objects by creating our own object representing how we expect the input to be formatted."), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, "Flag as true to require all input values to be defined by the format in order to be valid (unless flagged as optional). This also prevents the user from providing their own additional properties. Default: true")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }
      }, "allOptional"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      }, "Flag as true to make all of the properties optional")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }
      }, "bannedProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, "Provide an array of property names (strings) to designate which properties are not allowed to be provided.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, "optionalProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, "Provide an array of property names (strings) to designate which properties are optional.")), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid({}, {})) // true\nconsole.log(valid({}, {a: String})) // false\nconsole.log(valid({a: 'hello world'}, {a: String})) // true\nconsole.log(valid({}, {_: {a: String}, optionalProps: [\"a\"]})) // true\nconsole.log(valid({b: 12}, {})) // false\nconsole.log(valid({b: 12}, {}, {strict: false})) // true")), __jsx("div", {
        id: "arrays",
        className: "array section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }
      }, "Arrays"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }
      }, "We can sanitize arrays by creating our own array representing how we expect the input to be formatted. The default array behavior might seem confusing at first, however once you understand it in practice it is simple and expressive."), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 15
        }
      }, "standard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 15
        }
      }, "Manually set the standard to use for all array values")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }
      }, "firstAsStandard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 15
        }
      }, "Flag as true to splice the first element of the format array and use it to validate all values of the input array that are not explicitly defined by the format array. The values of all of the format array are all shifted to the left by one index. Default: true if the array length is equal to 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 15
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 15
        }
      }, "Flag as true to require all array indexs to be defined by the format in order to be valid. Default: true if the format length is at least 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 15
        }
      }, "minLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 15
        }
      }, "Set the minimum required length of the array. Default: 1 unless the format array is empty and there is no standard.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 15
        }
      }, "maxLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 15
        }
      }, "Set the maximum length of the array.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 15
        }
      }, "length"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 15
        }
      }, "Set the exact required length of the array."))), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid([], [])) // true\nconsole.log(valid([], [Number])) // true - Because the format array is only one element long the first value is set as the firstAsStandard format, and strict is not assumed to be true.\nconsole.log(valid([12], [Number])) // true\nconsole.log(valid([54, 25], [Number])) // true - As you can see\nconsole.log(valid([12, 12], [Number, Number])) // true - Because the format array is longer than one element firstAsStandard is not assumed and strict is set to true.\n\nconsole.log(valid([52, 63, 14], [Number, Number])) // false - Because strict is assumed extra array elements will cause validation to fail.\n\nconsole.log(valid(['a', 15, 25], {_:[Number, String], firstAsStandard: true})) // true - We can also use firstAsStandard alongside with specific formats for certain array indexes by setting it explicitly in the inline options. The first index (Number) will be the standard format for all indexes, and the second index will now become the beginning of the array of custom formats for specific indexes, meaning the first array index will be expected to be a string, and all following indexes will be expected to be numbers.")), __jsx("div", {
        id: "functions",
        className: "function section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }
      }, "Functions"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }
      }, "Functions automatically support all of the object options because functions are effectively also objects.")), __jsx("div", {
        id: "universal",
        className: "universal section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }
      }, "Universal Options"), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 15
        }
      }, "validate"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }
      }, "Expects a function or array of functions to compare the input with. If any don't return true, reject the input.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 15
        }
      }, "equalTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 15
        }
      }, "Expects the input to be strictly equal (using the === operator) to the value of the equalTo option.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 15
        }
      }, "deepEqualTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }
      }, "Expects the input to be deeply equal to the value of the deepEqualTo option.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 15
        }
      }, "nullable"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 15
        }
      }, "Flag as true in order to accept null instead of the provided format, hence making the input \"nullable\".")))), __jsx("div", {
        className: "numbers section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }
      }, "All"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }
      }, "The All format is a special class we can import that acts as a wildcard. Please be careful with this as any kind of dangerous input could be passed. Please only use this if you know what you are doing."), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybWF0LmpzIl0sIm5hbWVzIjpbIkZvcm1hdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNJQUZGLEVBTUU7QUFBSyxVQUFFLEVBQUMsWUFBUjtBQUFxQixpQkFBUyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBRkYsRUFLRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtPQUxGLEVBY0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFkRixFQWlCRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNQQWpCRixDQU5GLEVBaUNFO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsaUJBQVMsRUFBQyxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7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QUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FGRixDQTFCRixFQWlDRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtXQWpDRixDQTFJRixFQW9MRTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQWlCLGlCQUFTLEVBQUMsZUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9QQUZGLEVBUUU7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRUFGRixDQURGLEVBS0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtUQUZGLENBTEYsRUFjRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUpBRkYsQ0FkRixFQXFCRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0hBRkYsQ0FyQkYsRUE0QkU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUZGLENBNUJGLEVBZ0NFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFGRixDQWhDRixDQVJGLEVBNkNFLE1BQUMsc0RBQUQ7QUFBVyxpQkFBUyxFQUFDLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXNDQTdDRixDQXBMRixFQTZPRTtBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQW9CLGlCQUFTLEVBQUMsa0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSEFGRixDQTdPRixFQW9QRTtBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQW9CLGlCQUFTLEVBQUMsbUJBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwySEFGRixDQURGLEVBUUU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtHQUZGLENBUkYsRUFlRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0ZBRkYsQ0FmRixFQXFCRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBRkYsQ0FyQkYsQ0FGRixDQXBQRixFQW9SRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscU5BRkYsRUFPRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZOQVBGLENBcFJGLENBREY7QUFvU0Q7Ozs7RUF0U2tCQywrQzs7QUF5U05ELHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1hdC5iOTk0MDk4YTkzMGRmOWY5YzUyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICdyZWFjdC1oaWdobGlnaHQnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Zvcm1hdC5sZXNzJ1xyXG5cclxuY2xhc3MgRm9ybWF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1hdFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdldGl0bGVcIj5Gb3JtYXQ8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBUaGlzIHNlY3Rpb24gZGVzY3JpYmVzIHRoZSBmb3JtYXQgKHRoZSBzYW5pdGF0aW9uIHNjaGVtYSkgd2UgZ2l2ZSB0byBTYW5kaGFuZHMgdG8gZGVmaW5lXHJcbiAgICAgICAgICBob3cgaXQgc2hvdWxkIHNhbml0aXplIHRoZSBpbnB1dC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBpZD1cInByaW1pdGl2ZXNcIiBjbGFzc05hbWU9XCJwcmltaXRpdmVzIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+UHJpbWl0aXZlcyBCYXNpY3M8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgTnVsbCBhbmQgdW5kZWZpbmVkIGNhbiBiZSBwYXNzZWQgaW4gYXMgaXMsIGFuZCBpdCB3aWxsIGV4cGVjdCBzdHJpY3QgZXF1YWxpdHkuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxudmFsaWQoJycsIG51bGwpIC8vIGZhbHNlXHJcbnZhbGlkKHVuZGVmaW5lZCwgbnVsbCkgLy8gZmFsc2VcclxudmFsaWQobnVsbCwgbnVsbCkgLy8gdHJ1ZVxyXG5cclxudmFsaWQoJycsIHVuZGVmaW5lZCkgLy8gZmFsc2VcclxudmFsaWQobnVsbCwgdW5kZWZpbmVkKSAvLyBmYWxzZVxyXG52YWxpZCh1bmRlZmluZWQsIHVuZGVmaW5lZCkgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBOdW1iZXJzLCBTdHJpbmdzLCBhbmQgQm9vbGVhbnMgY2FuIGJlIHBhc3NlZCBpbiBieSB1c2luZyB0aGVpciBjbGFzcyBuYW1lcy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG52YWxpZCgxMiwgU3RyaW5nKSAvLyBmYWxzZVxyXG52YWxpZChTdHJpbmcsIFN0cmluZykgLy8gZmFsc2VcclxudmFsaWQoJ2hlbGxvIHdvcmxkJywgU3RyaW5nKSAvLyB0cnVlXHJcblxyXG52YWxpZCgnZ2Fub25kb3JmJywgTnVtYmVyKSAvLyBmYWxzZVxyXG52YWxpZChOdW1iZXIsIE51bWJlcikgLy8gZmFsc2VcclxudmFsaWQoNDIsIE51bWJlcikgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm9wdGlvbnNcIiBjbGFzc05hbWU9XCJvcHRpb25zIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+T3B0aW9uczwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBBbGwgZGF0YSB0eXBlcyBoYXZlIGEgc2V0IG9mIGRlZmF1bHQgb3B0aW9ucyB3aGljaCBhY2NvbXBhbnkgdGhlbS4gV2UgY2FuIG92ZXJyaWRlIHRoZVxyXG4gICAgICAgICAgICBkZWZhdWx0cyB3aXRoIG91ciBvd24gYXJndW1lbnRzIHR3byBkaWZmZXJlbnQgd2F5c1xyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgVGhlIGZpcnN0IHdheSBpcyB3ZSBjYW4gcGFzcyB0aGUgb3B0aW9ucyBhcyB0aGUgdGhpcmQgYXJndW1lbnQgYWZ0ZXIgdGhlIGZvcm1hdCB0byB0aGVcclxuICAgICAgICAgICAgbWV0aG9kLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKCdoZWxsbycsIFN0cmluZywge21pbkxlbmd0aDogOH0pKSAvLyBmYWxzZVxyXG5jb25zb2xlLmxvZyh2YWxpZCgnaGVsbG8gd29ybGQnLCBTdHJpbmcsIHttaW5MZW5ndGg6IDh9KSkgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBUaGUgc2Vjb25kIHdheSB0byBwYXNzIG9wdGlvbnMgaXMgaW5zaWRlIHRoZSBmb3JtYXQgaXRzZWxmLiBXZSB1c2UgYSBzcGVjaWFsIG9iamVjdFxyXG4gICAgICAgICAgICBzeW50YXggdG8gZGVzaWduYXRlIHRoaXM6XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoXCJMaWx5XCIsIHtfOiBTdHJpbmcsIGxvd2VyY2FzZTogdHJ1ZX0pKSAvLyBmYWxzZVxyXG5jb25zb2xlLmxvZyh2YWxpZChcImxpbHlcIiwge186IFN0cmluZywgbG93ZXJjYXNlOiB0cnVlfSkpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzdHJpbmdzXCIgY2xhc3NOYW1lPVwic3RyaW5ncyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPlN0cmluZ3M8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5UaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3RyaW5nczo8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmVtYWlsPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZWQgdGhlIHN0cmluZyBiZSBhIHZhbGlkIGVtYWlsLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5sb3dlcmNhc2U8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlZCB0aGUgc3RyaW5nIGJlIGxvd2VyY2FzZS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+dXBwZXJjYXNlPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZWQgdGhlIHN0cmluZyBiZSB1cHBlcmNhc2UuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1pbkxlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtaW5pbXVtIHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgc3RyaW5nLiBEZWZhdWx0OiAxPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1heExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtYXhpbXVtIHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgc3RyaW5nLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5sZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgZXhhY3QgcmVxdWlyZWQgbGVuZ3RoIG9mIHRoZSBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbG93ZWQ8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCBhIHN0cmluZyB0byB3aGl0ZWxpc3QgdGhlIGlucHV0IHN0cmluZy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+YmFubmVkPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgYSBzdHJpbmcgdG8gYmxhY2tsaXN0IHRoZSBpbnB1dCBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPndoaXRlc3BhY2U8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIEZsYWcgYXMgZmFsc2UgdG8gcmVxdWlyZSB0aGUgc3RyaW5nIHRvIGNvbnRhaW4gbm8gd2hpdGVzcGFjZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5yZWdleDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRvIHRlc3QgdGhlIGlucHV0IHN0cmluZy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+dHJpbW1lZDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgRmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgdGhlIHN0cmluZyB0byBub3QgYmVnaW4gb3IgZW5kIHdpdGggd2hpdGVzcGFjZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm51bWJlcnNcIiBjbGFzc05hbWU9XCJudW1iZXJzIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+TnVtYmVyczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmludGVnZXI8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIHdob2xlIG51bWJlcnMuIERlZmF1bHQ6IGZhbHNlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbG93TmFOPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gYWxsb3cgTmFOLiBEZWZhdWx0OiBmYWxzZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5maW5pdGU8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgZmFsc2UgdG8gYWxsb3cgSW5maW5pdHkuIERlZmF1bHQ6IHRydWU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWluPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIG1pbmltdW0gdmFsdWUgb2YgdGhlIGlucHV0PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1heDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtYXhpbXVtIHZhbHVlIG9mIHRoZSBpbnB1dDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5ldmVuPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZSBldmVuIG51bWJlcnMuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm9kZDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgb2RkIG51bWJlcnMuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm9iamVjdHNcIiBjbGFzc05hbWU9XCJvYmplY3Qgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5PYmplY3RzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIFdlIGNhbiBzYW5pdGl6ZSBvYmplY3RzIGJ5IGNyZWF0aW5nIG91ciBvd24gb2JqZWN0IHJlcHJlc2VudGluZyBob3cgd2UgZXhwZWN0IHRoZSBpbnB1dFxyXG4gICAgICAgICAgICB0byBiZSBmb3JtYXR0ZWQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+c3RyaWN0PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gcmVxdWlyZSBhbGwgaW5wdXQgdmFsdWVzIHRvIGJlIGRlZmluZWQgYnkgdGhlIGZvcm1hdCBpbiBvcmRlciB0byBiZVxyXG4gICAgICAgICAgICAgIHZhbGlkICh1bmxlc3MgZmxhZ2dlZCBhcyBvcHRpb25hbCkuIFRoaXMgYWxzbyBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIHByb3ZpZGluZyB0aGVpclxyXG4gICAgICAgICAgICAgIG93biBhZGRpdGlvbmFsIHByb3BlcnRpZXMuIERlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbE9wdGlvbmFsPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gbWFrZSBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb3B0aW9uYWw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+YmFubmVkUHJvcHM8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIFByb3ZpZGUgYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgKHN0cmluZ3MpIHRvIGRlc2lnbmF0ZSB3aGljaCBwcm9wZXJ0aWVzIGFyZSBub3RcclxuICAgICAgICAgICAgICBhbGxvd2VkIHRvIGJlIHByb3ZpZGVkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+b3B0aW9uYWxQcm9wczwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgUHJvdmlkZSBhbiBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyAoc3RyaW5ncykgdG8gZGVzaWduYXRlIHdoaWNoIHByb3BlcnRpZXMgYXJlXHJcbiAgICAgICAgICAgICAgb3B0aW9uYWwuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKHt9LCB7fSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoe30sIHthOiBTdHJpbmd9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoe2E6ICdoZWxsbyB3b3JsZCd9LCB7YTogU3RyaW5nfSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoe30sIHtfOiB7YTogU3RyaW5nfSwgb3B0aW9uYWxQcm9wczogW1wiYVwiXX0pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHtiOiAxMn0sIHt9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoe2I6IDEyfSwge30sIHtzdHJpY3Q6IGZhbHNlfSkpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJhcnJheXNcIiBjbGFzc05hbWU9XCJhcnJheSBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPkFycmF5czwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBXZSBjYW4gc2FuaXRpemUgYXJyYXlzIGJ5IGNyZWF0aW5nIG91ciBvd24gYXJyYXkgcmVwcmVzZW50aW5nIGhvdyB3ZSBleHBlY3QgdGhlIGlucHV0IHRvXHJcbiAgICAgICAgICAgIGJlIGZvcm1hdHRlZC4gVGhlIGRlZmF1bHQgYXJyYXkgYmVoYXZpb3IgbWlnaHQgc2VlbSBjb25mdXNpbmcgYXQgZmlyc3QsIGhvd2V2ZXIgb25jZSB5b3VcclxuICAgICAgICAgICAgdW5kZXJzdGFuZCBpdCBpbiBwcmFjdGljZSBpdCBpcyBzaW1wbGUgYW5kIGV4cHJlc3NpdmUuXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5zdGFuZGFyZDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5NYW51YWxseSBzZXQgdGhlIHN0YW5kYXJkIHRvIHVzZSBmb3IgYWxsIGFycmF5IHZhbHVlczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5maXJzdEFzU3RhbmRhcmQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gc3BsaWNlIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBmb3JtYXQgYXJyYXkgYW5kIHVzZSBpdCB0byB2YWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgYWxsIHZhbHVlcyBvZiB0aGUgaW5wdXQgYXJyYXkgdGhhdCBhcmUgbm90IGV4cGxpY2l0bHkgZGVmaW5lZCBieSB0aGUgZm9ybWF0IGFycmF5LlxyXG4gICAgICAgICAgICAgICAgVGhlIHZhbHVlcyBvZiBhbGwgb2YgdGhlIGZvcm1hdCBhcnJheSBhcmUgYWxsIHNoaWZ0ZWQgdG8gdGhlIGxlZnQgYnkgb25lIGluZGV4LlxyXG4gICAgICAgICAgICAgICAgRGVmYXVsdDogdHJ1ZSBpZiB0aGUgYXJyYXkgbGVuZ3RoIGlzIGVxdWFsIHRvIDFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+c3RyaWN0PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgYWxsIGFycmF5IGluZGV4cyB0byBiZSBkZWZpbmVkIGJ5IHRoZSBmb3JtYXQgaW4gb3JkZXIgdG8gYmVcclxuICAgICAgICAgICAgICAgIHZhbGlkLiBEZWZhdWx0OiB0cnVlIGlmIHRoZSBmb3JtYXQgbGVuZ3RoIGlzIGF0IGxlYXN0IDFcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWluTGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgU2V0IHRoZSBtaW5pbXVtIHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgYXJyYXkuIERlZmF1bHQ6IDEgdW5sZXNzIHRoZSBmb3JtYXQgYXJyYXkgaXNcclxuICAgICAgICAgICAgICAgIGVtcHR5IGFuZCB0aGVyZSBpcyBubyBzdGFuZGFyZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWF4TGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGFycmF5LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5sZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBleGFjdCByZXF1aXJlZCBsZW5ndGggb2YgdGhlIGFycmF5LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChbXSwgW10pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKFtdLCBbTnVtYmVyXSkpIC8vIHRydWUgLSBCZWNhdXNlIHRoZSBmb3JtYXQgYXJyYXkgaXMgb25seSBvbmUgZWxlbWVudCBsb25nIHRoZSBmaXJzdCB2YWx1ZSBpcyBzZXQgYXMgdGhlIGZpcnN0QXNTdGFuZGFyZCBmb3JtYXQsIGFuZCBzdHJpY3QgaXMgbm90IGFzc3VtZWQgdG8gYmUgdHJ1ZS5cclxuY29uc29sZS5sb2codmFsaWQoWzEyXSwgW051bWJlcl0pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKFs1NCwgMjVdLCBbTnVtYmVyXSkpIC8vIHRydWUgLSBBcyB5b3UgY2FuIHNlZVxyXG5jb25zb2xlLmxvZyh2YWxpZChbMTIsIDEyXSwgW051bWJlciwgTnVtYmVyXSkpIC8vIHRydWUgLSBCZWNhdXNlIHRoZSBmb3JtYXQgYXJyYXkgaXMgbG9uZ2VyIHRoYW4gb25lIGVsZW1lbnQgZmlyc3RBc1N0YW5kYXJkIGlzIG5vdCBhc3N1bWVkIGFuZCBzdHJpY3QgaXMgc2V0IHRvIHRydWUuXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChbNTIsIDYzLCAxNF0sIFtOdW1iZXIsIE51bWJlcl0pKSAvLyBmYWxzZSAtIEJlY2F1c2Ugc3RyaWN0IGlzIGFzc3VtZWQgZXh0cmEgYXJyYXkgZWxlbWVudHMgd2lsbCBjYXVzZSB2YWxpZGF0aW9uIHRvIGZhaWwuXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChbJ2EnLCAxNSwgMjVdLCB7XzpbTnVtYmVyLCBTdHJpbmddLCBmaXJzdEFzU3RhbmRhcmQ6IHRydWV9KSkgLy8gdHJ1ZSAtIFdlIGNhbiBhbHNvIHVzZSBmaXJzdEFzU3RhbmRhcmQgYWxvbmdzaWRlIHdpdGggc3BlY2lmaWMgZm9ybWF0cyBmb3IgY2VydGFpbiBhcnJheSBpbmRleGVzIGJ5IHNldHRpbmcgaXQgZXhwbGljaXRseSBpbiB0aGUgaW5saW5lIG9wdGlvbnMuIFRoZSBmaXJzdCBpbmRleCAoTnVtYmVyKSB3aWxsIGJlIHRoZSBzdGFuZGFyZCBmb3JtYXQgZm9yIGFsbCBpbmRleGVzLCBhbmQgdGhlIHNlY29uZCBpbmRleCB3aWxsIG5vdyBiZWNvbWUgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkgb2YgY3VzdG9tIGZvcm1hdHMgZm9yIHNwZWNpZmljIGluZGV4ZXMsIG1lYW5pbmcgdGhlIGZpcnN0IGFycmF5IGluZGV4IHdpbGwgYmUgZXhwZWN0ZWQgdG8gYmUgYSBzdHJpbmcsIGFuZCBhbGwgZm9sbG93aW5nIGluZGV4ZXMgd2lsbCBiZSBleHBlY3RlZCB0byBiZSBudW1iZXJzLmB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZ1bmN0aW9uc1wiIGNsYXNzTmFtZT1cImZ1bmN0aW9uIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+RnVuY3Rpb25zPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIEZ1bmN0aW9ucyBhdXRvbWF0aWNhbGx5IHN1cHBvcnQgYWxsIG9mIHRoZSBvYmplY3Qgb3B0aW9ucyBiZWNhdXNlIGZ1bmN0aW9ucyBhcmVcclxuICAgICAgICAgICAgZWZmZWN0aXZlbHkgYWxzbyBvYmplY3RzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ1bml2ZXJzYWxcIiBjbGFzc05hbWU9XCJ1bml2ZXJzYWwgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5Vbml2ZXJzYWwgT3B0aW9uczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnZhbGlkYXRlPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRXhwZWN0cyBhIGZ1bmN0aW9uIG9yIGFycmF5IG9mIGZ1bmN0aW9ucyB0byBjb21wYXJlIHRoZSBpbnB1dCB3aXRoLiBJZiBhbnkgZG9uJ3RcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlLCByZWplY3QgdGhlIGlucHV0LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5lcXVhbFRvPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRXhwZWN0cyB0aGUgaW5wdXQgdG8gYmUgc3RyaWN0bHkgZXF1YWwgKHVzaW5nIHRoZSA9PT0gb3BlcmF0b3IpIHRvIHRoZSB2YWx1ZSBvZiB0aGVcclxuICAgICAgICAgICAgICAgIGVxdWFsVG8gb3B0aW9uLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5kZWVwRXF1YWxUbzwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEV4cGVjdHMgdGhlIGlucHV0IHRvIGJlIGRlZXBseSBlcXVhbCB0byB0aGUgdmFsdWUgb2YgdGhlIGRlZXBFcXVhbFRvIG9wdGlvbi5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bnVsbGFibGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgaW4gb3JkZXIgdG8gYWNjZXB0IG51bGwgaW5zdGVhZCBvZiB0aGUgcHJvdmlkZWQgZm9ybWF0LCBoZW5jZSBtYWtpbmdcclxuICAgICAgICAgICAgICAgIHRoZSBpbnB1dCBcIm51bGxhYmxlXCIuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVycyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPkFsbDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBUaGUgQWxsIGZvcm1hdCBpcyBhIHNwZWNpYWwgY2xhc3Mgd2UgY2FuIGltcG9ydCB0aGF0IGFjdHMgYXMgYSB3aWxkY2FyZC4gUGxlYXNlIGJlXHJcbiAgICAgICAgICAgIGNhcmVmdWwgd2l0aCB0aGlzIGFzIGFueSBraW5kIG9mIGRhbmdlcm91cyBpbnB1dCBjb3VsZCBiZSBwYXNzZWQuIFBsZWFzZSBvbmx5IHVzZSB0aGlzXHJcbiAgICAgICAgICAgIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkLCBBbGx9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFwiSGVsbG8gOilcIiwgQWxsKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZChJbmZpbml0eSwgQWxsKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7YTogJ2hlbGxvIHdvcmxkJywgYjogMTJ9LCB7YTogU3RyaW5nLCBiOiBBbGx9KSkgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=