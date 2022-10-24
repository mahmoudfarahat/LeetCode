 /**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
arr = []
   word.split("").map(a => {
   if (a == a.toUpperCase())
   {
    arr.push(1)
   }else if (a == a.toLowerCase())
   {
     arr.push(0)
   } 
  })
 
 sumArr = arr.reduce((a,b) => a+b)
 
  const  newSet = new Set(arr)

 newArr = [...newSet]
 
 
 if( arr[0] === 1 && sumArr === 1)
 {
  return true
  
  }else if (newArr.length === 1) {
  return true
  }

  return false
  
 
};