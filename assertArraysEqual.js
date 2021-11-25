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

let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const aa = [1, 2, 3];
const bb = [1, 2, 3];
assertArraysEqual(aa, bb);

const cc = [1, "2", 3];
const dd = [1, 2, 3];
assertArraysEqual(cc, dd);

const ee = [1, 2, 3, 4];
const ff = [1, 2, 3];
assertArraysEqual(ee, ff);

const gg = [1, "hi", 2, "no"];
const hh = [2, "hi", 1, "no"];
assertArraysEqual(gg, hh);