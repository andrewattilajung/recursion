/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

var newArray = []
write a function called range that takes in a start and an end
if statement (if end is less than start )
return empty array
if statement (if start < end)
return recursive iteration

***********************************************************************/


// your code here
function range(start, end) {
  let newArray = [];

  if (end < start) {
    return [];
  }
  if (start < end) {
    newArray.push(start);
  }
//  range(start + 1, end);
 return newArray.concat(range(start + 1, end));
}


console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
