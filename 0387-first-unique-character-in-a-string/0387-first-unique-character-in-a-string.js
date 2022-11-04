/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   obj = {}
   
    for (let i = 0; i < s.length; i++) {
       if(obj[s[i]])
       {
          obj[s[i]]++
       }else{
          obj[s[i]]  = 1
       }
    }

   for (let elment in obj) {
      if(obj[elment] == 1){
         return  s.indexOf(elment) 
      }
   }
    return -1
};
