// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 7 Kyu - Growth of a Population

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
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
//    2. 
//    3. 
//    4. 
//    5. 
//    6. 
//    7. 
//    8. Call Function

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
