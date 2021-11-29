const tail = require('../tail');
const assert = require('chai').assert;

describe('return array minus the first value, confirm by checking values instead', () => {

  it('pass using an array of numbers', () => {
    assert.deepEqual(tail([5, 6, 7, 8, 9]), [6, 7, 8, 9]);
  });

  it('pass when using an array of strings', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});