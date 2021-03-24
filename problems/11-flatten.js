/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

we need to iterate over the array
for each recursion check to make sure the element is equal to an array
if its an array recursively iterate through that array
return all elements to one array
***********************************************************************/

// your code here

let flatten = array => {
  let newArray = [];

  if (array.length === 0) {
    return [];
  }

  if  (Array.isArray(array[0])) {
    newArray.push(...flatten(array[0]));
  } else {
    newArray.push(array[0]);
  }

  return newArray.concat(flatten(array.slice(1)));
}


console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
