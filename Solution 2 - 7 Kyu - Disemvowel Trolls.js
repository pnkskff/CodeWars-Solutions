// CodeWars Solutions

// 2. 7 Kyu - Disemvowel Trolls
// Your task is to write a function that takes a string and return a new string with all vowels removed.

// Parameters: String, Array, Y is not a Vowel
// Return: Return String from a given String with no Vowels
// Example: 'I hate you' -> 'ht y'
// Pseudocode:
// 1. Create Function
// 2. Set const of vowels
// 3. Use Split method to split str into individual letters, please see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 4. Use Filter method to filter out vowels from str, please see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// 5. Use indexOf to iterate through string, please see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// 6. Use toLowerCase method to turn whole string to Lower Case, please see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// 7. Use Join method to put individual letters back to a String with no vowels, please see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// 8. Call Function

function disemvowel(str) {
  const vowels = ['a','e','i','o','u']
  return str.split('').filter(disemvowel => vowels.indexOf(disemvowel.toLowerCase()) == -1).join('')
}

disemvowel ('This website is for losers LOL!')
