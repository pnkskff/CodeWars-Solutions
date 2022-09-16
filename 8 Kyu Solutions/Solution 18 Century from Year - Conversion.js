// CodeWars Solutions

// 18. Century From Year
// The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.

// Parameters: Integers, Positive
// Return:
// Example:
// Pseudocode:
// 1. Create Function
// 2. Calculation is year + 99 / 100
// 3. Use Bitwise OR operator to round down to nearest whole Integer, see below
// 4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#.7c_%28Bitwise_OR%29
// 5. Call Function

function century(year) {
  return ( (year + 99) / 100) | 0
}

century(2022)
