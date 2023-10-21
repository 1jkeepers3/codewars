// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// My solution

function well(x){
    let num = 0
  x.forEach((e) => e==='good'?num+=1:num+=0)
    if(num===1||num===2){
      return 'Publish!'
    }else if(num>2){
      return  'I smell a series!'
    }else{
      return 'Fail!'
    }
  
  }
  //P: array
  //R: good 1 or 2=> "Publish", good 3+ => "I smell a series", good 0=> "Fail"
  //E: 
  //P: loop that check each element in the array with conditional
  //counter for conitional