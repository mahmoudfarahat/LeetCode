/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
        alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                    "n", "o", "p", "q", "r", "s", "t", 
                    "u", "v", "w", "x", "y", "z"]
s=s.split("")
 for (let i = 0; i < s.length; i++) {
  if(!isNaN(s[i]))
  {
   
    s[i] =  alphabet[+s[i] + alphabet.indexOf(s[i-1])]
   
   
  }
 }
 
 return s.join("")
};