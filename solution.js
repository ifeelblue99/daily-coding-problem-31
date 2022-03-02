/*
This problem was asked by Google.
The edit distance between two strings refers to the minimum number of character
insertions, deletions, and substitutions required to change one string to the
other. For example, the edit distance between “kitten” and “sitting” is three:
substitute the 'k' for 's', substitute the 'e' for 'i', and append a 'g'.
Given two strings, compute the edit distance between them.
*/

const strMain = "kitten"
const strSecond = "sitting"

function editDistance(mainStr, secStr){
  
  // get the shortest string an array
  // i am assuming that strings have never same length
  let longArr = [],
      shortArr = [];
      
  if (mainStr.length>secStr.length) {
    longArr = [...mainStr];
    sortArr = [...secStr];
  }else{
    longArr = [...secStr];
    shortArr = [...mainStr];
  }
  
  let res = []
  
  // check for missing chars
  for (var i = shortArr.length; i < longArr.length; i++) {
    res.push(`append:${longArr[i]}`)
  }
  
  // check for substitute
  for (let i = 0; i < shortArr.length; i++) {
    if (shortArr[i]!=longArr[i]) {
      res.push(`substitute: ${shortArr[i]} for ${longArr[i]}`)
    }
  }
  
  return res
}


// driver code
console.log(strMain,"--",strSecond,"\n--->",editDistance(strMain, strSecond))


