// CodeWars Solutions

// 10. Find Smallest Integer in Array - Given an array of integers your solution should find the smallest integer.

// Parameters: Array, Integers, Positive or Negative
// Return: Return Lowest Positive or Negative Integer from an Array
// Example: If Array = [1,2,3], Lowest Integer will be 1
// Pseudocode:
// 1. Create Array of Integers
// 2. Create Function
// 3. Use Math.min to find smallest Integer in Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// 4. Use Spread Operator (...) to go through Array when called, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// 5. Call Function

const arrayOne = [88,1,4]

function findSmallestInt () {
  return Math.min (...arrayOne)
}

findSmallestInt (arrayOne)
