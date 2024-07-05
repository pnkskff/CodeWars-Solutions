// Staging Doc

// I. KATA SOLUTIONS:

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
//    The goal of this exercise is to convert a string to a new String where each character in the new String is '(' if that character appears only once in the original string.
//    Or ')' if that character appears more than once in the original string. 
//    Ignore capitalization when determining if a character is a duplicate.

//    Parameters: String, Alphabet, Special Characters
//    Return: '(' if character does not repeat
//            ')' if character/s repeat
//    Example: 
//    'din' -> '((('
//    All characters unique, resulting in only ( to display 3 times.
//    'recede' -> '()()()'
//    1 character repeats 3 times, results in 3 instances of ).
//    'Success' -> ')())())'
//    2 characters repeat multiple times, results in 2 instances each of )) )).
//    '(( @' -> '))((' 
//    1 character repeat twice, results in 1 instance of )).

//    Pseudocode:
//    1. Create Function
//    2. Define Return for the input variable, this case is 'word'.
//    3. Use toLowerCase method to turn all characters to Lower Case, see below:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//    4. Use Split method to then split the string into its individual characters, see below:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//    5. Use Map method to return new Array, see below:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//    6. Within Map, write a function that will iterate through the Array and return the first and next instance/s of a recurring character, see below:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
//    a. Use Equality Operator to specify that the indexOf and lastIndexOf should iterate through Array and query for multiple instances of duplication, see below:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
//    7. Use Join method to put the characters back together into a String, see below:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    8. Call Function

//    Primary Solution
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

console.log(duplicateEncode('Success'))
// Console Log will show: '()(()(('

console.log(duplicateEncode('Drive'))
// Console Log will show: '()()('

console.log(duplicateEncode('Winning'))
// Console Log will show: '()(()()'

//     
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - INSERT TITLE

//    2. STATUS:
//       a. Not submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    Number. Solution Number - Kata Kyu - Kata Name 
//    Kata Story
//
//
//
//
//
//
//
//
//
//
//

//    Parameters: 
//    Return: 
//    Example: 
//    Pseudocode:
//    1.    
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
//    8.
//
//    9.

//    Primary   
//
//
//
//
//
//
//

//

// ------------------------------

// I. INTERVIEW CODING QUESTIONS (2023):

//  1. Interview Question from Urbancoolab:
//  Reverse a String without using reverse(), without built in functions.
//  Source 1: 
//  https://stackoverflow.com/questions/45691069/reverse-a-string-in-javascript-without-using-any-inbuilt-function#:~:text=function%20reverse1(str)%7B%20var,abcdef%22%3B%20reverse1(str)%3B

//  Solution 1

function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1('javascript'))
// Console Log will show: 'tpircsavaj'

console.log(reverse1('hello'))
// Console Log will show: 'olleh'

console.log(reverse1('world'))
// Console Log will show: 'dlrow'

// ------------------------------

// II. FURTHER INFO:

//     1. CodeWars Solutions Repo URL: 
//        https://github.com/pnkskff/CodeWars-Solutions

//     2. This Doc is for Solutions in the Staging process.
//        Incomplete Solutions/Documentation will be documented here until Author/s have time to properly complete.

//     3. Staging Doc last updated on: JULY 2024

//     4. Author: pnkskff
//                https://github.com/pnkskff
//                https://drincapdev.netlify.app/
//                https://drincapapps.netlify.app/
