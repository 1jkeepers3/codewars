// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//My solution
function invert(array) {
    let newArr =[]
   array.forEach((e) => newArr.push(e *-1));
    return newArr
}
//P: positive or negative integers in an aray
//R: the inverse of all of the integers in a new array
//E: see description
//P: 
// create an empty array
//loop through the paramater array and mutiply each element by negative one
// put each element in the new empty array
//return that array