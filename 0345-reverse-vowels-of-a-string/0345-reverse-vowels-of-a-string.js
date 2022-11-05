/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  vowels =  ['a', 'e', 'i', 'o','u' , 'A', 'E', 'I', 'O','U' ]
  s = s.split("")
 
 

   
  left = 0
  right = s.length -1

  while (left < right) {
   if(vowels.includes(s[left])){
     if(vowels.includes(s[right]))
     {
       
       temp = s[left]
       s[left] = s[right]
       s[right] = temp

        ++left
       --right 
     }else{
       --right
     }
   }else{
     ++left
   }

    
  }
  
  return s.join("") 
};
