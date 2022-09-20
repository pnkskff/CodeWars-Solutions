// CodeWars Solutions

// 10. 7 Kyu - Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
// The string can contain any char

// Parameters: String, Special Characters, Integers, Positive, Negative, Boolean, Case Insensitive
// Return: Return True if String has the same amount of X/x and O/o, False if not
// Example: ('ahfh0oofjfjjrnxx') -> true
// Pseudocode:
// 1. Create Function
// 2. Declare String as a Variable, so that String can use toLowerCase and Split method
// This'll result in any input to turn into Lower Case and also results in splitting the string into an Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 3. Use Filter method to go through the Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// 4. Within Filter, use Arrow Function and Strict Equality Operator to check if a Character is equal in Type and Value to x, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// 5. Do Steps 3 and 4 for o
// 6. Between the Methods for x and o, use Strict Equality Operator to compare the results of each method, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// 7. Call Function

// NOTE: Submitting this Solution to CodeWars results in a Fail, not sure why

function xO(string) {
  
    let word = string.toLowerCase().split('')
    
    return word.filter(xX => xX === 'x').length === word.filter(oO => oO === 'o').length

}

// True
xO('oOdjj48i5jh56-1@Xx')

// False
xO('oOdjj48i5jh56-1@X')

// CodeWars Solution that works:

function XO(string) {
   
   let array = string.toLowerCase().split('')
   
   return array.filter(xX => xX === 'x').length === array.filter(oO => oO === 'o').length
}
