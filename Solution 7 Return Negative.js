// CodeWars Solutions

// 7. Return Negative - In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Parameters: Positive or Negative, Integers
// Return: Return Integer as Negative, if not Negative already or Zero
// Example: 1 should be turned to -1, -2 is already a Negative, 0 cannot be Negative
// Pseudocode:
// 1. Create Function
// 2. Use -Math.abs to return the Negative version of a Positive Integer
// 3. Call Function

function makeNegative(num) {
  return -Math.abs(num)
}

makeNegative(4)
