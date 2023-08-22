// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//My Solution
function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ')
  }
  //P: string of two words
  //R: return the words in reverse order
  //E: "john McClane" --> "McClane john"
  //P: turn the string into an array
  //reverse the elements of the array
  //turn the array into a string and join it
  //return the string