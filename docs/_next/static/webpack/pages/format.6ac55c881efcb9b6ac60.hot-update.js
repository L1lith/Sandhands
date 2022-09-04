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
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }
      }, "integer"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      }, "Flag as true to require whole numbers. Default: false")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, "allowNaN"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }
      }, "Flag as true to allow NaN. Default: false")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, "finite"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }
      }, "Flag as false to allow Infinity. Default: true")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, "min"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, "Set the minimum value of the input")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }
      }, "max"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, "Set the maximum value of the input")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      }, "even"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, "Flag as true to require even numbers.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, "odd"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, "Flag as true to require odd numbers."))), __jsx("div", {
        id: "objects",
        className: "object section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }
      }, "Objects"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }
      }, "We can sanitize objects by creating our own object representing how we expect the input to be formatted."), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 15
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, "Flag as true to require all input values to be defined by the format in order to be valid (unless flagged as optional). This also prevents the user from providing their own additional properties. Default: true")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }
      }, "allOptional"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }
      }, "Flag as true to make all of the properties optional")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 15
        }
      }, "bannedProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }
      }, "Provide an array of property names (strings) to designate which properties are not allowed to be provided.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }
      }, "optionalProps"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 15
        }
      }, "Provide an array of property names (strings) to designate which properties are optional."))), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid({}, {})) // true\nconsole.log(valid({}, {a: String})) // false\nconsole.log(valid({a: 'hello world'}, {a: String})) // true\nconsole.log(valid({}, {_: {a: String}, optionalProps: [\"a\"]})) // true\nconsole.log(valid({b: 12}, {})) // false\nconsole.log(valid({b: 12}, {}, {strict: false})) // true")), __jsx("div", {
        id: "arrays",
        className: "array section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }
      }, "Arrays"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, "We can sanitize arrays by creating our own array representing how we expect the input to be formatted. The default array behavior might seem confusing at first, however once you understand it in practice it is simple and expressive."), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 15
        }
      }, "standard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }
      }, "Manually set the standard to use for all array values")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 15
        }
      }, "firstAsStandard"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 15
        }
      }, "Flag as true to splice the first element of the format array and use it to validate all values of the input array that are not explicitly defined by the format array. The values of all of the format array are all shifted to the left by one index. Default: true if the array length is equal to 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 15
        }
      }, "strict"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 15
        }
      }, "Flag as true to require all array indexs to be defined by the format in order to be valid. Default: true if the format length is at least 1")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 15
        }
      }, "minLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }, "Set the minimum required length of the array. Default: 1 unless the format array is empty and there is no standard.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }
      }, "maxLength"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 15
        }
      }, "Set the maximum length of the array.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }
      }, "length"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 15
        }
      }, "Set the exact required length of the array."))), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }
      }, "const {valid} = require('sandhands')\n\nconsole.log(valid([], [])) // true\nconsole.log(valid([], [Number])) // true - Because the format array is only one element long the first value is set as the firstAsStandard format, and strict is not assumed to be true.\nconsole.log(valid([12], [Number])) // true\nconsole.log(valid([54, 25], [Number])) // true - As you can see\nconsole.log(valid([12, 12], [Number, Number])) // true - Because the format array is longer than one element firstAsStandard is not assumed and strict is set to true.\n\nconsole.log(valid([52, 63, 14], [Number, Number])) // false - Because strict is assumed extra array elements will cause validation to fail.\n\nconsole.log(valid(['a', 15, 25], {_:[Number, String], firstAsStandard: true})) // true - We can also use firstAsStandard alongside with specific formats for certain array indexes by setting it explicitly in the inline options. The first index (Number) will be the standard format for all indexes, and the second index will now become the beginning of the array of custom formats for specific indexes, meaning the first array index will be expected to be a string, and all following indexes will be expected to be numbers.")), __jsx("div", {
        id: "functions",
        className: "function section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }
      }, "Functions"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }
      }, "Functions automatically support all of the object options because functions are effectively also objects.")), __jsx("div", {
        id: "universal",
        className: "universal section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }
      }, "Universal Options"), __jsx("div", {
        className: "options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 15
        }
      }, "validate"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 15
        }
      }, "Expects a function or array of functions to compare the input with. If any don't return true, reject the input.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 15
        }
      }, "equalTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 15
        }
      }, "Expects the input to be strictly equal (using the === operator) to the value of the equalTo option.")), __jsx("div", {
        className: "option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 15
        }
      }, "deepEqualTo"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 15
        }
      }, "Expects the input to be deeply equal to the value of the deepEqualTo option.")), __jsx("div", {
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
      }, "nullable"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 15
        }
      }, "Flag as true in order to accept null instead of the provided format, hence making the input \"nullable\".")))), __jsx("div", {
        className: "numbers section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }
      }, "All"), __jsx("p", {
        className: "description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }
      }, "The All format is a special class we can import that acts as a wildcard. Please be careful with this as any kind of dangerous input could be passed. Please only use this if you know what you are doing."), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "javascript",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybWF0LmpzIl0sIm5hbWVzIjpbIkZvcm1hdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNJQUZGLEVBTUU7QUFBSyxVQUFFLEVBQUMsWUFBUjtBQUFxQixpQkFBUyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBRkYsRUFLRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtPQUxGLEVBY0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFkRixFQWlCRSxNQUFDLHNEQUFEO0FBQVcsaUJBQVMsRUFBQyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNQQWpCRixDQU5GLEVBaUNFO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsaUJBQVMsRUFBQyxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7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QkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdGQUZGLENBZkYsRUFxQkU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFIQUZGLENBckJGLENBRkYsQ0F2UEYsRUF1UkU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFOQUZGLEVBT0UsTUFBQyxzREFBRDtBQUFXLGlCQUFTLEVBQUMsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TkFQRixDQXZSRixDQURGO0FBdVNEOzs7O0VBelNrQkMsK0M7O0FBNFNORCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3JtYXQuNmFjNTVjODgxZWZjYjliNmFjNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAncmVhY3QtaGlnaGxpZ2h0J1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9mb3JtYXQubGVzcydcclxuXHJcbmNsYXNzIEZvcm1hdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYXRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZXRpdGxlXCI+Rm9ybWF0PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgVGhpcyBzZWN0aW9uIGRlc2NyaWJlcyB0aGUgZm9ybWF0ICh0aGUgc2FuaXRhdGlvbiBzY2hlbWEpIHdlIGdpdmUgdG8gU2FuZGhhbmRzIHRvIGRlZmluZVxyXG4gICAgICAgICAgaG93IGl0IHNob3VsZCBzYW5pdGl6ZSB0aGUgaW5wdXQuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmltaXRpdmVzXCIgY2xhc3NOYW1lPVwicHJpbWl0aXZlcyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPlByaW1pdGl2ZXMgQmFzaWNzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIE51bGwgYW5kIHVuZGVmaW5lZCBjYW4gYmUgcGFzc2VkIGluIGFzIGlzLCBhbmQgaXQgd2lsbCBleHBlY3Qgc3RyaWN0IGVxdWFsaXR5LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbnZhbGlkKCcnLCBudWxsKSAvLyBmYWxzZVxyXG52YWxpZCh1bmRlZmluZWQsIG51bGwpIC8vIGZhbHNlXHJcbnZhbGlkKG51bGwsIG51bGwpIC8vIHRydWVcclxuXHJcbnZhbGlkKCcnLCB1bmRlZmluZWQpIC8vIGZhbHNlXHJcbnZhbGlkKG51bGwsIHVuZGVmaW5lZCkgLy8gZmFsc2VcclxudmFsaWQodW5kZWZpbmVkLCB1bmRlZmluZWQpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgTnVtYmVycywgU3RyaW5ncywgYW5kIEJvb2xlYW5zIGNhbiBiZSBwYXNzZWQgaW4gYnkgdXNpbmcgdGhlaXIgY2xhc3MgbmFtZXMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxudmFsaWQoMTIsIFN0cmluZykgLy8gZmFsc2VcclxudmFsaWQoU3RyaW5nLCBTdHJpbmcpIC8vIGZhbHNlXHJcbnZhbGlkKCdoZWxsbyB3b3JsZCcsIFN0cmluZykgLy8gdHJ1ZVxyXG5cclxudmFsaWQoJ2dhbm9uZG9yZicsIE51bWJlcikgLy8gZmFsc2VcclxudmFsaWQoTnVtYmVyLCBOdW1iZXIpIC8vIGZhbHNlXHJcbnZhbGlkKDQyLCBOdW1iZXIpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvcHRpb25zXCIgY2xhc3NOYW1lPVwib3B0aW9ucyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPk9wdGlvbnM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgQWxsIGRhdGEgdHlwZXMgaGF2ZSBhIHNldCBvZiBkZWZhdWx0IG9wdGlvbnMgd2hpY2ggYWNjb21wYW55IHRoZW0uIFdlIGNhbiBvdmVycmlkZSB0aGVcclxuICAgICAgICAgICAgZGVmYXVsdHMgd2l0aCBvdXIgb3duIGFyZ3VtZW50cyB0d28gZGlmZmVyZW50IHdheXNcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFRoZSBmaXJzdCB3YXkgaXMgd2UgY2FuIHBhc3MgdGhlIG9wdGlvbnMgYXMgdGhlIHRoaXJkIGFyZ3VtZW50IGFmdGVyIHRoZSBmb3JtYXQgdG8gdGhlXHJcbiAgICAgICAgICAgIG1ldGhvZC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZCgnaGVsbG8nLCBTdHJpbmcsIHttaW5MZW5ndGg6IDh9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoJ2hlbGxvIHdvcmxkJywgU3RyaW5nLCB7bWluTGVuZ3RoOiA4fSkpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgVGhlIHNlY29uZCB3YXkgdG8gcGFzcyBvcHRpb25zIGlzIGluc2lkZSB0aGUgZm9ybWF0IGl0c2VsZi4gV2UgdXNlIGEgc3BlY2lhbCBvYmplY3RcclxuICAgICAgICAgICAgc3ludGF4IHRvIGRlc2lnbmF0ZSB0aGlzOlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEhpZ2hsaWdodCBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+e2Bjb25zdCB7dmFsaWR9ID0gcmVxdWlyZSgnc2FuZGhhbmRzJylcclxuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFwiTGlseVwiLCB7XzogU3RyaW5nLCBsb3dlcmNhc2U6IHRydWV9KSkgLy8gZmFsc2VcclxuY29uc29sZS5sb2codmFsaWQoXCJsaWx5XCIsIHtfOiBTdHJpbmcsIGxvd2VyY2FzZTogdHJ1ZX0pKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwic3RyaW5nc1wiIGNsYXNzTmFtZT1cInN0cmluZ3Mgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5TdHJpbmdzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+VGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSBhdmFpbGFibGUgZm9yIHN0cmluZ3M6PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5lbWFpbDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmVkIHRoZSBzdHJpbmcgYmUgYSB2YWxpZCBlbWFpbC48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bG93ZXJjYXNlPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZWQgdGhlIHN0cmluZyBiZSBsb3dlcmNhc2UuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnVwcGVyY2FzZTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmVkIHRoZSBzdHJpbmcgYmUgdXBwZXJjYXNlLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5taW5MZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWluaW11bSByZXF1aXJlZCBsZW5ndGggb2YgdGhlIHN0cmluZy4gRGVmYXVsdDogMTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5tYXhMZW5ndGg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgbWF4aW11bSByZXF1aXJlZCBsZW5ndGggb2YgdGhlIHN0cmluZy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIGV4YWN0IHJlcXVpcmVkIGxlbmd0aCBvZiB0aGUgc3RyaW5nLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5hbGxvd2VkPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgYSBzdHJpbmcgdG8gd2hpdGVsaXN0IHRoZSBpbnB1dCBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmJhbm5lZDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IGEgc3RyaW5nIHRvIGJsYWNrbGlzdCB0aGUgaW5wdXQgc3RyaW5nLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj53aGl0ZXNwYWNlPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICBGbGFnIGFzIGZhbHNlIHRvIHJlcXVpcmUgdGhlIHN0cmluZyB0byBjb250YWluIG5vIHdoaXRlc3BhY2VzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+cmVnZXg8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byB0ZXN0IHRoZSBpbnB1dCBzdHJpbmcuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnRyaW1tZWQ8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIHRoZSBzdHJpbmcgdG8gbm90IGJlZ2luIG9yIGVuZCB3aXRoIHdoaXRlc3BhY2UuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJudW1iZXJzXCIgY2xhc3NOYW1lPVwibnVtYmVycyBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPk51bWJlcnM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmludGVnZXI8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIHdob2xlIG51bWJlcnMuIERlZmF1bHQ6IGZhbHNlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmFsbG93TmFOPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gYWxsb3cgTmFOLiBEZWZhdWx0OiBmYWxzZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5maW5pdGU8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkZsYWcgYXMgZmFsc2UgdG8gYWxsb3cgSW5maW5pdHkuIERlZmF1bHQ6IHRydWU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bWluPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIG1pbmltdW0gdmFsdWUgb2YgdGhlIGlucHV0PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1heDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+U2V0IHRoZSBtYXhpbXVtIHZhbHVlIG9mIHRoZSBpbnB1dDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj5ldmVuPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5GbGFnIGFzIHRydWUgdG8gcmVxdWlyZSBldmVuIG51bWJlcnMuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm9kZDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIHJlcXVpcmUgb2RkIG51bWJlcnMuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm9iamVjdHNcIiBjbGFzc05hbWU9XCJvYmplY3Qgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5PYmplY3RzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIFdlIGNhbiBzYW5pdGl6ZSBvYmplY3RzIGJ5IGNyZWF0aW5nIG91ciBvd24gb2JqZWN0IHJlcHJlc2VudGluZyBob3cgd2UgZXhwZWN0IHRoZSBpbnB1dFxyXG4gICAgICAgICAgICB0byBiZSBmb3JtYXR0ZWQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnN0cmljdDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIGFsbCBpbnB1dCB2YWx1ZXMgdG8gYmUgZGVmaW5lZCBieSB0aGUgZm9ybWF0IGluIG9yZGVyIHRvIGJlXHJcbiAgICAgICAgICAgICAgICB2YWxpZCAodW5sZXNzIGZsYWdnZWQgYXMgb3B0aW9uYWwpLiBUaGlzIGFsc28gcHJldmVudHMgdGhlIHVzZXIgZnJvbSBwcm92aWRpbmcgdGhlaXJcclxuICAgICAgICAgICAgICAgIG93biBhZGRpdGlvbmFsIHByb3BlcnRpZXMuIERlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+YWxsT3B0aW9uYWw8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RmxhZyBhcyB0cnVlIHRvIG1ha2UgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9wdGlvbmFsPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPmJhbm5lZFByb3BzPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgUHJvdmlkZSBhbiBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyAoc3RyaW5ncykgdG8gZGVzaWduYXRlIHdoaWNoIHByb3BlcnRpZXMgYXJlIG5vdFxyXG4gICAgICAgICAgICAgICAgYWxsb3dlZCB0byBiZSBwcm92aWRlZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+b3B0aW9uYWxQcm9wczwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIFByb3ZpZGUgYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgKHN0cmluZ3MpIHRvIGRlc2lnbmF0ZSB3aGljaCBwcm9wZXJ0aWVzIGFyZVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWwuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPntgY29uc3Qge3ZhbGlkfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZCh7fSwge30pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHt9LCB7YTogU3RyaW5nfSkpIC8vIGZhbHNlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHthOiAnaGVsbG8gd29ybGQnfSwge2E6IFN0cmluZ30pKSAvLyB0cnVlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHt9LCB7Xzoge2E6IFN0cmluZ30sIG9wdGlvbmFsUHJvcHM6IFtcImFcIl19KSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZCh7YjogMTJ9LCB7fSkpIC8vIGZhbHNlXHJcbmNvbnNvbGUubG9nKHZhbGlkKHtiOiAxMn0sIHt9LCB7c3RyaWN0OiBmYWxzZX0pKSAvLyB0cnVlYH08L0hpZ2hsaWdodD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiYXJyYXlzXCIgY2xhc3NOYW1lPVwiYXJyYXkgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5BcnJheXM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgV2UgY2FuIHNhbml0aXplIGFycmF5cyBieSBjcmVhdGluZyBvdXIgb3duIGFycmF5IHJlcHJlc2VudGluZyBob3cgd2UgZXhwZWN0IHRoZSBpbnB1dCB0b1xyXG4gICAgICAgICAgICBiZSBmb3JtYXR0ZWQuIFRoZSBkZWZhdWx0IGFycmF5IGJlaGF2aW9yIG1pZ2h0IHNlZW0gY29uZnVzaW5nIGF0IGZpcnN0LCBob3dldmVyIG9uY2UgeW91XHJcbiAgICAgICAgICAgIHVuZGVyc3RhbmQgaXQgaW4gcHJhY3RpY2UgaXQgaXMgc2ltcGxlIGFuZCBleHByZXNzaXZlLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+c3RhbmRhcmQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+TWFudWFsbHkgc2V0IHRoZSBzdGFuZGFyZCB0byB1c2UgZm9yIGFsbCBhcnJheSB2YWx1ZXM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+Zmlyc3RBc1N0YW5kYXJkPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRmxhZyBhcyB0cnVlIHRvIHNwbGljZSB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZm9ybWF0IGFycmF5IGFuZCB1c2UgaXQgdG8gdmFsaWRhdGVcclxuICAgICAgICAgICAgICAgIGFsbCB2YWx1ZXMgb2YgdGhlIGlucHV0IGFycmF5IHRoYXQgYXJlIG5vdCBleHBsaWNpdGx5IGRlZmluZWQgYnkgdGhlIGZvcm1hdCBhcnJheS5cclxuICAgICAgICAgICAgICAgIFRoZSB2YWx1ZXMgb2YgYWxsIG9mIHRoZSBmb3JtYXQgYXJyYXkgYXJlIGFsbCBzaGlmdGVkIHRvIHRoZSBsZWZ0IGJ5IG9uZSBpbmRleC5cclxuICAgICAgICAgICAgICAgIERlZmF1bHQ6IHRydWUgaWYgdGhlIGFycmF5IGxlbmd0aCBpcyBlcXVhbCB0byAxXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPnN0cmljdDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEZsYWcgYXMgdHJ1ZSB0byByZXF1aXJlIGFsbCBhcnJheSBpbmRleHMgdG8gYmUgZGVmaW5lZCBieSB0aGUgZm9ybWF0IGluIG9yZGVyIHRvIGJlXHJcbiAgICAgICAgICAgICAgICB2YWxpZC4gRGVmYXVsdDogdHJ1ZSBpZiB0aGUgZm9ybWF0IGxlbmd0aCBpcyBhdCBsZWFzdCAxXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1pbkxlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIFNldCB0aGUgbWluaW11bSByZXF1aXJlZCBsZW5ndGggb2YgdGhlIGFycmF5LiBEZWZhdWx0OiAxIHVubGVzcyB0aGUgZm9ybWF0IGFycmF5IGlzXHJcbiAgICAgICAgICAgICAgICBlbXB0eSBhbmQgdGhlcmUgaXMgbm8gc3RhbmRhcmQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm1heExlbmd0aDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5TZXQgdGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBhcnJheS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+bGVuZ3RoPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlNldCB0aGUgZXhhY3QgcmVxdWlyZWQgbGVuZ3RoIG9mIHRoZSBhcnJheS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZH0gPSByZXF1aXJlKCdzYW5kaGFuZHMnKVxyXG5cclxuY29uc29sZS5sb2codmFsaWQoW10sIFtdKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZChbXSwgW051bWJlcl0pKSAvLyB0cnVlIC0gQmVjYXVzZSB0aGUgZm9ybWF0IGFycmF5IGlzIG9ubHkgb25lIGVsZW1lbnQgbG9uZyB0aGUgZmlyc3QgdmFsdWUgaXMgc2V0IGFzIHRoZSBmaXJzdEFzU3RhbmRhcmQgZm9ybWF0LCBhbmQgc3RyaWN0IGlzIG5vdCBhc3N1bWVkIHRvIGJlIHRydWUuXHJcbmNvbnNvbGUubG9nKHZhbGlkKFsxMl0sIFtOdW1iZXJdKSkgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyh2YWxpZChbNTQsIDI1XSwgW051bWJlcl0pKSAvLyB0cnVlIC0gQXMgeW91IGNhbiBzZWVcclxuY29uc29sZS5sb2codmFsaWQoWzEyLCAxMl0sIFtOdW1iZXIsIE51bWJlcl0pKSAvLyB0cnVlIC0gQmVjYXVzZSB0aGUgZm9ybWF0IGFycmF5IGlzIGxvbmdlciB0aGFuIG9uZSBlbGVtZW50IGZpcnN0QXNTdGFuZGFyZCBpcyBub3QgYXNzdW1lZCBhbmQgc3RyaWN0IGlzIHNldCB0byB0cnVlLlxyXG5cclxuY29uc29sZS5sb2codmFsaWQoWzUyLCA2MywgMTRdLCBbTnVtYmVyLCBOdW1iZXJdKSkgLy8gZmFsc2UgLSBCZWNhdXNlIHN0cmljdCBpcyBhc3N1bWVkIGV4dHJhIGFycmF5IGVsZW1lbnRzIHdpbGwgY2F1c2UgdmFsaWRhdGlvbiB0byBmYWlsLlxyXG5cclxuY29uc29sZS5sb2codmFsaWQoWydhJywgMTUsIDI1XSwge186W051bWJlciwgU3RyaW5nXSwgZmlyc3RBc1N0YW5kYXJkOiB0cnVlfSkpIC8vIHRydWUgLSBXZSBjYW4gYWxzbyB1c2UgZmlyc3RBc1N0YW5kYXJkIGFsb25nc2lkZSB3aXRoIHNwZWNpZmljIGZvcm1hdHMgZm9yIGNlcnRhaW4gYXJyYXkgaW5kZXhlcyBieSBzZXR0aW5nIGl0IGV4cGxpY2l0bHkgaW4gdGhlIGlubGluZSBvcHRpb25zLiBUaGUgZmlyc3QgaW5kZXggKE51bWJlcikgd2lsbCBiZSB0aGUgc3RhbmRhcmQgZm9ybWF0IGZvciBhbGwgaW5kZXhlcywgYW5kIHRoZSBzZWNvbmQgaW5kZXggd2lsbCBub3cgYmVjb21lIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5IG9mIGN1c3RvbSBmb3JtYXRzIGZvciBzcGVjaWZpYyBpbmRleGVzLCBtZWFuaW5nIHRoZSBmaXJzdCBhcnJheSBpbmRleCB3aWxsIGJlIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nLCBhbmQgYWxsIGZvbGxvd2luZyBpbmRleGVzIHdpbGwgYmUgZXhwZWN0ZWQgdG8gYmUgbnVtYmVycy5gfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmdW5jdGlvbnNcIiBjbGFzc05hbWU9XCJmdW5jdGlvbiBzZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPkZ1bmN0aW9uczwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBGdW5jdGlvbnMgYXV0b21hdGljYWxseSBzdXBwb3J0IGFsbCBvZiB0aGUgb2JqZWN0IG9wdGlvbnMgYmVjYXVzZSBmdW5jdGlvbnMgYXJlXHJcbiAgICAgICAgICAgIGVmZmVjdGl2ZWx5IGFsc28gb2JqZWN0cy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwidW5pdmVyc2FsXCIgY2xhc3NOYW1lPVwidW5pdmVyc2FsIHNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYW1lXCI+VW5pdmVyc2FsIE9wdGlvbnM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5hbWVcIj52YWxpZGF0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEV4cGVjdHMgYSBmdW5jdGlvbiBvciBhcnJheSBvZiBmdW5jdGlvbnMgdG8gY29tcGFyZSB0aGUgaW5wdXQgd2l0aC4gSWYgYW55IGRvbid0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZSwgcmVqZWN0IHRoZSBpbnB1dC5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+ZXF1YWxUbzwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEV4cGVjdHMgdGhlIGlucHV0IHRvIGJlIHN0cmljdGx5IGVxdWFsICh1c2luZyB0aGUgPT09IG9wZXJhdG9yKSB0byB0aGUgdmFsdWUgb2YgdGhlXHJcbiAgICAgICAgICAgICAgICBlcXVhbFRvIG9wdGlvbi5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+ZGVlcEVxdWFsVG88L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBFeHBlY3RzIHRoZSBpbnB1dCB0byBiZSBkZWVwbHkgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIHRoZSBkZWVwRXF1YWxUbyBvcHRpb24uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmFtZVwiPm51bGxhYmxlPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgRmxhZyBhcyB0cnVlIGluIG9yZGVyIHRvIGFjY2VwdCBudWxsIGluc3RlYWQgb2YgdGhlIHByb3ZpZGVkIGZvcm1hdCwgaGVuY2UgbWFraW5nXHJcbiAgICAgICAgICAgICAgICB0aGUgaW5wdXQgXCJudWxsYWJsZVwiLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnMgc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj5BbGw8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgVGhlIEFsbCBmb3JtYXQgaXMgYSBzcGVjaWFsIGNsYXNzIHdlIGNhbiBpbXBvcnQgdGhhdCBhY3RzIGFzIGEgd2lsZGNhcmQuIFBsZWFzZSBiZVxyXG4gICAgICAgICAgICBjYXJlZnVsIHdpdGggdGhpcyBhcyBhbnkga2luZCBvZiBkYW5nZXJvdXMgaW5wdXQgY291bGQgYmUgcGFzc2VkLiBQbGVhc2Ugb25seSB1c2UgdGhpc1xyXG4gICAgICAgICAgICBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj57YGNvbnN0IHt2YWxpZCwgQWxsfSA9IHJlcXVpcmUoJ3NhbmRoYW5kcycpXHJcblxyXG5jb25zb2xlLmxvZyh2YWxpZChcIkhlbGxvIDopXCIsIEFsbCkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoSW5maW5pdHksIEFsbCkpIC8vIHRydWVcclxuY29uc29sZS5sb2codmFsaWQoe2E6ICdoZWxsbyB3b3JsZCcsIGI6IDEyfSwge2E6IFN0cmluZywgYjogQWxsfSkpIC8vIHRydWVgfTwvSGlnaGxpZ2h0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9