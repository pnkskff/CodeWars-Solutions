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
