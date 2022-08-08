// CodeWars Solutions

// 6. 7 Kyu - You a Square!
// Given an integral number, determine if it's a square number

// Parameters: Integers, Positive, Negative
// Return: Return True if Integer is a Square Number, False if Integer is not a Square Number
// Example: -1 = False, 4 = True
// Pseudocode:
// 1. Create Function
// 2. Use Math.sqrt function to return the square root of the Integer, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// 3. At the same time, use Modulus Operator to find out if the Integer is divisible by 1 or not, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
// 4. Call Function

function isSquare(num) {
  return Math.sqrt(num) % 1 === 0
}

isSquare(69)
