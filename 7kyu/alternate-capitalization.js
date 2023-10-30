// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// My solution

function capitalize(s){
    let a = []
    let b = []
    s.split('').forEach((e, i)=>i%2===0?a.push(e.toUpperCase()):a.push(e));
    s.split('').forEach((e, i)=>i%2===0?b.push(e):b.push(e.toUpperCase()));
    return [a.join(''),b.join('')]
  };
  
  
  
  //P: input string of letter that are lowercase with no spaces
  //R: an array with the first element having the even indexes capitalized and the the second element having the odd indexes capitalized
  //E: ("abcdef") => ['AbCdEf', 'aBcDeF'].
  //P: string to an array
  //: loop through the array and change even indexes to cap with modulas 
  //:loop through the array and change odd indexes to cap with modulas 
  //: put the results in a variable 
  //: put the variables in a new array and return 

