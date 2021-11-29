const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('if one array is equal to another', () => {

  it('returns true if two arrays are identical', () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it('return false if arrays are reverse of each other', () => {
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('return true if arrays are identical with strings as values', () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it('return false if only one value is different', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});