const eqObjects = function(object1, object2) {
  var equalCount = 0;
  //Object.keys() puts all keys of an object inside an array
  // continue logic if both objects have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
  }
  for(let key in object1){
      for(let i in object2){ //for key in obj2 aka i = key
          //if respective keys have same value add 1 to equalcount
          if (object1[key] === object2[i]){
              equalCount++;
          }
      }
  }
  //if there are as many equal keys as there are keys total return true (if key counts are different, function already returns false from line 33's if statement)
  if (equalCount === Object.keys(object1).length){
      return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));