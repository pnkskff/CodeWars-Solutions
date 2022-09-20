// CodeWars Solutions

// 21. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Parameters: Integers, Positive, Array, Reverse Order
// Return: Return a group of Integers within an Array in Reverse Order
// Example: 123 --> [3,2,1]
// Pseudocode:
// 1. Create Function
// 2. Create a Variable to identify num as a String
// 3. Use str.split to to turn num into an Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 4. Use map and Number to return a new Array in Number, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// 5. Use reverse to put Array in reverse order, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// 6. Call Function

function digitize(num) {
  
  let str = String(num);
  
  return str.split('').map(Number).reverse()

}

digitize(129583674)
