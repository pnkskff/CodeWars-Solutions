//    CodeWars Solutions

//    14. Solution 14 - 7 Kyu - Complementary DNA
//    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//    Your function receives one side of the DNA (string, except for Haskell); 
//    you need to return the other complementary side. 
//    DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//    Parameters: String  
//    Return: (input -> output)
//    Example: 'GTAT' -> 'CATA'
//    Pseudocode:
//    1. Create Function
//    2. Declare a Const Variable for the Key:Value Pairs of each Letter, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
//    https://stackoverflow.com/questions/25955749/what-is-a-key-value-pair
//    3. Use Split method to split the String into individual characters, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//    4. Use Map method to iterate though String and return a new Array based on Key:Value Pairs, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//    5. Within Map, use Arrow Function to execute the evaluation of the Input to its corresponding Output, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//    6. Use Join method to join the Characters back into one String, see below
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    7. Call Function

//    Primary Solution:

// NOTE: Submitting this Solution to CodeWars results in a Fail, even if Code runs in Console:

function dnaStrand([dnaString]) {
    
    const dnaPairs = {
    'G' : 'C',
    'A' : 'T',
    'T' : 'A',
    'C' : 'G'
    }
    
    return dnaString.split('').map( x => dnaPairs[x] ).join('')

}

dnaStrand(['GATTACA'])

// TROUBLESHOOTING:

// 1. dnaStrand should be DNAStrand
// 2. Remove [] within (dnaString)
// 2. () { should be (){
// 3. Last Pairing in dnaPairs should also have ,
// 4. Making these updates allow the Solution above to Pass within Codewars

// CodeWars Solution that works:

function DNAStrand(dna){
  
  const DNAComplement = {
    'G' : 'C',
    'C' : 'G', 
    'T' : 'A',
    'A' : 'T'
  }
  
  return dna.split('').map(elem => DNAComplement[elem]).join('')

}
