// CodeWars Solutions

// 1. Even or Odd - Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Parameters: Positive, Integers
// Return: Return Even if divisible by 2, Odd if not divisible by 2
// Example: 2,4,6 is Even, 1,3,5 is Odd
// Pseudocode:
// 1. Create Function
// 2. Return or Console Log if Positive Integer is divisible by 2 or not: Even or Odd
// 3. Call Function

function even_Or_Odd(number) {
  return number %2 === 0 ? 'Even' : 'Odd'
}

even_Or_Odd (4)
