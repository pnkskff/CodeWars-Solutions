//    CodeWars Solutions

//    2. Solution 2 - 6 Kyu - Find the Odd Int
//    Given an array of integers, find the one that appears an odd number of times.
//    There will always be only one integer that appears an odd number of times.

//    Parameters: Integers, Array
//    Return: Return the Integer that appears an Odd Number of times.
//    Example: [1,2,2,3,3,4,4] -> 1
//    Pseudocode:
//    1. Create Function
//    2. Use Find Method to locate the lone Odd Integer within Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//    3. Within Find, create a Variable that will stand in for Odd Integer
//    4. Within Find, use Arrow Function to specify the operations needed to find Odd Integer, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    5. Within Arrow Function, use Filter Method to generate a new Array that will contain the Odd Integer, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    6. Within Filter, use Arrow Function again and Strict Equality Operator to specify logic that will identify Odd Integer, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
//    7. Afterwards, use Length Property to sum up the number of Elements within the Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//    8. After grabbing Sum of Elements within Array, use Modulus Operator to divide the Array by 2, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
//    9. Operation in Step 8 will result in the lone Number that shows up odd amount of times
//    10. Call Function

function findOdd(arr) {
  return arr.find( (oddItem) => arr.filter(nums => nums === oddItem).length % 2 )
}

findOdd([0,0,1,2,2,3,3])
