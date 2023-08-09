// DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//My Solution

function findNextSquare(sq) {
    //conditional Math Sq rt === true or if false return -1
    //conditional check if Math sq rt is a whole number
    // convert sq + 1 times sq + 1
    // return that 
    let num = Math.sqrt(sq)
    if(Number.isInteger(num)){
      return (num+1)*(num+1)
    }else{
       return -1;
    }
  }
  
  
  //PREP
  //P: num, +, sqaure root or not
  //R: return num that is the next integral perfect square up from sq. If sq is not a perfect square return -1
  //E:findNextSquare(121) -->144, findNextSquare(625)-->676, findNextSquare(114)--> -1
  //P: