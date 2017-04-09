'use strict';
module.exports = function assignES6Class(inst1, inst2, pattern) {

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