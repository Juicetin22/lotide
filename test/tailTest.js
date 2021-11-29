const tail = require('../tail');
const assertEqual = require('../assertEqual');

console.log(tail([5, 6, 7, 8, 9]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(tail(words)[0], "Lighthouse");