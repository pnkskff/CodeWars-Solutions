// CodeWars Solutions

// 12. Remove String Spaces -  Remove the spaces from the string, then return the resultant string.

// Parameters: Strings
// Return: String with no Spaces
// Example: Instead of Hello World, Str becomes HelloWorld
// Pseudocode:
// 1. Create Function
// 2. Use Split
// 3. Use Join, remove Space within ''
// 4. Call Function

function noSpace(string) {
  return string.split(' ').join('')
}

noSpace ('Hello World')
