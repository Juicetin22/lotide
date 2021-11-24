const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(sentence) {
  let result = {}; 
  for (let letter of sentence) {
    if (letter !== " ") {
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else {
        result[letter] += 1;
      }
    }
  }
  return result;
}

console.log(countLetters("LHLjiojoijJho  "));
console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("LHLjiojoijJho  "), { L: 2, H: 1, j: 3, i: 2, o: 3, J: 1, h: 1 });
console.log(countLetters("lighthouse in the house"));