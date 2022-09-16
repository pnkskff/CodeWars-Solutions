// CodeWars Solutions

// 19. Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Parameters: Arithmetic Operators, Integers, Positive, Negative
// Return: Return the value of 2 digits after application of Arithmetic Operators
// Example:
// 1. + --> ('+', 4, 7) --> 11
// 2. - --> ('-', 15, 18) --> -3
// 3. * --> ('*', 5, 5) --> 25
// 4. / --> ('/', 49, 7) --> 7
// Pseudocode:
// 1. Create Function
// 2. Use Arithmetic Operators to calculate value of value 1 and value 2, see below
// 3. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
// 4. Call Function

function basicOp(operation, value1, value2) {
  if (operation == '+') {
     return value1 + value2
  }
  if (operation == '-') {
     return value1 - value2
  }
  if (operation == '*') {
     return value1 * value2
  }
  if (operation == '/') {
     return value1 / value2
  }
}

basicOp('+', 1, 1)
basicOp('-', 2, 1)
basicOp('*', 3, 1)
basicOp('/', 8, 2)
// Comment out other Calls when testing Function
