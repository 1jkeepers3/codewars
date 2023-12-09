// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solution

function positiveSum(arr) {
    return arr.reduce((a, c) => c>0?a+ c: a,0);
  }
  //P: array of positive and negative numbers
  //R: return the sum of the positive numbers
  //E: [1,-4,7,12] => 1 + 7 + 12 = 20
  //P: reduce & conditional


  //My other solution

  function positiveSum(arr) {
    //   if(arr.length===0){
    //     return 0
    //   }else{
    //     let newArr= arr.filter((item)=>item>0)
    //     return newArr.reduce((a,c)=>a+c,0)
    //   } 
      
    return arr.length===0?0:arr.filter((item)=>item>0).reduce((a,c)=>a+c,0) 
      
    }