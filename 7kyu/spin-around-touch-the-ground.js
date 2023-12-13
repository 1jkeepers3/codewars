// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

// ["left", "left", "left", "left"] ➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".

// My solution

function spinAround(turns) {
    let rightCount = 0
    let leftCount = 0
    
    for(let i= 0;i<turns.length;i++){
      if(turns[i]==="right"){
        rightCount+=0.25
      }else if(turns[i]==="left"){
        leftCount+=0.25
      }
    }
    return Math.floor(Math.abs(rightCount - leftCount))
  }
