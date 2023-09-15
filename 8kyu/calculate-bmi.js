// function bmi(weight, height) {
//     var result = weight/Math.pow(height,2) 
    
//     if (result <= 18.5) {
//       return "Underweight";
//     } else if (result <= 25) {
//       return "Normal";
//     } else if (result <= 30) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
    
//   }

//My Solution

function bmi(weight, height) {
    let bodyMassIndex = weight/(height*height)
    if(bodyMassIndex<=18.5){
      return "Underweight"
    }else if(bodyMassIndex<=25){
      return "Normal"
    }else if(bodyMassIndex<=30){
      return "Overweight"
    }else{
      return "Obese"
    }
  }

