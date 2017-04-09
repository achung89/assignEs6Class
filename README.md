# assignEs6Class

This mini-library is meant to mimick the behavior of Object.assign for es6 classes. With Object.assign you can shallow merge object, but not their prototypes or attribute accessors. assignEs6Class will allow you to shallow merge the prototypes and properties of two instances of different classes.

```
class Class1 {
  constructor() { 
    this._prop1 = 'property one';
  }
  get prop1(){
    return this._prop1;
  }
}
class Class2 {
  constructor() {
    this._prop1 = 'this prop will be replaced at assign';
    this._prop2 = 'property two';
  }
  get prop2() {
    return this._prop2;
  }
}

var c1 = new Class1();
var c2 = new Class2();

// first parameter is target class
var merged = assignEs6Class(c2,c1);

console.log(merged) // {_prop1:'prop1', _prop2:'prop2'}
console.log(merged.prop1,merged.prop2) //  "property one"  "property two"  
```

