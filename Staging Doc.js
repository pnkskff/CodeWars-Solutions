// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Growth of a Population

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    18. Solution 18 - 7 Kyu - Growth of a Population
//    In a small town the population is p0 = 1000 at the beginning of a year. 
//    The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
//    How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
//    Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//    Parameters: Integer, Decimal, Positive, Floating Number
//    Return: Return Years needed to reach 1200 Inhabitants
//    Example: 1st Year: 1000 + 1000 * 0.02 + 50 -> 1070 inhabitants
//             2nd Year: 1070 + 1070 * 0.02 + 50 -> 1141 inhabitants
//             3rd Year: 1141 + 1141 * 0.02 + 50 -> 1213 inhabitants
//             It will take 3 Years to reach 1200 inhabitants
//    Pseudocode:
//    NOTE: Pseudocode for this Solution will be written for CodeWars Solutions that Passes
//    1. Create Function
//    2. Use For Loop to iterate through Parameters, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
//    3. Within Parameters of For Loop, declare Year as a Var so that it can update, instead of being Hardcoded
//    4. Within Brackets, declare currentPop as Base Number
//    5. Then, use Math.floor function to round down and return largest Integer, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//    6. Within Math.floor function, specify the execution of Parameters to derive the Answer, further details:
//       a. Start with currentPop
//       b. Then Add to it the result of currentPop Multiplied by growthPop Divided by 100
//       c. Then Add the expectd amount of Inhabitants Moving In or Out
//    7. Call Function

// NOTE: Submitting this Solution to CodeWars results in a Fail, not sure why

function nbYear(currentPop, growthPop, inhabitantsMove, goalPop) {
    
    let year = 0
    
      while ( currentPop < goalPop) { 
          year++; currentPop = currentPop + ( currentPop*(growthPop/100) ) + inhabitantsMove 
      }
      
      return year

}

nbYear(1500, 0.8, 27, 5000)

// CodeWars Solution that works:

function nbYear(currentPop, growthPop, inhabitantsMove, goalPop) {
    
    for (var year = 0; currentPop < goalPop; year++) {
        currentPop = Math.floor( currentPop + currentPop * growthPop / 100 + inhabitantsMove )
    }
  
    return year

}

nbYear(1000, 0.2, 50, 1200)

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Is this a Triangle?

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Complete Documentation.
//       c. Not pushed to GitHub.
//       d. JS File not created on Desktop.

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
