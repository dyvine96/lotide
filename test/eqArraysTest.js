const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


let finalResult = assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(finalResult);
