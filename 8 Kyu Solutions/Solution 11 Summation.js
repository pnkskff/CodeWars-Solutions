// CodeWars Solutions

// 11. Summation -
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

// Parameters: Integers, Positive
// Return: Sum the numbers from 1 to given Num
// Example: If Num = 8, Function should sum 1 - 8
// Pseudocode:
// 1. Create Function
// 2. Use Math Operators to multiply the Num + 1 of the Num, then divide by 2
// 3. Call Function

function summation(num) {
  return num * (num + 1) / 2
}

summation(8)
