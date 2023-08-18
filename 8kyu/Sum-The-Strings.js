// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//My Solution

function sumStr(a,b) {
    return (Number(a)+Number(b)).toString()
  }
  //P: numbers as string. empty strings are 0. doesn't exceed the bit limit
  //R: return the sum of the numbers in the string
  //E: "4",  "5" --> "9""34", "5" --> "39""", "" --> "0""2", "" --> "2""-5", "3" --> "-2"
  //P:
  //Convert a and b to a number
  // add them
  //convert the sum back to a string
  // return the sum 
