// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

//My Solution

function roundToNext5(n){
    if(n%5===0){
      return n
    }
    else if(n%5!==0){
      for (let i = 0; i < 5; i++){
        let x = n+ i
        if(x%5===0){
          return x   
        }
      }
    }
  }
  //P: valid positive or negative integer
  //R: return the next (greater than or equal to) multiple of 5
  //E: see description
  //P: loop, conditional
  // check n modulas 5. if n modulas 5 equals 0 return n
  // otherwise add 1 to n until you get n modulas 5 equals 0
  // then return n