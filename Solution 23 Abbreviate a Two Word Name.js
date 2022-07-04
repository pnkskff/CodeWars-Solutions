// CodeWars Solutions

// 23. Abbreviate a Two Word Name
// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// Parameters: String
// Return: Turn a Two Word Name into an Abbreviation of the First Letters of both Names, separated by Dot.
// Example: Kanye West turns to K.W
// Pseudocode:
// 1. Create Function
// 2. Use Split method to split String into individual Letter within an Array, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 3. Use Map to turn result of Split into a new Array, target 0 Index so that Array will display only the 1st Element of each Name, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 4. Use toUpperCase method to turn first 2 Letters to Uppercase, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// 5. Use Join method to join 1st Element of each Name, use . as Delimiter, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// 6. Call Function

function abbrevName(name){
    return name.split(' ').map(name => name[0].toUpperCase()).join('.')
}

abbrevName('Kanye West')
