// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Sum of Two Lowest Positive Integers

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Incomplete Documentation.
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
//    
//    2. 
//    3. 
//    4. 
//    5. 
//    6. 
//    7. 
//    8. Call Function

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
