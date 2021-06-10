/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe1"] = self["webpackChunkmfe1"] || []).push([["src_TextInput_js"],{

/***/ "./src/TextInput.js":
/*!**************************!*\
  !*** ./src/TextInput.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar TextInput = function TextInput(_ref) {\n  var changeAction = _ref.changeAction;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    onChange: function onChange(e) {\n      return changeAction === null || changeAction === void 0 ? void 0 : changeAction(e.target.value);\n    }\n  }));\n}; // const Button = () => (\n//   <button>MFE1 Button is meeeee</button>\n// );\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);\n\n//# sourceURL=webpack://mfe1/./src/TextInput.js?");

/***/ })

}]);