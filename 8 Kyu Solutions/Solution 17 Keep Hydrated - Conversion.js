// CodeWars Solutions

// 17. Keep Hydrated!
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// Parameters: Integers, Positive
// Return: Convert a value of Time into a value of Liters
// Example: 0.5/1 hr - If 3 hrs, converts to 1 Liter
// Pseudocode:
// 1. Create Function
// 2. Calculation is time * 0.5
// 3. Use Math.floor to calculate/round to the lowest value, see below
// 4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// 5. Call Function

function litres(time) {
  return Math.floor(time*0.5)
}

litres(8)
