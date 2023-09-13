// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//My solution

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let total = classPoints.reduce((a, c) => a + c, yourPoints)
    let avg = total/ (classPoints.length + 1)
    if(avg<yourPoints){
      return true
    }else{
      return false
    }
  }
  //P: array of numbers. my number. 
  //R: True if my number is greater than the average, false if not
  //E: [90,69,20,100,70] [85] => True
  //P: find the average of all of the numbers. 
  // if my score is greater than that return true, else false