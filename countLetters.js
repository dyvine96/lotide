const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ + Assertion Passed: + ${actual} +  ===  + ${expected}`);
  } else {
    console.log(`🛑🛑🛑 + Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};

function countLetters(string) {
  let myObj= {};
  for (let s of string) {
      if ( myObj[string] ? myObj[string].count ++ : myObj[string] = { count : 1 } );
  }
  return myObj;
}

console.log(assertEqual(countLetters('LHL')));
