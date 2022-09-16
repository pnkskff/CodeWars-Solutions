// CodeWars Solutions

// 1. Complete the solution so that it reverses the string passed into it.

// Parameters: Strings
// Return: Return as Reversed
// Example: 'world' => 'dlrow'
// Pseudocode:
// 1. Write Function
// 2. Insert String as Var
// 3. Split String
// 4. Reverse String
// 5. Join String
// 6. Call Function

function solution(str) {
  return str.split ('').reverse().join ('')
}

solution('world')
