// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

//My Solution
function isPalindrome(x) {
    // your code here
    //convert x to the reverse of x
    // compare reverse of x to x
    // if they are equal return true 
    let y = x.split('').reverse().join('').toLowerCase()
    return y === x.toLowerCase()? true: false 
   
  }
  //P: letters, numbers, symbols, sentence case sensitive
  //R: true if it's a palindrome
  //E:madam, racecar, 12/21/33 12:21
  //P: