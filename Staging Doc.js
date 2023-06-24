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
//    The goal of this exercise is to convert a string to a new string where each character in the new string is "(".
//    If that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
//    Ignore capitalization when determining if a character is a duplicate.

//    Parameters: Alphabet String, Special Characters String
//    Return: ( if character does not repeat 
//            ) if character/s repeat
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

// I. INTERVIEW CODING QUESTIONS

//  1. Interview Question from Urbancoolab:
//  Reverse a String without using reverse(), without built in functions.
//  Source: 
//  https://stackoverflow.com/questions/45691069/reverse-a-string-in-javascript-without-using-any-inbuilt-function#:~:text=function%20reverse1(str)%7B%20var,abcdef%22%3B%20reverse1(str)%3B

//  Solution 1

function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("javascript"))
// Log will show 'tpircsavaj'

console.log(reverse1("hello"))
// Log will show 'olleh'

console.log(reverse1("world"))
// Log will show 'dlrow'

// ------------------------------

// II. FURTHER INFO:

//     1. CodeWars Solutions Repo URL: 
//        https://github.com/pnkskff/CodeWars-Solutions

//     2. This Doc is for Solutions in the Staging process.
//        Incomplete Solutions/Documentation will be documented here until Author/s have time to properly complete.

//     3. Staging Doc last updated on: JUNE 2023

//     4. Author: pnkskff
//                https://github.com/pnkskff
//                https://drincapdev.netlify.app/
//                https://drincapapps.netlify.app/
