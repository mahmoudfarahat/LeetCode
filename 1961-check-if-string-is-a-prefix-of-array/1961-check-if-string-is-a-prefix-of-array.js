/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
 if(s.length > words.join("").length) return false
 if(s.length > words[0]) return false
  for (let i = 0; i < words.length; i++) {
   
     if(s.startsWith(words[i]))
      { 
         words.unshift();
         s =  s.substr(words[i].length)
      }else{
       return false
      }
      if(s.length == 0){
       return true
      }
    
  }
 return false
  
};