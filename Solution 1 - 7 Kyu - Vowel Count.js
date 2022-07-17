// CodeWars Solutions

// 1. 7 Kyu - Vowel Count
// Return the number (count) of vowels in the given string.

// Parameters: String, Array
// Return: Return Vowels from a given string
// Example: [a,e,i,b,c] -> 3 Vowels
// Pseudocode:
// 1. Create Function
// 2. Set let variable to 0, to start count
// 3. Set const varuiable to Vowels
// 4. Use for...of Loop to iterate through String Array, please see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// 5. Call Function

function getCount(str) {
  let vowelsCount = 0
  const vowels = ['a','e','i','o','u']
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++
    }
  }

  return vowelsCount
}

getCount ('Hello, my name is!')
