/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
 obj = {}
 obj1 = {}
 j =0

 for (let i = 0; i < words1.length; i++) {
     if(obj[words1[i]])
     {
      obj[words1[i]]++
     }else{
      obj[words1[i]] = 1
     }
 }

  for (let i = 0; i < words2.length; i++) {
     if(obj1[words2[i]])
     {
      obj1[words2[i]]++
     }else{
      obj1[words2[i]] = 1
     }
 }
 for (let element  in obj) {
   if (element in obj1 && obj[element] ==1  && obj1[element] ==1)
   {
    ++j
   }
 }
  
return j
 
 
};

