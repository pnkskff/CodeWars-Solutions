// CodeWars Solutions

// 4. 7 Kyu - Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Parameters: String of Integers, Positive, Negative
// Return: Return Highest and Lowest Integer from String, in a String separated by Space, with Highest Integer first.
// Example: ('1 2 3 4 5') -> ('5 1')
// Pseudocode:
// 1. Create Function
// 2. Use Split method to split String into Integers, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 3. Use Math.Max to return Highest Integer, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// 4. Use Math.Min to return Lowest Integer, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// 5. Use Spread Syntax to iterate over String of Integers, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// 6. Call Function

function highAndLow(numbers) {
  numbers = numbers.split(' ')
  
  return Math.max(...numbers) +' '+ Math.min(...numbers)
}

highAndLow('88 89 69 80 77')
