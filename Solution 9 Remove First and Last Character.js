// CodeWars Solutions

// 9. Remove First and Last Character - Your goal is to create a function that removes the first and last characters of a string.

// Parameters: 1 String, with more than 2 characters
// Return: Return String without First and Last Character
// Example: If String = 'Hello', Function will Shift and Pop 'H' and 'o', resulting in new String of 'ell'
// Pseudocode:
// 1. Create Function
// 2. Use Slice method to Shift 1st Character and Pop Last Character, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// 3. Call Function

function removeChar(str){
  return str.slice (1,-1)
}

removeChar('Hello')
