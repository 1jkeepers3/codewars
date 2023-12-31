// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//My Solution

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
        return arrayOfSheep.filter(Boolean).length;
  }

  //My other solution

function countSheeps(sheep) {
  // TODO
  let count = 0
  sheep.forEach((element) => element===true?count += 1:count += 0);
  return count
}