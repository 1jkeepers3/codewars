// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My solution

function getCount(str) {
    let vowelCount = 0
    const strArr = str.split('')
    strArr.forEach(function(x){
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            vowelCount += 1        
        }
    });
    return vowelCount
}