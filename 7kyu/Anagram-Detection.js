// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//My solution

// write the function isAnagram
var isAnagram = function(test, original) {
    let worOne = test.toLowerCase().split('').sort().join('')
    let worTwo = original.toLowerCase().split('').sort().join('')
    return (worOne === worTwo)?true:false 
    
  };
  //P: two strings. different cases.
  //R: return true if strings have the same letters and cases. else false
  //E: see description
  //P: make the strings all lowercase
  // split them
  // sort them
  // join them
  // compare them

