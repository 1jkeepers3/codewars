// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My First Solution

function findAverage(array) {
    // your code here
    let result = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
      
    if(array.length === 0){
      return 0
    }else{
      return result / array.length
    }
  }

//My Secound Solution

const findAverage = (array) => {
    return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0)/ array.length
  }

