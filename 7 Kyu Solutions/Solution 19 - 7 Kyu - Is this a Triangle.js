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
