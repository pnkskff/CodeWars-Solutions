// CodeWars Solutions

// 9. 7 Kyu - Jaden Casing String
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Parameters: String
// Return: Return the String with 1st Letter capitalized for every word
// Example: 'How can mirrors be real if our eyes aren't real' -> 'How Can Mirrors Be Real If Our Eyes Aren't Real'
// Pseudocode:
// 1. Create Function
// 2. Use Split method to split the String into each word, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 3. Use Map method to return a new Array from the original String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 4. Use Arrow Function within Map to specify the exact steps needed to complete the task, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 5. Within Arrow Function, use toUpperCase method after targetting the 0 index of each Object within the Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// 6. Concatenate the 0 index with the 1 index of each Object, see below
// htps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// 7. Use Join method after to turn the Objects back into a String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// 8. Call Function

// NOTE: Submitting this Solution to CodeWars results in a Fail, not sure why

function toJadenCase(string) {
  return string.split(' ').map(firstLetter => firstLetter[0].toUpperCase() + firstLetter.slice(1)).join(' ')
}

toJadenCase('I am the Dope Man ya boi wear corduroy')

// CodeWars Solution that works:

String.prototype.toJadenCase = function () {
  return this.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}
