/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        {
            return false
        }
 
    obj = {}
    obj2 = {}
 
 for (let i = 0; i < s.length; i++) {
   if(obj[s[i]])
   {
    obj[s[i]]++
   }else{
    obj[s[i]] = 1
   }
 }
 
 for (let i = 0; i < t.length; i++) {
   if(obj2[t[i]])
   {
    obj2[t[i]]++
   }else{
    obj2[t[i]] = 1
   }
 }
 
  for (let el in obj)
   {
    console.log(el)
  if (!(el in obj2))
    {
     return false
    }
    
    if(!(obj2[el] === obj[el]))
        {
         return false
        }   
   }

  return true

};

 
s = "anagram"
t= "nagaram"
isAnagram(s, t)