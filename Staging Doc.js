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
//       a. 7 Kyu - Is this a Triangle?

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    19. Solution 19 - 7 Kyu - Is this a Triangle? 
//    Implement a function that accepts 3 integer values a, b, c. 
//    The function should return true if a triangle can be built with the sides of given length and false in any other case.
//    (In this case, all triangles must have surface greater than 0 to be accepted).

//    Parameters: Integers
//    Return: Return True if Integers can result in a Triangle, False if not
//    Example: (2,2,2) -> True
//             (1,1,2) -> False
//    Pseudocode:
//    1. Create Function
//    2. Create a Variable to contain the Calculation to be done to execute the True/False Statement
//    3. Use Arithmetic Operators and Greater Than Operator to calculate if Integers provided will result in a Triangle, see below
//    https://www.calculator.net/triangle-calculator.html
//    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#arithmetic_operator6s
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than
//    4. Use Logical AND Operator within the Calculation above, to specify the exclusive Condition that will result in True, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
//    5. Call Function

function isTriangle(a,b,c) {
    
    let lengths = a + b > c && a + c > b && c + b > a
    
    return lengths

}

// True
isTriangle(2,2,2)

// False
isTriangle(1,1,2)

// False
isTriangle(2,12,27)

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
