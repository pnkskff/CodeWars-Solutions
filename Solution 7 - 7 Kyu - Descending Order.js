// CodeWars Solutions

// 7. 7 Kyu - Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Parameters: Positive, Integer
// Return: Order Integers with Highest Value first
// Example: (1, 2, 3, 4, 5) -> (5, 4, 3, 2, 1)
// Pseudocode:
// 1. Create Function
// 2. Use Number toString() method, to return Integers into a String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// 3. Use Split method to divide the Integers into each Integer, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 4. Use Sort method to arrange the Integers into Descending Order, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// 5. Use Join method to concatenate the new order of Integers back into a String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// 6. Call Function

function descendingOrder(num){
  return Number(num.toString().split('').sort( (a,b) => b - a ).join(''))
}

descendingOrder('2769891008')
