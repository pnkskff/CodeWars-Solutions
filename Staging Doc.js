// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 

//    2. STATUS:
//       a. Not submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Two to One

//    2. STATUS:
//       a. Not submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    20. Solution 20 - 7 Kyu - Two to One 
//    Take 2 strings s1 and s2 including only letters from a to z. 
//    Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//    Parameters: String, Array
//    Return: Return Sorted String, longest possible, containing unique letters, only displaying once
//    Example: a = 'xyaabbbccccdefww'
//             b = 'xxxxyyyyabklmopq'
//             longest(a, b) -> 'abcdefklmopqwxy'
//    Pseudocode:
//    1. Create Function
//    2. Use Array.from() method to create a new Array from an iterable Object, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//    3. Within Array.from(), use new Operator and Set Object to create a new collection of values from pre-existing Objects, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//    4. Within Set Object, use Addition Operator to concatenate results from both Objects into 1 Object, see below 
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
//    5. Use Sort Method to then arrange the result of Set into Ascending Order, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//    6. Use Join Method to join the Letters back together into 1 String, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    7. Call Function

function longestStr(a, b) {
    return Array.from( new Set (a + b) ).sort().join('')
}

longestStr('aaxxxxojnbmvcmdoe','aprprfmdlfgjfhdbr')

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
