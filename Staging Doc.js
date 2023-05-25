// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - Counting Duplicates

//    2. STATUS:
//       a. Not submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File created on Desktop.

//    3. SOLUTION:

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

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - Duplicate Encoder

//    2. STATUS:
//       a. Not submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    5. Solution 5 - 6 Kyu - Duplicate Encoder 
//    The goal of this exercise is to convert a string to a new string where each character in the new string is "(".
//    If that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
//    Ignore capitalization when determining if a character is a duplicate.

//    Parameters: Alphabet String, Special Characters String
//    Return: ( if character does not repeat, ) if character/s repeat
//    Example: 
//    "din" -> "((("
//    All characters unique, resulting in only ( to display 3 times.
//    "recede" -> "()()()"
//    1 character repeats 3 times, results in 3 instances of ).
//    "Success" -> ")())())"
//    2 characters repeat multiple times.
//    "(( @" -> "))((" 
//    1 character repeat twice.

//    Pseudocode:
//    1. Create Function
//    
//    2. 
//    
//    3. 
//    
//    4. 
//    
//    5. 
//    
//    6. 
//    
//    7. 
//    
//    8. Call Function

//    

// ------------------------------

// II. FURTHER INFO:

//     1. CodeWars Solutions Repo URL: 
//        https://github.com/pnkskff/CodeWars-Solutions

//     2. This Doc is for Solutions in the Staging process.
//        Unfinished Solutions/Documentation will be put here, until Author/s have time to properly complete.

//     3. Staging Doc last updated on: MAY 2023

//     4. Author: pnkskff
//                https://github.com/pnkskff
//                https://drincapdev.netlify.app/
//                https://drincapapps.netlify.app/
