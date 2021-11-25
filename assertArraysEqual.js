let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    //console.log("It's not possible for these arrays to be equal");
    //results = false;
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      /*console.log(`The length of both arrays are equal, however the value of both arrays at index ${i} are ${array1[i]} and ${array2[i]}. Hence the arrays are not equal. `)*/
      //results = false;
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ + Assertion Passed: The arrays are equal`);
  } else {
    console.log(`🛑🛑🛑+ Assertion Failed: The arrays are not equal`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);