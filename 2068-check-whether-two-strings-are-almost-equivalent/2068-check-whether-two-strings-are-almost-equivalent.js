/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {

obj = {}
 obj2 = {}

 for (let i = 0; i < word1.length; i++) {
  if(obj[word1[i]])
  {
   obj[word1[i]]++
  }else{
   obj[word1[i]]=1
  }
 }
 for (let j = 0; j < word2.length; j++) {
    if(obj2[word2[j]])
  {
   obj2[word2[j]]++
  }else{
   obj2[word2[j]] = 1
   
  }
 }
 
 for (let element in obj) {
   if(!(Math.abs(obj[element]-obj2[element]) <= 3) )
  {
   if(obj2[element])
   {
      return false
   }else{
    if(obj[element] > 3)
    {
     return false
    }
   }
  
  }
 }
 for (let element in obj2) {
    if(!(Math.abs(obj[element]-obj2[element]) <= 3) )
  {
     if(obj[element])
   {
      return false
   }else{
    if(obj2[element] > 3)
    {
     return false
    }
   }
  }
  
 }
 
 return  true
};