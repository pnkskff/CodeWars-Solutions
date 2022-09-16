// CodeWars Solutions

// 3. 7 Kyu - Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// Parameters: Integers, Array
// Return: Square every digit from an Array, and Concatenate
// Example: 99 -> 8181
// Pseudocode:
// 1. Create Function
// 2. Use Number to convert result of Function into a Number, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// 3. Use String to temporarily convert num to str, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// 4. Use Map to create an Array out of num, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 5. Use ** Operator to square digits in the Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
// 6. Use Join method to concatenate results of Map, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// 7. Call Function

const squareDigits = (num) =>
Number([...String(num)].map((num) => Number(num) ** 2).join(''))

squareDigits(9119)
