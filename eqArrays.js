/* Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. */

let eqArrays = function(array1, array2) {
  let results; 
  if (array1.length != array2.length) {
   //console.log("It's not possible for these arrays to be equal");
   results = false;
   return results;
  } 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
     /*console.log(`The length of both arrays are equal, however the value of both arrays at index ${i} are ${array1[i]} and ${array2[i]}. Hence the arrays are not equal. `)*/
     results = false;
     return results;
    } else {
      /*console.log(`The length of the arrays are equal up to the index point ${i}, where the values of both arrays are ${array1[i]}`);*/
      results = true;
    }
  }
  return results;
};

module.exports = eqArrays



