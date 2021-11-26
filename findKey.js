const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return;
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


/*
const hi = findKey({
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
console.log(hi);




assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), "noma");

assertEqual(hi, "noma");

console.log(findKey());

const a = { bill: "chicken", till: "chicken", hill: "chicken", chill: "chicken", sill: "chicken" };
const a2 = findKey(a, x => x === "chicken");
assertEqual(a2, "bill");

const a3 = { bill: "chicken", till: "chicken", hill: "chicken", chill: "chicken", sill: "chicken" };
const a4 = findKey(a3, x => x === "beef");
assertEqual(a4, undefined);

*/