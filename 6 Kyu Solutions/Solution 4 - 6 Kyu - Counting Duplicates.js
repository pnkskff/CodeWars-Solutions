//    CodeWars Solutions

//    4. Solution 4 - 6 Kyu - Counting Duplicates
//    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
//    The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//    Parameters: Uppercase and Lowercase Alphabet, Numbers, String
//    Return: Return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
//    Example:
//    "abcde" -> 0 
//    No characters repeats more than once
//    "aabbcde" -> 2 
//    'a' and 'b' repeats more than once
//    "aA11" -> 2 
//    'a' and '1' repeats more than once

//    Pseudocode:
//    1. Create Function
//    2. Use toLowerCase method to turn all characters into lower case, will make it easier for the Function to iterate through String, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//    3. Use Split method to split the string into individual characters, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//    4. Use Filter method to create a copy of the array of characters, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    5. Within Filter, use an Arrow function to further specify how the Function should treat the newly created copy of the Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    6. Within Arrow function use indexOf method, Strict Inequality method, Logical AND operator, lastIndexOf method, Strict Equality method, and length method to create the logic:
//       Iterate through Array to find instances of character duplication
//       See below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//       a. indexOf method to iterate through array and find first instance of the characters within the string.
//       b. Strict Inequality method to compare results of indexOf and lastIndexOf, to find the characters that do repeat within the string.
//       c. Logical AND operator to ensure that both first instance and last instance of a character is grabbed in the Return.
//       d. lastIndexOf method to iterate through the array and find the last instance of a character within the string.
//       e. Strict Equality method to then instruct the function to compare the results of lastIndexOf with that of indexOf.
//       f. length method to ensure that the function iterates through to the end of the string regardless of number of characters.
//    7. Call Function

// Solution 1
// * Submitting to CodeWars ends in Error, need to troubleshoot.

function duplicateCount(string) {
    return text.toLowerCase().split('').filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;}).length;
  }
  
  // O characters repeat
  duplicateCount('Honda')
  
  // 1 character repeats -> A
  duplicateCount('Mazda')
  
  // 2 characters repear -> T and O
  duplicateCount('Toyota')
  
  // Solution 2
  // * Submitting to CodeWars successful.
  
  function duplicateCount(text){
    return text
      .toLowerCase()
      .split('')
      .filter((val, i, arr) => {
          return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;    
      }).length;
  }
  
  // O characters repeat
  duplicateCount('Honda')
  
  // 1 character repeats -> A
  duplicateCount('Mazda')
  
  // 2 characters repear -> T and O
  duplicateCount('Toyota')