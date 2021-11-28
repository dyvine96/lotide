const letterPositions = function(str) {
  const results = {};
  function getIndices(char, str) {
    const currentCharArray = [];
    let i = -1;
    while ((i = str.indexOf(char, i + 1)) >= 0) { 
      currentCharArray.push(i);
    }
    return currentCharArray;
  } 
  for (const char of str) {
    results[char] = getIndices(char, str);
  }
  return results;
};

console.log(letterPositions("LHL"));