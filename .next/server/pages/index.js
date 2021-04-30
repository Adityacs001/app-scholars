module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ \"@emotion/styled/base\");\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/aditya/Documents/Projects/app-dashboard/pages/index.js\";\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\nconst hoverStyles = false ? undefined : {\n  name: \"v9nu4a-hoverStyles\",\n  styles: \"&:hover{border-color:black;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));;};label:hoverStyles;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0eWEvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1kYXNoYm9hcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXVCIiwiZmlsZSI6Ii9Vc2Vycy9hZGl0eWEvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1kYXNoYm9hcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHcsIHsgY3NzIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgaG92ZXJTdHlsZXMgPSBjc3NgXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgJHt0d2B0ZXh0LWJsYWNrYH1cbiAgfVxuYDtcbmNvbnN0IElucHV0ID0gKHsgaGFzSG92ZXIgfSkgPT4gKFxuICA8aW5wdXQgY3NzPXtbdHdgYm9yZGVyYCwgaGFzSG92ZXIgJiYgaG92ZXJTdHlsZXNdfSAvPlxuKTtcblxuY29uc3QgSW5wdXRTdHlsZWQgPSB0dy5pbnB1dGBib3JkZXIgaG92ZXI6Ym9yZGVyLWJsYWNrYDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgPGRpdiB0dz1cIm1heC13LTR4bCBteC1hdXRvIHAtNSBtdC01XCI+XG4gICAgICA8aDEgdHc9XCJ0ZXh0LWJsdWUtOTAwIHRleHQtN3hsXCI+SGVsbG8gd29ybGQ8L2gxPlxuICAgICAgPElucHV0IGhhc0hvdmVyPXt0cnVlfSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst Input = ({\n  hasHover\n}) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"input\", {\n  css: [\"border-width:1px;\", hasHover && hoverStyles, false ? undefined : \";label:Input;\", false ? undefined : \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0eWEvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1kYXNoYm9hcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1MiLCJmaWxlIjoiL1VzZXJzL2FkaXR5YS9Eb2N1bWVudHMvUHJvamVjdHMvYXBwLWRhc2hib2FyZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0dywgeyBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBob3ZlclN0eWxlcyA9IGNzc2BcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAke3R3YHRleHQtYmxhY2tgfVxuICB9XG5gO1xuY29uc3QgSW5wdXQgPSAoeyBoYXNIb3ZlciB9KSA9PiAoXG4gIDxpbnB1dCBjc3M9e1t0d2Bib3JkZXJgLCBoYXNIb3ZlciAmJiBob3ZlclN0eWxlc119IC8+XG4pO1xuXG5jb25zdCBJbnB1dFN0eWxlZCA9IHR3LmlucHV0YGJvcmRlciBob3Zlcjpib3JkZXItYmxhY2tgO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICA8ZGl2IHR3PVwibWF4LXctNHhsIG14LWF1dG8gcC01IG10LTVcIj5cbiAgICAgIDxoMSB0dz1cInRleHQtYmx1ZS05MDAgdGV4dC03eGxcIj5IZWxsbyB3b3JsZDwvaDE+XG4gICAgICA8SW5wdXQgaGFzSG92ZXI9e3RydWV9IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\"],\n  \"data-tw\": \"border\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }\n});\n\nconst InputStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(\"input\", false ? undefined : {\n  target: \"e7xoopb0\",\n  label: \"InputStyled\"\n})(false ? undefined : {\n  name: \"1n00o2k\",\n  styles: \"border-width:1px;:hover{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0eWEvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1kYXNoYm9hcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW9CIiwiZmlsZSI6Ii9Vc2Vycy9hZGl0eWEvRG9jdW1lbnRzL1Byb2plY3RzL2FwcC1kYXNoYm9hcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHcsIHsgY3NzIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgaG92ZXJTdHlsZXMgPSBjc3NgXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgJHt0d2B0ZXh0LWJsYWNrYH1cbiAgfVxuYDtcbmNvbnN0IElucHV0ID0gKHsgaGFzSG92ZXIgfSkgPT4gKFxuICA8aW5wdXQgY3NzPXtbdHdgYm9yZGVyYCwgaGFzSG92ZXIgJiYgaG92ZXJTdHlsZXNdfSAvPlxuKTtcblxuY29uc3QgSW5wdXRTdHlsZWQgPSB0dy5pbnB1dGBib3JkZXIgaG92ZXI6Ym9yZGVyLWJsYWNrYDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgPGRpdiB0dz1cIm1heC13LTR4bCBteC1hdXRvIHAtNSBtdC01XCI+XG4gICAgICA8aDEgdHc9XCJ0ZXh0LWJsdWUtOTAwIHRleHQtN3hsXCI+SGVsbG8gd29ybGQ8L2gxPlxuICAgICAgPElucHV0IGhhc0hvdmVyPXt0cnVlfSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nvar _ref = false ? undefined : {\n  name: \"1t59124-Index\",\n  styles: \"max-width:56rem;margin-left:auto;margin-right:auto;padding:1.25rem;margin-top:1.25rem;label:Index;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref2 = false ? undefined : {\n  name: \"oznlj2-Index\",\n  styles: \"--tw-text-opacity:1;color:rgba(30, 58, 138, var(--tw-text-opacity));font-size:4.5rem;line-height:1;label:Index;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst Index = () => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n  className: \"\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }\n}, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n  css: _ref,\n  \"data-tw\": \"max-w-4xl mx-auto p-5 mt-5\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }\n}, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h1\", {\n  css: _ref2,\n  \"data-tw\": \"text-blue-900 text-7xl\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 7\n  }\n}, \"Hello world\"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(Input, {\n  hasHover: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 7\n  }\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhvdmVyU3R5bGVzIiwiSW5wdXQiLCJoYXNIb3ZlciIsIklucHV0U3R5bGVkIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWpCOztBQU1BLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNaO0FBQU8sS0FBRyx3QkFBZUEsUUFBUSxJQUFJRixXQUEzQixpbUNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREY7O0FBSUEsTUFBTUcsV0FBVyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFwQjs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsTUFDWjtBQUFLLFdBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUUsMkRBQUMsS0FBRDtBQUFPLFVBQVEsRUFBRSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsQ0FERixDQURGOztBQVNlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3LCB7IGNzcyB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmNvbnN0IGhvdmVyU3R5bGVzID0gY3NzYFxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgICR7dHdgdGV4dC1ibGFja2B9XG4gIH1cbmA7XG5jb25zdCBJbnB1dCA9ICh7IGhhc0hvdmVyIH0pID0+IChcbiAgPGlucHV0IGNzcz17W3R3YGJvcmRlcmAsIGhhc0hvdmVyICYmIGhvdmVyU3R5bGVzXX0gLz5cbik7XG5cbmNvbnN0IElucHV0U3R5bGVkID0gdHcuaW5wdXRgYm9yZGVyIGhvdmVyOmJvcmRlci1ibGFja2A7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgIDxkaXYgdHc9XCJtYXgtdy00eGwgbXgtYXV0byBwLTUgbXQtNVwiPlxuICAgICAgPGgxIHR3PVwidGV4dC1ibHVlLTkwMCB0ZXh0LTd4bFwiPkhlbGxvIHdvcmxkPC9oMT5cbiAgICAgIDxJbnB1dCBoYXNIb3Zlcj17dHJ1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiPzZkMDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGVtb3Rpb24vcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/react\n");

/***/ }),

/***/ "@emotion/styled/base":
/*!***************************************!*\
  !*** external "@emotion/styled/base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled/base\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiPzRiNWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGVtb3Rpb24vc3R5bGVkL2Jhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled/base\n");

/***/ })

/******/ });