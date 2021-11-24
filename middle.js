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

let assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

let middle = function(array) {
  let center = [];
  if (array.length <= 2) {
    return center;
  }
  if (array.length % 2 !== 0) {
    center.push(array[(array.length - 1) / 2]);
  } else if (array.length % 2 === 0) {
    center.push(array[((array.length) / 2) - 1], array[array.length / 2]);
  }
  return center;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

console.log(assertArraysEqual(middle([1]), [1, 2, 3])) // => []
console.log(assertArraysEqual(middle([1, 2]), [1, 2, 3])) // => []

console.log(assertArraysEqual(middle([1, 2, 3]), [2])) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])) // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6])) // => [3, 4]
