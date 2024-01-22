// Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

// Worked Example
// 2520 ➞ 72

// # The first and last digits are 2 and 0.
// # 2 and 0 form 20.
// # The second digit is 5 and the second to last digit is 2.
// # 5 and 2 form 52.

// # 20 + 52 = 72
// Examples
// 121 ➞ 13
// # 11 + 2

// 1039 ➞ 22
// # 19 + 3

// 22225555 ➞ 100
// # 25 + 25 + 25 + 25
// Notes
// If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
// Any number which is zero-padded counts as a single digit (see example #2).

// My solution

function closingInSum(n) {
    let arr = n.toString().split('')
    let arrTwo = []
    for(let i= 0; i<arr.length/2;i++){
      if(((arr.length/2)-i)<1){
        arrTwo.push(parseInt(arr[i]))
      }else{
        arrTwo.push(parseInt(arr[i]+arr[arr.length-(i+1)]))  
      }
    }
    return arrTwo.reduce((a, c) => a + c, 0);
  }

