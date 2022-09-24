//    CodeWars Solutions

//    20. Solution 20 - 7 Kyu - Two to One 
//    Take 2 strings s1 and s2 including only letters from a to z. 
//    Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//    Parameters: String, Array
//    Return: Return Sorted String, longest possible, containing unique letters, only displaying once
//    Example: a = 'xyaabbbccccdefww'
//             b = 'xxxxyyyyabklmopq'
//             longest(a, b) -> 'abcdefklmopqwxy'
//    Pseudocode:
//    1. Create Function
//    2. Use Array.from() method to create a new Array from an iterable Object, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//    3. Within Array.from(), use new Operator and Set Object to create a new collection of values from pre-existing Objects, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//    4. Within Set Object, use Addition Operator to concatenate results from both Objects into 1 Object, see below 
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
//    5. Use Sort Method to then arrange the result of Set into Ascending Order, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//    6. Use Join Method to join the Letters back together into 1 String, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    7. Call Function

function longestStr(a, b) {
    return Array.from( new Set (a + b) ).sort().join('')
}

longestStr('aaxxxxojnbmvcmdoe','aprprfmdlfgjfhdbr')
