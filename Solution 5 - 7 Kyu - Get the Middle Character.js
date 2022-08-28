// CodeWars Solutions

// 5. 7 Kyu - Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// Parameters: String
// Return: If Length is Odd, return Middle Character, and if Length is Even, return Middle 2 Characters
// Example: ('test') -> ('es'), ('testing') -> ('t')
// Pseudocode:
// 1. Create Function
// 2. Create Variable called middle, containing the calculation needed to grab respective Middle Character
// 3. Use Math.floor to let Script know the amount of letters in the Character, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// 4. Append to Math.floor, the calculation itself: character.length/2, which allows middle to find out if a Word is Even or Odd
// 5. Write if/else conditional statement to evaluate whether a Word is Even or Odd, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// 6. Within if/else statment, write the expected result if a Word is Even or Odd, via calculation if character is divisible by 2 or not
// 7. Within expected result of Even, concatenate the middle Letter with the Letter before it
// 8. Call Function

function getMiddle(character) {
  let middle = Math.floor(character.length/2)
  
  if (character.length % 2 === 0)
    return character[middle-1] + character[middle]
  else {
    return character[middle]
  }
}

getMiddle('birthday')
