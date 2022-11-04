/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
s = s.toLowerCase()
 s = s.replace(/[^a-z0-9]/g,"")  
    if ( s === ''){
     return true
 }
left = 0
    
   right = s.length-1
    
 if (s[0] !== s[1] && s.length == 2)
     {
         return false
     }else if (s[0]  === s[1] && s.length == 2)
         
         {
             return true 
         }
   while (left < right) {
     
      if(s[left] === s[right])
      {
            ++left
         --right
      }else{
         return false
      }
   }

   return true
};