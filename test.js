// import {assignEs6Class} from "./dist/bundle.js";
// import {assignEs6Class_min} from './dist/bundle.js';
var assignEs6Class = require('./dist/bundle.js');
class Class1 {
  constructor() {
    this._prop1 = 1;
    this._prop2 = 2;
  }

  get prop1(){
    return this._prop1
  }
}
class Class2 {
  constructor() {
    this._prop2 = 'overwrittern';
  }

  get prop2(){
    return this._prop2
  }
}
var class1 = new Class1();
var class2 = new Class2();

var merged = assignEs6Class(class1,class2);
console.log(assignEs6Class, merged.prop1, merged.prop2);