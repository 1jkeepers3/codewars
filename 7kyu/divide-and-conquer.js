// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My solution

function divCon(x){
    let num = []
    let str = []
for (let i = 0; i < x.length; i++) {
  if (typeof x[i] === 'number') {
    num.push(x[i])
  } else {
    str.push(x[i])
  }
}
let numTot = num.reduce((a, c) => a + c, 0);
let strtoNums = str.map((e)=>Number(e))
let strTot = strtoNums.reduce((a, c) => a + c, 0);
return numTot - strTot

}

//P: array of numbers and strings that are integers
//R: a number. the total of the numbers minus the strings
//E: [1,4,5,"2",10,"3"] => 20-5 or 15
//P: