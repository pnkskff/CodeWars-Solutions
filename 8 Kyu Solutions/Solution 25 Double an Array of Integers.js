// CodeWars Solutions

// 25. Return New Array with Values Doubled
// Given an array of integers, return a new array with each value doubled.

// Parameters: Integer, Array
// Return: Return Values as Doubled within a new Array
// Example: [1,2,3] -> [2,4,6]
// Pseudocode:
// 1. Create Function
// 2. Use Map to create a new Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 3. Use * Operator to double Integers within old Array, which then turns to a new Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
// 4. Call Function

function maps(x) {
  return x.map(x => x*2)
}

maps([1,2,3])
