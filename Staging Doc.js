// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Sum of Two Lowest Positive Integers

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    15. Solution 15 - 7 Kyu - Sum of Two Lowest Positive Integers
//    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
//    No floats or non-positive integers will be passed.

//    Parameters: Integers, Positive, Array, No Floats, No Negative
//    Return: Sum of 2 lowest positive integers from an array of at least 4 positive integers
//    Example: [1,2,3,4,5] -> 1+2 -> Return of 3
//    Pseudocode:
//    1. Create Function
//    2. Declare Input as an Array, so that Array Methods can be used, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//    3. Within declaration, use Numbers property to specify that Input will be Numbers, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//    4. Use Sort method to then sort Input, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//    5. Within Sort, specify Instructions on how Function should iterate through Array, use Arrow Function to specify sort in Descending Order, see below 
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    6. Declare a Return, adding Index 0 to Index 1 of Array variable, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//    7. Call Function

function sumTwoSmallestNumbers(numbers) {  
    let arr = numbers.sort( (a, b) => a - b)
    
    return arr[0] + arr[1]
}

sumTwoSmallestNumbers([27,69,89,100,3005])  

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Beginner Series #3 Sum of Numbers

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
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
//    2. 
//    3. 
//    4. 
//    5. 
//    6. 
//    7. Call Function

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
