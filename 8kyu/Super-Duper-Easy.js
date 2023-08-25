// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//My solution

function problem(x){
    //your code here
     if (typeof x ==='number'){
       return (x * 50)+6
     }else if(typeof x ==='string'){
       return "Error"
     }
  }
  //P: string or number
  //R: retrun x *50 +6 or error if it's a string
  //E: input=>'fob' output => error input => 5 output => 256
  //P: conditional to check x for being a number
  // if x is a number return the math algo
  // if not return error