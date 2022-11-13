/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {

  text = text.split(" ");
 p = 0

 for (let i = 0; i < text.length; i++) {
   t = brokenLetters.length
  for (let j = 0; j <brokenLetters.length ; j++) {
   if(!(text[i].includes(brokenLetters[j])))
   {
    --t
   }
   if(t == 0)
   {
    ++p
   }
  }
 }
    if(brokenLetters.length ==0)
        {
            return text.length
        }
 return p
};
