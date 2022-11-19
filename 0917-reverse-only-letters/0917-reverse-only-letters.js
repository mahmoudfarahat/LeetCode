/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
s =s.split("")
 left  = 0;
 right = s.length-1
 while (right > left) {
  if(s[left].match(/[a-z]|[A-Z]/g))
     {
      if(s[right].match(/[a-z]|[A-Z]/g))
      {
      
        temp = s[left]
       s[left] = s[right]
       s[right] = temp


       --right
       ++left
      }else{
       --right
      }

     }else{
      ++left
     }  
 }
 return s.join("")
};