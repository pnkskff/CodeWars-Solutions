// CodeWars Solutions

// 14. Counting Sheep -
// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// Parameters: Array, String
// Return: Function to return Count of Sheep that is True
// Example: [True, True, False], will return a count of 2 Sheep present
// Pseudocode:
// 1. Create Array of sheeps; 17 true, use discretion on amount of false, null, undefined
// 2. Create Function
// 3. Use Filter method to grab Length of Array if sheepsArr === true, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// 4. Call Function

const sheepsArr = [true, true, false, true, null,
                  false, true, undefined, true, true,
                  true, true, true, true, true,
                  true, true, true, true, true, true]

function countSheeps() {
    return sheepsArr.filter(sheepsArr => sheepsArr === true).length
}

countSheeps(sheepsArr)
