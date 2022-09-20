// CodeWars Solutions

// 11. 7 Kyu - Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. 
// Ignore letter case.

// Parameters: String, No Letter Case
// Return: Return Boolean if String is Isogram or not
// Example: 'Cupcake' -> False
// Pseudocode:
// 1. Create Function
// 2. Set a Variable for String so that String can be turned to Lower Case via toLowerCase method, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// 3. Use a For Loop to iterate through String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
// 4. Within For Loop, write if...else statement to execute and confirm if condition is Truthy or Falsy, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// 5. Within if...else statement, use indexOf method to iterate and locate first instance of a Letter within String, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// 6. Within indexOf, use charAt method to iterate further and compare if Letter within String appears again, see below
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// 7. Call Function

// NOTE: Submitting this Solution to CodeWars results in a Fail, not sure why

function isIsogram(string) {
    
    str = string.toLowerCase()

    for (i = 0; i < str.length; i++) {
        if (str.indexOf (str.charAt(i), i + 1) >= 0) 
        {
            return 'False'
        }
    }
    return 'True'

}

// True
isIsogram('IDGAF')

// False
isIsogram('Buy you a drank')

// CodeWars Solution that works:

function isIsogram(str){
     
    var i, j;
    
    str = str.toLowerCase();
    
        for(i = 0; i < str.length; ++i) {
        for(j = i + 1; j < str.length; ++j) {
            if(str[i] === str[j]) {
                return false;
            }
        }
        }
     return true;
}
