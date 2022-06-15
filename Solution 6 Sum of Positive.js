// CodeWars Solutions

// 6. Sum of Positive: You get an array of numbers, return the sum of all of the positives ones.

// Parameters: Positive, Negative, Integers, Array
// Return: Return Sum of only Positive Integers
// Example: 2,4,6 can be summed, -1, -2, -3 cannot
// Pseudocode:
// 1. Declare an Array
// 2. Write Function to reduce Array only for Positive Integers
// 3. Use Ternary to only target Positive Integers
// 4. Return Sum only of Positive Integers via Reduce, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// 5. Call Function

const arrayOne = [2, 4, 6, -1, -2, -3]

function positiveSum(arr) {
   return arr.reduce ((a,b) => a + (b > 0 ? b : 0), 0)
}

positiveSum(arrayOne)
