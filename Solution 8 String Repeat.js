// CodeWars Solutions

// 8. String repeat - Write a function called repeatStr which repeats the given string string exactly n times.

// Parameters: Positive or Negative, Integers, String
// Return: Return String X amount of times, as per n
// Example: If n = 2 and s = Hi, Hi should return twice
// Pseudocode:
// 1. Create Function with Parameter of n and s
// 2. n to be amount of times String is repeated
// 3. s to be the String
// 4. Use s.repeat to repeat n (String) X amount of times, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// 5. Call Function

function repeatStr (n, s) {
  return s.repeat(n)
}

repeatStr (21, 'Hello')
