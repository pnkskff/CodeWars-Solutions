//    CodeWars Solutions

//    3. Solution 3 - 6 Kyu - Array.diff 
//    Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//    It should remove all values from list a, which are present in list b keeping their order.

//    Parameters: Array, Number Only
//    Return: Return new Array from 2 Arrays, without the Numbers that are present in each Array
//    Example: ([1,2,3], [1,2]) -> [3]
//             ([1,2,3], [2,3,4]) -> [4]
//    NOTE: Pseudocode below is applicable to Solution 2 only.
//    Pseudocode:
//    1. Create Function
//    2. Use Filter Method to iterate through both Arrays, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    3. Use Arrow Function to specify conditions for returning a new Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    4. Within Arrow Function, use Not Operator and Include Method to specify that Return should only include value if it is present within Array A, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//    5. Call Function

// Solution 1
// Did not submit to CodeWars

function arrayDiff(a, b) {
    // Filter entire a array, only keep the value if b does not contain that value
    return a.filter(val => !b.includes(val));
}

// Solution 2
// Submitted to CodeWars
const arrayDiff = (a, b) => a.filter(item => !b.includes(item))
console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 2, 2, 3], [2]))

// Solution 3
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

//Solution 4
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}