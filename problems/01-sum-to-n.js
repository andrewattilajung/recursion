/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

//! write a function named sumToN . parameter of Number/

//! return sum of all number from 0 to that num .
//! create a variable starting at 0. 
//! if statement for base case/ the base case is keeping the function from being an infinet loop 
    //! if(num === 0) return null. 
//! write a return function. return number . + (variable + 1)

let sumToN = number => {
  if(number <= 0){
    return null;
  }
  if(number === 1){
    return 1;
  }
  return number + sumToN(number - 1)
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
