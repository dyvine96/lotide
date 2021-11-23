const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ + Assertion Passed: + ${actual} +  ===  + ${expected}`);
  } else {
    console.log(`🛑🛑🛑 + Assertion Failed:  + ${actual} +  !==  + ${expected}`);
  }
};

//let array = [];
//let head = array.find(element => [0]);
//console.log(head)

let head = function(param){
  return param[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Bye");