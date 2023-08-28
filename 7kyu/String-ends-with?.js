// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//My solution

function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending)
  }
  //P: two arguments that may or may no be strings
  //R: return true or false
  //E: see description
  //P: look a the letters of the first argument
  // look at the letters of the secound argument
  // if the secound argument matches the end of the first argument return true
  // else false 