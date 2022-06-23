// CodeWars Solutions

// 20 . Returning Strings
// Make a function that will return a greeting statement that uses an input;
// your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

// Parameters: String
// Return: Return a Greeting from User Input of Name
// Example:
// 1. User Input = Kanye
// 2. Greeting --> "Hello Kanye West! How are you doing today?"
// Pseudocode:
// 1. Create Function
// 2. Use Bacticks --> `$()` // to insert Input within the Greeting, see below
// https://javascript.info/string
// 3. Call Function

function greet(name) {
  return `Hello ${name}! How are you doing today?`
}

greet('Kanye West')
