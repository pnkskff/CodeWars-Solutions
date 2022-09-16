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
