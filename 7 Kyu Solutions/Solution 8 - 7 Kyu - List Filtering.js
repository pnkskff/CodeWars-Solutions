// CodeWars Solutions

// 8. 7 Kyu - List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Parameters: Array, Positive, Integers, Strings
// Return: New Array with String filtered out
// Example: [1, 2, 'a', 'b'] -> [1, 2]
// Pseudocode:
// 1. Create Function
// 2. Use Filter method to narrow down Parameters to only the Number, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// 3. Within Filter, use Arrow Function to specify the type of Value the new Array is expecting, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 4. Use typeOf operator to specify that the Filter should only return Number, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// 5. Use Strict Equality operator to specify that Parameters should only be equal in type and value to Number, and not String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// 6. Call Function

// NOTE: Submitting this Solution to CodeWars results in a Fail, not sure why

function filterList(list) {
  return list.filter( num => typeof num === 'number' )
}

filterList([27, 89, 69, 21, 'Kanye West', 100, 'Jay-Z'])

// CodeWars Solution that works:

// function filter_list(l) {
//  return l.filter(v => typeof v == "number")
// }
