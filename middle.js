function findMiddle(array){
  let arrlen = array.length;
  const midindex = Math.floor(arrlen / 2);
  if(arrlen % 2 == 1){
    return array[midindex];
  } else if(arrlen % 2 == 0){
    return [];
  }
}
let oddLenArray = [1, 3, 5, 7, 9]; //expect output: 5
let evenLenArray = [1, 3, 4, 10]; //expected output: []
console.log(findMiddle(oddLenArray));
console.log(findMiddle(evenLenArray));




/*const arr = [1,2,3];
let middle = arr[Math.floor(arr.length -1)/2];
console.log(middle);*/


// this code works but only when middleElement is console logged
// doesn't get the two middle elements of an even array
/*const middle = function(array){
  let middleElement = array[Math.floor(array.length/2 | 0)];
  return middleElement;
};
console.log(middle([1,5,3,4]));*/
  //middle([1,5,3,4]);



  