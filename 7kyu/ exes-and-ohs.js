// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution

function XO(str) {
    let x= []
    let o= []
    let arr = str.split('')
    for(let i=0;i<arr.length;i++){
      if(arr[i]==="o"||arr[i]==="O"){
        o.push(arr[i])
      }else if(arr[i]==="x"||arr[i]==="X"){
        x.push(arr[i])
      }
    }
    return x.length === o.length
  }
  // take in a string of chars. upper or lower case. no numbers, booleans. etc. always a string
  // return a boolean. if the number of X = number of Os. can be upper or lower. can be 0
  // see description 
  //