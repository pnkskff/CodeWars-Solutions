// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Sum of Two Lowest Positive Integers

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Not pushed to GitHub.

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
