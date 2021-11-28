const eqObjects = function(object1, object2) {
  var equalCount = 0;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
  }
  for(let key in object1){
      for(let i in object2){
          if (object1[key] === object2[i]){
              equalCount++;
          }
      }
  }
  if (equalCount === Object.keys(object1).length){
      return true;
  }
};


const assertObjectsEqual = function(actual, expected) {
  if(eqObjects(actual, expected) === true){
      console.log(`✅✅✅ + Assertion Passed: The objects are equal`)
  } else {
    console.log(`🛑🛑🛑+ Assertion Failed: The objects are not equal`);
  }
};