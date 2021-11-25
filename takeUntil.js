const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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


const a = [1, 2, 3, 4, 5, 6];
const test1 = takeUntil(a, x => x > 5);
assertArraysEqual(test1, [1, 2, 3, 4, 5]);

const b = [20, 80, 60, 70, 30, 81, 20, 30, 22];
const test2 = takeUntil(b, x => x <= 10 || x > 80);
assertArraysEqual(test2, [20, 80, 60, 70, 30]);

const c = ["George", "George", "George", "George", "George", "Jeorge", "George"];
const test3 = takeUntil(c, function(x) {
  return x !== "George";
});
assertArraysEqual(test3, ["George", "George", "George", "George", "George"]);