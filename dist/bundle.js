(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.assignEs6Class = factory());
}(this, (function () { 'use strict';

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

return assignEs6Class$1;

})));
//# sourceMappingURL=bundle.js.map
