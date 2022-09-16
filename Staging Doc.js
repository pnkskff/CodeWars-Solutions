// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Beginner Series #3 Sum of Numbers

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    16. Solution 16 - 7 Kyu - Beginner Series #3 Sum of Numbers
//    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
//    If the two numbers are equal return a or b.

//    Parameters: Integers, Positive, Negative
//    Return: Return Sum of all Integers between, and including A and B
//            If two numbers are equal, return A or B
//    Example: (1,0) -> (1 + 0) -> (1)
//             (1,1) -> (1 + 1) -> (1)
//             (1,2) -> (1 + 2) -> (3)
//    Pseudocode:
//    1. Create Function
//    2. Write a Conditional using Strict Equalit6y Operator, to declare that if A is same as B then Return A, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
//    3. Declare Variable, that results in Adding A to B, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
//    4. Call Function

// NOTE: Submitting this Solution to CodeWars results in a Fail, not sure why

function getSum (a, b) {
    
    if (a === b)
        return (a)
    
    let sum = a + b
        return (sum)
}

getSum(21,21)
getSum(69,44)
getSum(69,89)
getSum(-8,-8)
getSum(-21,-5,0,16)

// CodeWars Solution that works:

function getSum(a,b) {

    if (a == b) {
      return a
    }
    else if (a > b) {
      return a + getSum( a - 1, b)
    } 
    else {
      return a + getSum( a + 1, b)
    }
    
  }

// ------------------------------

//    CodeWars Solutions

//    Number. Solution Number - Kata Kyu - Kata Name 
//    Kata Story

//    Parameters: 
//    Return: 
//    Example: 
//    Pseudocode:
//    1. Create Function
//    Insert MDN/3rd Party source url within JS file for documentation on: Definitions, Properties, Methods, etc.
//    2. 
//    3. 
//    4. 
//    5. 
//    6. 
//    7. 
//    8. Call Function

//    Insert working Solution below, regardless if it passes CodeWars Tests or not:
//    INSERT CODE

//    If applicable, insert Troubleshooting Steps below, if User is able to fix Code to get a Pass in CodeWars:
//    INSERT DETAILS OF SOLUTIONS

//    If applicable, insert ALternate Solution or Solution that works with CodeWars below:
//    INSERT CODE

// ------------------------------

// II. FURTHER INFO:

//     1. CodeWars Solutions Repo URL: 
//        https://github.com/pnkskff/CodeWars-Solutions

//     2. This Doc is for Solutions in the Staging process.
//        Unfinished Solutions/Documentation will be put here, until Author has time to properly complete.

//     3. Staging Doc last updated on: SEPTEMBER 2022

//     4. Author: pnkskff
//                https://github.com/pnkskff
//                https://drincapdev.netlify.app/
//                https://drincapapps.netlify.app/
