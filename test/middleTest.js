const assert = require('chai').assert;
const middle = require('../middle');

describe('returns the middle value in an array, two if array is even', () => {

  it('return empty array if given array with one or two values', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns the middle value in a new array for odd numbered arrays', () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });

  it('return the two middle values in a new array for even numbered arrays', () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });
});


/*const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


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
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6])) // => [3, 4]*/

