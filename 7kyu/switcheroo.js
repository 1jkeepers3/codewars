// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// My solution

function switcheroo(x){
    let y = x.replaceAll('a', 'y')
    let z = y.replaceAll('b', 'a')
    let w = z.replaceAll('y', 'b')
    
    return w
  }
  //P: string of letters a,b,c
  //R: return a string with the a's and b's switched
  //E: see description
  
  //P: string to array
  //: check for a's and b's
  // replace a's and b's
  //change back to a string

