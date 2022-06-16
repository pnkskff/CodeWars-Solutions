// CodeWars Solutions

// 13. Square Sum - Complete the square sum function so that it squares each number passed into it and then sums the results together.

// Parameters: Array, Integers, Positive
// Return: Each Integer will be Squared, then Total is Summed up
// Example: [1,2,3] will be calculated as 1 ^ 2, 2 ^ 2, 3 ^ 2, then sum total
// Pseudocode:
// 1. Create Function
// 2. Use Reduce method, see below:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// 3. Call Function using Array of Nums

function squareSum(num) {
  return num.reduce ( (acc,c) => acc += c ** 2, 0 )
}

squareSum ([1,2,3])
