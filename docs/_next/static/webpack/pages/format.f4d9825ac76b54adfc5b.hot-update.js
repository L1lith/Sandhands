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
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 15
        }
      }, "Flag as true to require all input values to be defined by the format in order to be valid (unless flagged as optional). This also prevents the user from providing their own additional properties. Default: true")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }
      }, "allOptional"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }
      }, "Flag as true to make all of the properties optional")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }
      }, "bannedProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 15
        }
      }, "Provide an array of property names (strings) to designate which properties are not allowed to be provided.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }
      }, "optionalProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }
      }, "Provide an array of property names (strings) to designate which properties are optional."))), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid({}, {})) // true\nconsole.log(valid({}, {a: String})) // false\nconsole.log(valid({a: 'hello world'}, {a: String})) // true\nconsole.log(valid({}, {_: {a: String}, optionalProps: [\"a\"]})) // true\nconsole.log(valid({b: 12}, {})) // false\nconsole.log(valid({b: 12}, {}, {strict: false})) // true")), __jsx("div", {
        id: "arrays",
        className: "array section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }
      }, "Arrays"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }
      }, "We can sanitize arrays by creating our own array representing how we expect the input to be formatted. The default array behavior might seem confusing at first, however once you understand it in practice it is simple and expressive."), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 15
        }
      }, "standard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 15
        }
      }, "Manually set the standard to use for all array values")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 15
        }
      }, "firstAsStandard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 15
        }
      }, "Flag as true to splice the first element of the format array and use it to validate all values of the input array that are not explicitly defined by the format array. The values of all of the format array are all shifted to the left by one index. Default: true if the array length is equal to 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 15
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 15
        }
      }, "Flag as true to require all array indexs to be defined by the format in order to be valid. Default: true if the format length is at least 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 15
        }
      }, "minLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 15
        }
      }, "Set the minimum required length of the array. Default: 1 unless the format array is empty and there is no standard.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 15
        }
      }, "maxLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }
      }, "Set the maximum length of the array.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 15
        }
      }, "length"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }
      }, "Set the exact required length of the array."))), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid([], [])) // true\nconsole.log(valid([], [Number])) // true - Because the format array is only one element long the first value is set as the firstAsStandard format, and strict is not assumed to be true.\nconsole.log(valid([12], [Number])) // true\nconsole.log(valid([54, 25], [Number])) // true - As you can see\nconsole.log(valid([12, 12], [Number, Number])) // true - Because the format array is longer than one element firstAsStandard is not assumed and strict is set to true.\n\nconsole.log(valid([52, 63, 14], [Number, Number])) // false - Because strict is assumed extra array elements will cause validation to fail.\n\nconsole.log(valid(['a', 15, 25], {_:[Number, String], firstAsStandard: true})) // true - We can also use firstAsStandard alongside with specific formats for certain array indexes by setting it explicitly in the inline options. The first index (Number) will be the standard format for all indexes, and the second index will now become the beginning of the array of custom formats for specific indexes, meaning the first array index will be expected to be a string, and all following indexes will be expected to be numbers.")), __jsx("div", {
        id: "functions",
        className: "function section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }
      }, "Functions"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }
      }, "Functions automatically support all of the object options because functions are effectively also objects.")), __jsx("div", {
        id: "universal",
        className: "universal section",
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
      }, "Universal Options"), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 15
        }
      }, "validate"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 15
        }
      }, "Expects a function or array of functions to compare the input with. If any don't return true, reject the input.")), __jsx("div", {
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
      }, "equalTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 15
        }
      }, "Expects the input to be strictly equal (using the === operator) to the value of the equalTo option.")), __jsx("div", {
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
      }, "deepEqualTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 15
        }
      }, "Expects the input to be deeply equal to the value of the deepEqualTo option.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 15
        }
      }, "nullable"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }
      }, "Flag as true in order to accept null instead of the provided format, hence making the input \"nullable\".")))), __jsx("div", {
        className: "numbers section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }
      }, "All"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }
      }, "The All format is a special class we can import that acts as a wildcard. Please be careful with this as any kind of dangerous input could be passed. Please only use this if you know what you are doing."), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybWF0LmpzIl0sIm5hbWVzIjpbIkZvcm1hdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNJQUZGLEVBTUU7QUFBSyxVQUFFLEVBQUMsWUFBUjtBQUFxQixpQkFBUyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBRkYsRUFLRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtPQUxGLEVBY0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFkRixFQWlCRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNQQWpCRixDQU5GLEVBaUNFO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsaUJBQVMsRUFBQyxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7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RUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdGQUZGLENBZkYsRUFxQkU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFIQUZGLENBckJGLENBRkYsQ0F0UEYsRUFzUkU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFOQUZGLEVBT0UsTUFBQyxzREFBRDtBQUFXLGlCQUFTLEVBQUMsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TkFQRixDQXRSRixDQURGO0FBc1NEOzs7O0VBeFNrQkMsK0M7O0FBMlNORCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3JtYXQuZjRkOTgyNWFjNzZiNTRhZGZjNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAncmVhY3QtaGlnaGxpZ2h0J1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9mb3JtYXQubGVzcydcclxuXHJcbmNsYXNzIEZvcm1hdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYXRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZXRpdGxlXCI+Rm9ybWF0PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgVGhpcyBzZWN0aW9uIGRlc2NyaWJlcyB0aGUgZm9ybWF0ICh0aGUgc2FuaXRhdGlvbiBzY2hlbWEpIHdlIGdpdmUgdG8gU2FuZGhhbmRzIHRvIGRlZmluZVxyXG4gICAgICAgICAgaG93IGl0IHNob3VsZCBzYW5pdGl6ZSB0aGUgaW5wdXQuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmltaXRpdmVzXCIgY2xhc3NOYW1lPVwicHJpbWl0aXZlcyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPlByaW1pdGl2ZXMgQmFzaWNzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIE51bGwgYW5kIHVuZGVmaW5lZCBjYW4gYmUgcGFzc2VkIGluIGFzIGlzLCBhbmQgaXQgd2lsbCBleHBlY3Qgc3RyaWN0IGVxdWFsaXR5LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbnZhbGlkKCcnLCBudWxsKSAvLyBmYWxzZVxyXG52YWxpZCh1bmRlZmluZWQsIG51bGwpIC8vIGZhbHNlXHJcbnZhbGlkKG51bGwsIG51bGwpIC8vIHRydWVcclxuXHJcbnZhbGlkKCcnLCB1bmRlZmluZWQpIC8vIGZhbHNlXHJcbnZhbGlkKG51bGwsIHVuZGVmaW5lZCkgLy8gZmFsc2VcclxudmFsaWQodW5kZWZpbmVkLCB1bmRlZmluZWQpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgTnVtYmVycywgU3RyaW5ncywgYW5kIEJvb2xlYW5zIGNhbiBiZSBwYXNzZWQgaW4gYnkgdXNpbmcgdGhlaXIgY2xhc3MgbmFtZXMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxudmFsaWQoMTIsIFN0cmluZykgLy8gZmFsc2VcclxudmFsaWQoU3RyaW5nLCBTdHJpbmcpIC8vIGZhbHNlXHJcbnZhbGlkKCdoZWxsbyB3b3JsZCcsIFN0cmluZykgLy8gdHJ1ZVxyXG5cclxudmFsaWQoJ2dhbm9uZG9yZicsIE51bWJlcikgLy8gZmFsc2VcclxudmFsaWQoTnVtYmVyLCBOdW1iZXIpIC8vIGZhbHNlXHJcbnZhbGlkKDQyLCBOdW1iZXIpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvcHRpb25zXCIgY2xhc3NOYW1lPVwib3B0aW9ucyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPk9wdGlvbnM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgQWxsIGRhdGEgdHlwZXMgaGF2ZSBhIHNldCBvZiBkZWZhdWx0IG9wdGlvbnMgd2hpY2ggYWNjb21wYW55IHRoZW0uIFdlIGNhbiBvdmVycmlkZSB0aGVcclxuICAgICAgICAgICAgZGVmYXVsdHMgd2l0aCBvdXIgb3duIGFyZ3VtZW50cyB0d28gZGlmZmVyZW50IHdheXNcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFRoZSBmaXJzdCB3YXkgaXMgd2UgY2FuIHBhc3MgdGhlIG9wdGlvbnMgYXMgdGhlIHRoaXJkIGFyZ3VtZW50IGFmdGVyIHRoZSBmb3JtYXQgdG8gdGhlXHJcbiAgICAgICAgICAgIG1ldGhvZC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZCgnaGVsbG8nLCBTdHJpbmcsIHttaW5MZW5ndGg6IDh9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoJ2hlbGxvIHdvcmxkJywgU3RyaW5nLCB7bWluTGVuZ3RoOiA4fSkpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgVGhlIHNlY29uZCB3YXkgdG8gcGFzcyBvcHRpb25zIGlzIGluc2lkZSB0aGUgZm9ybWF0IGl0c2VsZi4gV2UgdXNlIGEgc3BlY2lhbCBvYmplY3RcclxuICAgICAgICAgICAgc3ludGF4IHRvIGRlc2lnbmF0ZSB0aGlzOlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFwiTGlseVwiLCB7XzogU3RyaW5nLCBsb3dlcmNhc2U6IHRydWV9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoXCJsaWx5XCIsIHtfOiBTdHJpbmcsIGxvd2VyY2FzZTogdHJ1ZX0pKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwic3RyaW5nc1wiIGNsYXNzTmFtZT1cInN0cmluZ3Mgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5TdHJpbmdzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+VGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSBhdmFpbGFibGUgZm9yIHN0cmluZ3M6PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5lbWFpbDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmVkIHRoZSBzdHJpbmcgYmUgYSB2YWxpZCBlbWFpbC48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bG93ZXJjYXNlPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZWQgdGhlIHN0cmluZyBiZSBsb3dlcmNhc2UuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnVwcGVyY2FzZTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmVkIHRoZSBzdHJpbmcgYmUgdXBwZXJjYXNlLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5taW5MZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWluaW11bSByZXF1aXJlZCBsZW5ndGggb2YgdGhlIHN0cmluZy4gRGVmYXVsdDogMTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5tYXhMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWF4aW11bSByZXF1aXJlZCBsZW5ndGggb2YgdGhlIHN0cmluZy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIGV4YWN0IHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgc3RyaW5nLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5hbGxvd2VkPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgYSBzdHJpbmcgdG8gd2hpdGVsaXN0IHRoZSBpbnB1dCBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmJhbm5lZDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IGEgc3RyaW5nIHRvIGJsYWNrbGlzdCB0aGUgaW5wdXQgc3RyaW5nLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj53aGl0ZXNwYWNlPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICBGbGFnIGFzIGZhbHNlIHRvIHJlcXVpcmUgdGhlIHN0cmluZyB0byBjb250YWluIG5vIHdoaXRlc3BhY2VzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+cmVnZXg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBpbnB1dCBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnRyaW1tZWQ8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIHRoZSBzdHJpbmcgdG8gbm90IGJlZ2luIG9yIGVuZCB3aXRoIHdoaXRlc3BhY2UuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJudW1iZXJzXCIgY2xhc3NOYW1lPVwibnVtYmVycyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPk51bWJlcnM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5pbnRlZ2VyPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZSB3aG9sZSBudW1iZXJzLiBEZWZhdWx0OiBmYWxzZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5hbGxvd05hTjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIGFsbG93IE5hTi4gRGVmYXVsdDogZmFsc2U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+ZmluaXRlPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIGZhbHNlIHRvIGFsbG93IEluZmluaXR5LiBEZWZhdWx0OiB0cnVlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1pbjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSBpbnB1dDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5tYXg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgaW5wdXQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+ZXZlbjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgZXZlbiBudW1iZXJzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5vZGQ8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIG9kZCBudW1iZXJzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvYmplY3RzXCIgY2xhc3NOYW1lPVwib2JqZWN0IHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+T2JqZWN0czwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBXZSBjYW4gc2FuaXRpemUgb2JqZWN0cyBieSBjcmVhdGluZyBvdXIgb3duIG9iamVjdCByZXByZXNlbnRpbmcgaG93IHdlIGV4cGVjdCB0aGUgaW5wdXRcclxuICAgICAgICAgICAgdG8gYmUgZm9ybWF0dGVkLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5zdHJpY3Q8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gcmVxdWlyZSBhbGwgaW5wdXQgdmFsdWVzIHRvIGJlIGRlZmluZWQgYnkgdGhlIGZvcm1hdCBpbiBvcmRlciB0byBiZVxyXG4gICAgICAgICAgICAgICAgdmFsaWQgKHVubGVzcyBmbGFnZ2VkIGFzIG9wdGlvbmFsKS4gVGhpcyBhbHNvIHByZXZlbnRzIHRoZSB1c2VyIGZyb20gcHJvdmlkaW5nIHRoZWlyXHJcbiAgICAgICAgICAgICAgICBvd24gYWRkaXRpb25hbCBwcm9wZXJ0aWVzLiBEZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbE9wdGlvbmFsPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byBtYWtlIGFsbCBvZiB0aGUgcHJvcGVydGllcyBvcHRpb25hbDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5iYW5uZWRQcm9wczwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIFByb3ZpZGUgYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgKHN0cmluZ3MpIHRvIGRlc2lnbmF0ZSB3aGljaCBwcm9wZXJ0aWVzIGFyZSBub3RcclxuICAgICAgICAgICAgICAgIGFsbG93ZWQgdG8gYmUgcHJvdmlkZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm9wdGlvbmFsUHJvcHM8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBQcm92aWRlIGFuIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIChzdHJpbmdzKSB0byBkZXNpZ25hdGUgd2hpY2ggcHJvcGVydGllcyBhcmVcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoe30sIHt9KSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7fSwge2E6IFN0cmluZ30pKSAvLyBmYWxzZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7YTogJ2hlbGxvIHdvcmxkJ30sIHthOiBTdHJpbmd9KSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7fSwge186IHthOiBTdHJpbmd9LCBvcHRpb25hbFByb3BzOiBbXCJhXCJdfSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoe2I6IDEyfSwge30pKSAvLyBmYWxzZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7YjogMTJ9LCB7fSwge3N0cmljdDogZmFsc2V9KSkgLy8gdHJ1ZWB9PC9IaWdobGlnaHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImFycmF5c1wiIGNsYXNzTmFtZT1cImFycmF5IHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+QXJyYXlzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIFdlIGNhbiBzYW5pdGl6ZSBhcnJheXMgYnkgY3JlYXRpbmcgb3VyIG93biBhcnJheSByZXByZXNlbnRpbmcgaG93IHdlIGV4cGVjdCB0aGUgaW5wdXQgdG9cclxuICAgICAgICAgICAgYmUgZm9ybWF0dGVkLiBUaGUgZGVmYXVsdCBhcnJheSBiZWhhdmlvciBtaWdodCBzZWVtIGNvbmZ1c2luZyBhdCBmaXJzdCwgaG93ZXZlciBvbmNlIHlvdVxyXG4gICAgICAgICAgICB1bmRlcnN0YW5kIGl0IGluIHByYWN0aWNlIGl0IGlzIHNpbXBsZSBhbmQgZXhwcmVzc2l2ZS5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnN0YW5kYXJkPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPk1hbnVhbGx5IHNldCB0aGUgc3RhbmRhcmQgdG8gdXNlIGZvciBhbGwgYXJyYXkgdmFsdWVzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmZpcnN0QXNTdGFuZGFyZDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSB0byBzcGxpY2UgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGZvcm1hdCBhcnJheSBhbmQgdXNlIGl0IHRvIHZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICBhbGwgdmFsdWVzIG9mIHRoZSBpbnB1dCBhcnJheSB0aGF0IGFyZSBub3QgZXhwbGljaXRseSBkZWZpbmVkIGJ5IHRoZSBmb3JtYXQgYXJyYXkuXHJcbiAgICAgICAgICAgICAgICBUaGUgdmFsdWVzIG9mIGFsbCBvZiB0aGUgZm9ybWF0IGFycmF5IGFyZSBhbGwgc2hpZnRlZCB0byB0aGUgbGVmdCBieSBvbmUgaW5kZXguXHJcbiAgICAgICAgICAgICAgICBEZWZhdWx0OiB0cnVlIGlmIHRoZSBhcnJheSBsZW5ndGggaXMgZXF1YWwgdG8gMVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5zdHJpY3Q8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBGbGFnIGFzIHRydWUgdG8gcmVxdWlyZSBhbGwgYXJyYXkgaW5kZXhzIHRvIGJlIGRlZmluZWQgYnkgdGhlIGZvcm1hdCBpbiBvcmRlciB0byBiZVxyXG4gICAgICAgICAgICAgICAgdmFsaWQuIERlZmF1bHQ6IHRydWUgaWYgdGhlIGZvcm1hdCBsZW5ndGggaXMgYXQgbGVhc3QgMVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5taW5MZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBTZXQgdGhlIG1pbmltdW0gcmVxdWlyZWQgbGVuZ3RoIG9mIHRoZSBhcnJheS4gRGVmYXVsdDogMSB1bmxlc3MgdGhlIGZvcm1hdCBhcnJheSBpc1xyXG4gICAgICAgICAgICAgICAgZW1wdHkgYW5kIHRoZXJlIGlzIG5vIHN0YW5kYXJkLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5tYXhMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgYXJyYXkuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmxlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIGV4YWN0IHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgYXJyYXkuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFtdLCBbXSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoW10sIFtOdW1iZXJdKSkgLy8gdHJ1ZSAtIEJlY2F1c2UgdGhlIGZvcm1hdCBhcnJheSBpcyBvbmx5IG9uZSBlbGVtZW50IGxvbmcgdGhlIGZpcnN0IHZhbHVlIGlzIHNldCBhcyB0aGUgZmlyc3RBc1N0YW5kYXJkIGZvcm1hdCwgYW5kIHN0cmljdCBpcyBub3QgYXNzdW1lZCB0byBiZSB0cnVlLlxyXG5jb25zb2xlLmxvZyh2YWxpZChbMTJdLCBbTnVtYmVyXSkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoWzU0LCAyNV0sIFtOdW1iZXJdKSkgLy8gdHJ1ZSAtIEFzIHlvdSBjYW4gc2VlXHJcbmNvbnNvbGUubG9nKHZhbGlkKFsxMiwgMTJdLCBbTnVtYmVyLCBOdW1iZXJdKSkgLy8gdHJ1ZSAtIEJlY2F1c2UgdGhlIGZvcm1hdCBhcnJheSBpcyBsb25nZXIgdGhhbiBvbmUgZWxlbWVudCBmaXJzdEFzU3RhbmRhcmQgaXMgbm90IGFzc3VtZWQgYW5kIHN0cmljdCBpcyBzZXQgdG8gdHJ1ZS5cclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFs1MiwgNjMsIDE0XSwgW051bWJlciwgTnVtYmVyXSkpIC8vIGZhbHNlIC0gQmVjYXVzZSBzdHJpY3QgaXMgYXNzdW1lZCBleHRyYSBhcnJheSBlbGVtZW50cyB3aWxsIGNhdXNlIHZhbGlkYXRpb24gdG8gZmFpbC5cclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFsnYScsIDE1LCAyNV0sIHtfOltOdW1iZXIsIFN0cmluZ10sIGZpcnN0QXNTdGFuZGFyZDogdHJ1ZX0pKSAvLyB0cnVlIC0gV2UgY2FuIGFsc28gdXNlIGZpcnN0QXNTdGFuZGFyZCBhbG9uZ3NpZGUgd2l0aCBzcGVjaWZpYyBmb3JtYXRzIGZvciBjZXJ0YWluIGFycmF5IGluZGV4ZXMgYnkgc2V0dGluZyBpdCBleHBsaWNpdGx5IGluIHRoZSBpbmxpbmUgb3B0aW9ucy4gVGhlIGZpcnN0IGluZGV4IChOdW1iZXIpIHdpbGwgYmUgdGhlIHN0YW5kYXJkIGZvcm1hdCBmb3IgYWxsIGluZGV4ZXMsIGFuZCB0aGUgc2Vjb25kIGluZGV4IHdpbGwgbm93IGJlY29tZSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheSBvZiBjdXN0b20gZm9ybWF0cyBmb3Igc3BlY2lmaWMgaW5kZXhlcywgbWVhbmluZyB0aGUgZmlyc3QgYXJyYXkgaW5kZXggd2lsbCBiZSBleHBlY3RlZCB0byBiZSBhIHN0cmluZywgYW5kIGFsbCBmb2xsb3dpbmcgaW5kZXhlcyB3aWxsIGJlIGV4cGVjdGVkIHRvIGJlIG51bWJlcnMuYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZnVuY3Rpb25zXCIgY2xhc3NOYW1lPVwiZnVuY3Rpb24gc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5GdW5jdGlvbnM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgRnVuY3Rpb25zIGF1dG9tYXRpY2FsbHkgc3VwcG9ydCBhbGwgb2YgdGhlIG9iamVjdCBvcHRpb25zIGJlY2F1c2UgZnVuY3Rpb25zIGFyZVxyXG4gICAgICAgICAgICBlZmZlY3RpdmVseSBhbHNvIG9iamVjdHMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInVuaXZlcnNhbFwiIGNsYXNzTmFtZT1cInVuaXZlcnNhbCBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPlVuaXZlcnNhbCBPcHRpb25zPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+dmFsaWRhdGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBFeHBlY3RzIGEgZnVuY3Rpb24gb3IgYXJyYXkgb2YgZnVuY3Rpb25zIHRvIGNvbXBhcmUgdGhlIGlucHV0IHdpdGguIElmIGFueSBkb24ndFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWUsIHJlamVjdCB0aGUgaW5wdXQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmVxdWFsVG88L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBFeHBlY3RzIHRoZSBpbnB1dCB0byBiZSBzdHJpY3RseSBlcXVhbCAodXNpbmcgdGhlID09PSBvcGVyYXRvcikgdG8gdGhlIHZhbHVlIG9mIHRoZVxyXG4gICAgICAgICAgICAgICAgZXF1YWxUbyBvcHRpb24uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmRlZXBFcXVhbFRvPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRXhwZWN0cyB0aGUgaW5wdXQgdG8gYmUgZGVlcGx5IGVxdWFsIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZGVlcEVxdWFsVG8gb3B0aW9uLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5udWxsYWJsZTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSBpbiBvcmRlciB0byBhY2NlcHQgbnVsbCBpbnN0ZWFkIG9mIHRoZSBwcm92aWRlZCBmb3JtYXQsIGhlbmNlIG1ha2luZ1xyXG4gICAgICAgICAgICAgICAgdGhlIGlucHV0IFwibnVsbGFibGVcIi5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJzIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+QWxsPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIFRoZSBBbGwgZm9ybWF0IGlzIGEgc3BlY2lhbCBjbGFzcyB3ZSBjYW4gaW1wb3J0IHRoYXQgYWN0cyBhcyBhIHdpbGRjYXJkLiBQbGVhc2UgYmVcclxuICAgICAgICAgICAgY2FyZWZ1bCB3aXRoIHRoaXMgYXMgYW55IGtpbmQgb2YgZGFuZ2Vyb3VzIGlucHV0IGNvdWxkIGJlIHBhc3NlZC4gUGxlYXNlIG9ubHkgdXNlIHRoaXNcclxuICAgICAgICAgICAgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWQsIEFsbH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoXCJIZWxsbyA6KVwiLCBBbGwpKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKEluZmluaXR5LCBBbGwpKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHthOiAnaGVsbG8gd29ybGQnLCBiOiAxMn0sIHthOiBTdHJpbmcsIGI6IEFsbH0pKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==