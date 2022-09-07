// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu Mumbling Solution

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
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
//    2. Use Spread Operator syntax to iterate through String/s, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//    3. Use Map method to iterate through String and return New Array after executing the Challenge Instructions, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//    4. Within Map, specify Array Properties of Character and Index as Parameters of the Solution, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//    5. Within Map, use Arrow Function to execute the Challenge Solution, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    6. Within Arrow Function, use toUpperCase and toLowerCase method to:
//    Instruct Arrow Function that the first instance of the Letter is Capitalized, and the rest will be Lower Case
//    Then, concatenate both First instance and rest of instance for each Letter of the String using + Operator, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//    https://masteringjs.io/tutorials/fundamentals/string-concat#:~:text=The%20%2B%20Operator,used%20to%20concatenate%20two%20strings.&text=You%20can%20also%20use%20%2B%3D,for%20a%20%3D%20a%20%2B%20b%20.&text=If%20the%20left%20hand%20side,hand%20side%20to%20a%20string.
//    7. Within Arrow Function, use Repeat method to repeat the Letter of the String x amount of times, based on its Index within the Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
//    8. Use Join method to join back the Strings within the New Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    9. Call Function

// Primary Solution:

function accum(letters) {
    return [...letters].map( (char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index)) ).join('-')
  }

accum('Kanye')

// Alternate Solution:

function accum(letters) {
    return letters.split('').map( (firstChar, secondChar) => (firstChar.toUpperCase() + firstChar.toLowerCase().repeat(secondChar)) ).join('-')
  }

accum('Kanye')

// ------------------------------

//    1. KATA:
//       a. 7 Kyu Complementary DNA

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Not pushed to GitHub.

//    3. SOLUTION:
//    CodeWars Solutions

//    14. Solution 14 - 7 Kyu - Complementary DNA
//    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//    Your function receives one side of the DNA (string, except for Haskell); 
//    you need to return the other complementary side. 
//    DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//    Parameters: String  
//    Return: (input -> output)
//    Example: 'GTAT' -> 'CATA'
//    Pseudocode:
//    1. Create Function
//    2. Declare a Const Variable for the Key:Value Pairs of each Letter, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
//    https://stackoverflow.com/questions/25955749/what-is-a-key-value-pair
//    3. Use Split method to split the String into individual characters, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//    4. Use Map method to iterate though String and return a new Array based on Key:Value Pairs, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//    5. Within Map, use Arrow Function to execute the evaluation of the Input to its corresponding Output, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    6. Use Join method to join the Characters back into one String, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    7. Call Function

//    Primary Solution:

// NOTE: Submitting this Solution to CodeWars results in a Fail, even if Code runs in Console:

function dnaStrand([dnaString]) {
    
    const dnaPairs = {
    'G' : 'C',
    'A' : 'T',
    'T' : 'A',
    'C' : 'G'
    }
    
    return dnaString.split('').map( x => dnaPairs[x] ).join('')
}

dnaStrand(['GATTACA'])

// TROUBLESHOOTING:

// 1. dnaStrand should be DNAStrand
// 2. Remove [] within (dnaString)
// 2. () { should be (){
// 3. Last Pairing in dnaPairs should also have ,
// 4. Making these updates allow the Solution above to Pass within Codewars

//    Alternate Solution:

// CodeWars Solution that works:

function DNAStrand(dna){
  
  const DNAComplement = {
    'G' : 'C',
    'C' : 'G', 
    'T' : 'A',
    'A' : 'T'
  }
  
  return dna.split('').map(elem => DNAComplement[elem]).join('')

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
