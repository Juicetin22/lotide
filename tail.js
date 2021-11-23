const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(array) {
  let x = [];
  for (let i = 1; i < array.length; i++) {
    x.push(array[i]);
  }
  return x;
};

console.log(tail([5, 6, 7, 8, 9]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);