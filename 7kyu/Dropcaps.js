// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.

//My Solution
Obsolete
7 kyu
Dropcaps
JavaScript:
function dropCap(n) {
  n = n.split(' ');
  for(let i = 0; i < n.length; i++) {
    if(n[i].length > 2) {
      n[i] = n[i].slice(0, 1).toUpperCase() + n[i].slice(1).toLowerCase();
    }
  }
  return n.join(' ');
}
//P: sting of one or more words with or without spaces
//R: return the same string with words greater than 2 letters having the first letter uppercase
//E: see instructions
//P: 
// change the paramanter string into an array with split
// loop through each element of the array
// return each element with the first letter uppercase and rest lower case if ? the element is greater than 2 characgters
// turn it back into a string and return it
