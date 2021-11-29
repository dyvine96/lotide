const assertEqual = require('./assertEqual');
// Removed the assertEqual function from this file as it will now be fetched via require ^
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ + Assertion Passed: + ${actual} +  ===  + ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 + Assertion Failed:  + ${actual} +  !==  + ${expected}`);
//   }
// };


let head = function(param){
  return param[0];
};
//console.log(head([5,6,7]));

