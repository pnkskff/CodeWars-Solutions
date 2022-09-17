//    CodeWars Solutions

//    17. Solution Number 17 - 7 Kyu - Friend or Foe
//    Make a program that filters a list of strings and returns a list with only your friends name in it.
//    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
//    Otherwise, you can be sure he's not...

//    Parameters: String, Array
//    Return: Only return Name if it has 4 Letters
//    Example: ['Kanye', 'A$AP', 'Drake', 'Big Boi', 'Kendrick Lamar'] -> ['A$AP']
//    Pseudocode:
//    1. Create Function
//    2. Use Filter method to iterate through Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//    3. Within Filter, declare a Function that will execute solution to the challenge, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//    4. Within Return, use Length method and Strict Equality Operator to return only 4 Letter Strings, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
//    5. Call Function

function friend(friends) {
    return friends.filter( function (names) { return names.length === 4 } )
}

friend(['Kanye', 'A$AP', 'Drake', 'Big Boi', 'Kendrick Lamar'])
