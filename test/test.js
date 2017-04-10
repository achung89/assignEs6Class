/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "C:\\Workdir\\Javascript\\Project\\assignEs6Classes";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.assignEs6Class = global.assignEs6Class || {})));
}(this, (function (exports) { 'use strict';

function assignEs6Class(inst1, inst2) {

  function getES6Descriptors(obj1,obj2) {
   var descriptors = Object.getOwnPropertyNames(obj1).reduce((descriptors, key) => {
    descriptors[key] = Object.getOwnPropertyDescriptor(obj1, key);
      return descriptors;
    }, {});
    Object.getOwnPropertySymbols(obj1).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(obj1, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.getOwnPropertyNames(obj2).forEach((key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(obj2, key);
    });
    Object.getOwnPropertySymbols(obj2).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(obj2, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    return descriptors;
  }
  var propDescriptors = getES6Descriptors(inst1,inst2);
  var prototypeDescriptors = getES6Descriptors(Object.getPrototypeOf(inst1), Object.getPrototypeOf(inst2));
  var mergedPrototype = Object.create({}, prototypeDescriptors);
  var mergedClass = Object.create(mergedPrototype, propDescriptors);
  return mergedClass;
}

function assignEs6Class$1(e,t){function r(e,t){var r=Object.getOwnPropertyNames(e).reduce((t,r)=>{t[r]=Object.getOwnPropertyDescriptor(e,r);return t},{});Object.getOwnPropertySymbols(e).forEach(t=>{let c=Object.getOwnPropertyDescriptor(e,t);if(c.enumerable){r[t]=c;}});Object.getOwnPropertyNames(t).forEach(e=>{r[e]=Object.getOwnPropertyDescriptor(t,e);});Object.getOwnPropertySymbols(t).forEach(e=>{let c=Object.getOwnPropertyDescriptor(t,e);if(c.enumerable){r[e]=c;}});return r}var c=r(e,t);var o=r(Object.getPrototypeOf(e),Object.getPrototypeOf(t));var n=Object.create({},o);var O=Object.create(n,c);return O}

exports.assignEs6Class = assignEs6Class;
exports.assignEs6Class_min = assignEs6Class$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_bundle_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_bundle_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_bundle_js__);


console.log(__WEBPACK_IMPORTED_MODULE_0__dist_bundle_js__["assignEs6Class"]);

/***/ })
/******/ ]);