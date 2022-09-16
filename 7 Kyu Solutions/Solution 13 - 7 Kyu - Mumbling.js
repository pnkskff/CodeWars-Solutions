//    CodeWars Solutions

//    13. Solution 13 - 7 Kyu - Mumbling
//    This time no story, no theory. 
//    The examples below show you how to write function accum:
//    accum("abcd") -> "A-Bb-Ccc-Dddd"
//    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//    accum("cwAt") -> "C-Ww-Aaa-Tttt"

//    Parameters: String Only
//    Return: Return accum results
//    Example: ('abcd') -> 'A-Bb-Ccc-Dddd'
//    Pseudocode:
//    1. Create Function
//    2. Use Spread Operator syntax to iterate through String/s, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//    3. Use Map method to iterate through String and return New Array after executing the Challenge Instructions, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//    4. Within Map, specify Array Properties of Character and Index as Parameters of the Solution, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//    5. Within Map, use Arrow Function to execute the Challenge Solution, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    6. Within Arrow Function, use toUpperCase and toLowerCase method to:
//    Instruct Arrow Function that the first instance of the Letter is Capitalized, and the rest will be Lower Case
//    Then, concatenate both First instance and rest of instance for each Letter of the String using + Operator, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//    https://masteringjs.io/tutorials/fundamentals/string-concat#:~:text=The%20%2B%20Operator,used%20to%20concatenate%20two%20strings.&text=You%20can%20also%20use%20%2B%3D,for%20a%20%3D%20a%20%2B%20b%20.&text=If%20the%20left%20hand%20side,hand%20side%20to%20a%20string.
//    7. Within Arrow Function, use Repeat method to repeat the Letter of the String x amount of times, based on its Index within the Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
//    8. Use Join method to join back the Strings within the New Array, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    9. Call Function

// Primary Solution:

function accum(letters) {
    return [...letters].map( (char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index)) ).join('-')
  }

accum('Kanye')

// Alternate Solution:

function accum(letters) {
    return letters.split('').map( (firstChar, secondChar) => (firstChar.toUpperCase() + firstChar.toLowerCase().repeat(secondChar)) ).join('-')
  }

accum('Kanye')
