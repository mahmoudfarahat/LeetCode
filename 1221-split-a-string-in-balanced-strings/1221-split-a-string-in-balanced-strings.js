/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
arr = []
 l = 0
 r = 0
 p = 0
 for (let i = 0; i < s.length; i++) {
  if(s[i]== 'R')
  {
   ++r
  }
   if(s[i]== 'L')
  {
   ++l
  }
 
  if( r == l)
  {
    ++p 
   r = 0
   l = 0
  }
 }

 return p
};
