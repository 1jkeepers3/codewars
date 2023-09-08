// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//My solution

function peopleWithAgeDrink(old) {
    if(old<14){
      return "drink toddy"
    }else if(old>=14&&old<18){
      return "drink coke"
    }else if(old>=18&&old<21){
      return "drink beer"
    }else{
      return "drink whisky"
    }
  };
  //P: positive number
  //R: return drink...toddy, coke, beer or whisky
  //E: see description
  //P: conditional 
  //: under 14
  //: between 14 & 18
  //: between 18 and 21
  //: 21 or older 
