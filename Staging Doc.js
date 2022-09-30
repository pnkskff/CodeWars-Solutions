// Staging Doc

// I. KATA SOLUTIONS:

// ------------------------------

//    1. KATA:
//       a. 6 Kyu - Who Likes It

//    2. STATUS:
//       a. Submitted to CodeWars.
//       b. Incomplete Documentation.
//       c. Not pushed to GitHub.
//       d. JS File not created on Desktop.

//    3. SOLUTION:

//    CodeWars Solutions

//    1. Solution 1 - 6 Kyu - Who Likes It 
//    You probably know the "like" system from Facebook and other pages. 
//    People can "like" blog posts, pictures or other items. 
//    We want to create the text that should be displayed next to such an item.
//    Implement the function which takes an array containing the names of people that like an item. 

//    Parameters: String, Array
//    Return: Return Name/s of at least 3 People who Liked the Post, turn 3rd Items as Digit - Others if more than 3 People Like the Post
//    Example: 
//           []                                ->  'No one likes this'
//           ['Peter']                         ->  'Peter likes this'
//           ['Jacob', 'Alex']                 ->  'Jacob and Alex like this'
//           ['Max', 'John', 'Mark']           ->  'Max, John and Mark like this'
//           ['Alex', 'Jacob', 'Mark', 'Max']  ->  'Alex, Jacob and 2 others like this'
//    NOTE: Pseudocode below pertains to Primary Solution
//    Pseudocode:
//    1. Create Function
//    2. 
//    3. 
//    4. 
//    5. 
//    6. 
//    7. 
//    8. Call Function

// Primary Solution:

function likes(names) {
  
  if ( names.length===0 ) { 
    return 'No one likes this'
  } else if ( names.length===1 ) { 
    return `${ names[0] } likes this`
  } else if ( names.length===2 ) {
    return `${ names[0] } and ${ names[1] } like this`
  } else if ( names.length===3 ) { 
    return `${ names[0] }, ${ names[1] } and ${ names[2] } like this`
  }
  
  else {
      return `${ names[0] }, ${ names[1] } and ${ names.length-2 } others like this`
  }
  
}

// 0 Like
likes([])

// 1 Like
likes(['Kanye'])

// 2 Likes
likes(['Kanye', 'Kendrick'])

// 3 Likes
likes(['Kanye', 'Kendrick', 'Drake'])

// 3+ Likes
likes(['Kanye', 'Kendrick', 'Drake', 'Kid Cudi'])

// Alternate Solution:

function likes(names) {
  
  names = names || []
  
  switch(names.length) {
    case 0: return 'No one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
  
}

// 0 Like
likes([])

// 1 Like
likes(['Kanye'])

// 2 Likes
likes(['Kanye', 'Kendrick'])

// 3 Likes
likes(['Kanye', 'Kendrick', 'Drake'])

// 3+ Likes
likes(['Kanye', 'Kendrick', 'Drake', 'Kid Cudi'])

// ------------------------------

// II. FURTHER INFO:

//     1. CodeWars Solutions Repo URL: 
//        https://github.com/pnkskff/CodeWars-Solutions

//     2. This Doc is for Solutions in the Staging process.
//        Unfinished Solutions/Documentation will be put here, until Author has time to properly complete.

//     3. Staging Doc last updated on: SEPTEMBER 2022

//     4. Author: pnkskff
//                https://github.com/pnkskff
//                https://drincapdev.netlify.app/
//                https://drincapapps.netlify.app/
