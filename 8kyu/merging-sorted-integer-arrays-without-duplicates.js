// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// My solution

function mergeArrays(a, b) {
    // your code here
    let arr = [...a,...b].sort((num1,num2) => num1 - num2)
    let noDuplicates = []
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            noDuplicates.push(arr[i])
            
        }
        
    }
      return noDuplicates
  }