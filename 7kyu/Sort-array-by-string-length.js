// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//My Solution
function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((elOne,elTwo) => elOne.length - elTwo.length)
  };
  //P: array of strings that differ in length
  //R: return the array of strings ordered from the shortest string to the longest
  //E: ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]
  //P:
  // sort method
  // compare the lenght of the two strings
  // return the string