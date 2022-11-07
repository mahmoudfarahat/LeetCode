/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {

  arr = []
  a = 0
  b = 0

 for (let i = 0; i <  s.length; i++) {
 if(s[i] == 'a')
 {
  
  if(b){
   return false
  }
  ++a
 }else{
  
  if(a){
   arr.push(a)
  }
  a = 0
  ++b
 }
 }

 return true
};
