// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - Who Likes It

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    1. Solution 1 - 6 Kyu - Who Likes It 
//    You probably know the "like" system from Facebook and other pages. 
//    People can "like" blog posts, pictures or other items. 
//    We want to create the text that should be displayed next to such an item.
//    Implement the function which takes an array containing the names of people that like an item. 

//    Parameters: String, Array
//    Return: Return Name/s of at least 3 People who Liked the Post, turn 3rd Items as Digit - Others if more than 3 People Like the Post
//    Example: 
//           []                                ->  'No one likes this'
//           ['Peter']                         ->  'Peter likes this'
//           ['Jacob', 'Alex']                 ->  'Jacob and Alex like this'
//           ['Max', 'John', 'Mark']           ->  'Max, John and Mark like this'
//           ['Alex', 'Jacob', 'Mark', 'Max']  ->  'Alex, Jacob and 2 others like this'
//    NOTE: Pseudocode below pertains to Primary Solution
//    Pseudocode:
//    1. Create Function
//    2. Use If...Else Statement to specify Conditions for each amount of Likes, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//    3. Within If Statement, use Length property of Input as main Condition, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//    4. Use Strict Equality Operator to specify that only Number Type is used to execute the Statements, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
//    5. Use Template Literals (Bling Syntax) to insert a Templated Statement for each amount of Likes, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//    6. Call Function

// Primary Solution:

function likes(names) {
  
  if ( names.length===0 ) { 
    return 'No one likes this'
  } else if ( names.length===1 ) { 
    return `${ names[0] } likes this`
  } else if ( names.length===2 ) {
    return `${ names[0] } and ${ names[1] } like this`
  } else if ( names.length===3 ) { 
    return `${ names[0] }, ${ names[1] } and ${ names[2] } like this`
  }
  
  else {
      return `${ names[0] }, ${ names[1] } and ${ names.length-2 } others like this`
  }
  
}

// 0 Like
likes([])

// 1 Like
likes(['Kanye'])

// 2 Likes
likes(['Kanye', 'Kendrick'])

// 3 Likes
likes(['Kanye', 'Kendrick', 'Drake'])

// 3+ Likes
likes(['Kanye', 'Kendrick', 'Drake', 'Kid Cudi'])

// Alternate Solution:

function likes(names) {
  
  names = names || []
  
  switch(names.length) {
    case 0: return 'No one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
  
}

// 0 Like
likes([])

// 1 Like
likes(['Kanye'])

// 2 Likes
likes(['Kanye', 'Kendrick'])

// 3 Likes
likes(['Kanye', 'Kendrick', 'Drake'])

// 3+ Likes
likes(['Kanye', 'Kendrick', 'Drake', 'Kid Cudi'])

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - Find the Odd Int

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    2. Solution 2 - 6 Kyu - Find the Odd Int
//    Given an array of integers, find the one that appears an odd number of times.
//    There will always be only one integer that appears an odd number of times.

//    Parameters: Integers, Array
//    Return: Return the Integer that appears an Odd Number of times.
//    Example: [1,2,2,3,3,4,4] -> 1
//    Pseudocode:
//    1. Create Function
//    2. Use Find Method to locate the lone Odd Integer within Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//    3. Within Find, create a Variable that will stand in for Odd Integer
//    4. Within Find, use Arrow Function to specify the operations needed to find Odd Integer, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    5. Within Arrow Function, use Filter Method to generate a new Array that will contain the Odd Integer, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    6. Within Filter, use Arrow Function again and Strict Equality Operator to specify logic that will identify Odd Integer, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
//    7. Afterwards, use Length Property to sum up the number of Elements within the Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//    8. After grabbing Sum of Elements within Array, use Modulus Operator to divide the Array by 2, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
//    9. Operation in Step 8 will result in the lone Number that shows up odd amount of times
//    10. Call Function

function findOdd(arr) {
  return arr.find( (oddItem) => arr.filter(nums => nums === oddItem).length % 2 )
}

findOdd([0,0,1,2,2,3,3])

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - Array.diff

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    3. Solution 3 - 6 Kyu - Array.diff 
//    Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//    It should remove all values from list a, which are present in list b keeping their order.

//    Parameters: Array, Number Only
//    Return: Return new Array from 2 Arrays, without the Numbers that are present in each Array
//    Example: ([1,2,3], [1,2]) -> [3]
//             ([1,2,3], [2,3,4]) -> [4]
//    NOTE: Pseudocode below is applicable to Solution 2 only.
//    Pseudocode:
//    1. Create Function
//    2. Use Filter Method to iterate through both Arrays, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    3. Use Arrow Function to specify conditions for returning a new Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    4. Within Arrow Function, use Not Operator and Include Method to specify that Return should only include value if it is present within Array A, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//    5. Call Function

// Solution 1
function arrayDiff(a, b) {
  
}

// Solution 2
function arrayDiff(a, b) {
    // Filter entire a array, only keep the value if b does not contain that value
    return a.filter(val => !b.includes(val));
}

// Solution 3
const arrayDiff = (a, b) => a.filter(item => !b.includes(item))
console.log(arrayDiff([1, 2], [1]))
console.log(arrayDiff([1, 2, 2, 2, 3], [2]))

// Solution 4
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

//Solution 5
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - Counting Duplicates

//    2. STATUS:
//       a. Not submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    4. Solution 4 - 6 Kyu - Array.diff 
//
//

//    Parameters: 
//    Return: 
//    Example:
//    Pseudocode:
//    1. Create Function
//    2. Use method, see below
//
//    3. Use method, see below
//
//    4. Use method
//
//    5. Use method
//
//    6. Use
//
//    7. Use method
//
//    8. Call Function

// ------------------------------

// II. FURTHER INFO:

//     1. CodeWars Solutions Repo URL: 
//        https://github.com/pnkskff/CodeWars-Solutions

//     2. This Doc is for Solutions in the Staging process.
//        Unfinished Solutions/Documentation will be put here, until Author has time to properly complete.

//     3. Staging Doc last updated on: JANUARY 2023

//     4. Author: pnkskff
//                https://github.com/pnkskff
//                https://drincapdev.netlify.app/
//                https://drincapapps.netlify.app/
