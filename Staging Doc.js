// Staging Doc

// I. KATA SOLUTIONS:

//    1. KATA:
//       a. 7 Kyu Mumbling Solution

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.

//    3. SOLUTION:
//    CodeWars Solutions

//    13. Solution 13 - 7 Kyu - Mumbling
//    This time no story, no theory. 
//    The examples below show you how to write function accum:
//    accum("abcd") -> "A-Bb-Ccc-Dddd"
//    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//    accum("cwAt") -> "C-Ww-Aaa-Tttt"

//    Parameters: String Only
//    Return: Return accum results
//    Example: ('abcd') -> 'A-Bb-Ccc-Dddd'
//    Pseudocode:
//    1. Create Function
//    2. 
//    3.
//    4. 
//    5. 
//    6. 
//    7. 
//    8. Call Function

//    Primary Solution:

function accum(letters) {
    return letters.split('').map( (firstChar, secondChar) => (firstChar.toUpperCase() + secondChar.toLowerCase().repeat(secondChar)) ).join('-')
  }

accum('Kanye')

//    Alternate Solution:

function accum(letters) {
    return [...letters].map( (char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index)) ).join('-')
  }

accum('Kanye')

// II. FURTHER INFO:
//     1. CodeWars Solutions Repo URL: 
//        https://github.com/pnkskff/CodeWars-Solutions

//     2. This Doc is for Solutions in the Staging process.
//        Unfinished Solutions/Documentation will be put here, until Author has time to properly complete.

//     3. Staging Doc last updated on: AUGUST 2022

//     4. Author: pnkskff
//                https://github.com/pnkskff
//                https://drincapdev.netlify.app/
//                https://drincapapps.netlify.app/
