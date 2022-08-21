// CodeWars Solutions

// 11. 7 Kyu - Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Parameters: String, No other Data Types
// Return: Return the Length of the Shortest Word/s
// Example: ('Hello Hi Wassup Hey') -> 2
// Pseudocode:
// 1. Create Function
// 2. Use Math.min method to locate the lowest value word within the String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// 3. Within Method above, use Spread Syntax Operator to allow Math.min to iterate over the String of Words, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// 4. Use Split method to split each Word, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 5. Use Map method to create a new Array after splitting the String of Words, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 6. Within Map, use Arrow Function to specify what to do with the new Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 7. Within Arrow Function, use Length property to return the Number of Letters within the shortest word in the String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
// 8. Call Function

function findShort(string) {
  return Math.min(...string.split(' ').map(string => string.length))
}

findShort('Hey Wassup Hello')
