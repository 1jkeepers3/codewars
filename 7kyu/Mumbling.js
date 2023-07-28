// DESCRIPTION
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My Solution

function accum(str){
    var res = [];
    for(var i = 0; i < str.length; i ++){
      var row = '';
      for(var j = 0; j < i + 1; j++){
        row += j ===0 ? str[i] . toUpperCase() : str[i]. toLowerCase();
      }
      res.push(row);
    }
    return res.join('-')
  }