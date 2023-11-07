// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// My solution

function likes(names) {
    // TODO
    if(names.length===0){
      return "no one likes this"
    }else if(names.length===1){
      return `${names[0]} likes this`
    }else if(names.length ===2){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length ===3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
    }
  }
  
  //P: array. empty, or have one or more strings of characters
  //R: empty array =>no one likes this 
  //  array with 1 string => string likes this
  // array with 2 strings => string and string like this
  // array with 3 strings => string, string and string like this
  // array with 4 or more strings => string, string and (num is length - 2) like this 
  //E: see examples
  //P: condtional. template literals. check the length of the string. pull elements from array 