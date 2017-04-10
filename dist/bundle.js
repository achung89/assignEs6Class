(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.assignEs6Class = global.assignEs6Class || {})));
}(this, (function (exports) { 'use strict';

function assignEs6Class$1(inst1, inst2) {

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

function assignEs6Class$2(e,t){function r(e,t){var r=Object.getOwnPropertyNames(e).reduce((t,r)=>{t[r]=Object.getOwnPropertyDescriptor(e,r);return t},{});Object.getOwnPropertySymbols(e).forEach(t=>{let c=Object.getOwnPropertyDescriptor(e,t);if(c.enumerable){r[t]=c;}});Object.getOwnPropertyNames(t).forEach(e=>{r[e]=Object.getOwnPropertyDescriptor(t,e);});Object.getOwnPropertySymbols(t).forEach(e=>{let c=Object.getOwnPropertyDescriptor(t,e);if(c.enumerable){r[e]=c;}});return r}var c=r(e,t);var o=r(Object.getPrototypeOf(e),Object.getPrototypeOf(t));var n=Object.create({},o);var O=Object.create(n,c);return O}

exports['default'] = assignEs6Class$1;
exports.assignEs6Class_min = assignEs6Class$2;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map
