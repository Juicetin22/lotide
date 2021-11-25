const eqObjects = function(object1, object2) {
  
  let keyOfObject1 = Object.keys(object1);
  let keyOfObject2 = Object.keys(object2);
  
  if (keyOfObject1.length === keyOfObject2.length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if ((eqArrays(object1[key], object2[key])) === false) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const ef = { c: "1", d: ["2", "3", "4"], e: "23", f: ["22", "11"] };
const ef2 = { d: ["2", "3", "4"], c: "1", f: ["22", "11"], e: "23" };
assertObjectsEqual(ef, ef2); // => true

const fq = { c: "1", d: ["2", 3, "4"], e: "3" };
const fq2 = { d: ["2", "3", "4"], c: "1", e: "3" };
assertObjectsEqual(fq, fq2); // => true