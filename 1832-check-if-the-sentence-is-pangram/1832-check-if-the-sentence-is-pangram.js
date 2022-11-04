/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                  "n","o","p","q","r","s","t","u","v","w","x","y","z"];

 for (let i = 0; i < alphabet.length; i++) {
      if (!sentence.includes(alphabet[i])) {
       return false
      }
 }

 return true
 
};
