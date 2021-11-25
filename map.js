const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

console.log(results1);

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
const results2 = map(aa, num => num * 2);
assertArraysEqual(results2, [2, 4, 6]);

const cc = [1, "2", 3];
const results3 = map(cc, add => add + "hello");
assertArraysEqual(results3, ["1hello", "2hello", "3hello"]);

const ee = [1, 2, 3, 4];
const results4 = map(ee, old => old = "30");
assertArraysEqual(results4, ["30", "30", "30", "30"]);
