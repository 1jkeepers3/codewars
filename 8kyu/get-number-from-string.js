// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// My solution

function getNumberFromString(s) {
    return Number(s.split('').filter(e => '0' <= e && e <= '9').join(''));
  }