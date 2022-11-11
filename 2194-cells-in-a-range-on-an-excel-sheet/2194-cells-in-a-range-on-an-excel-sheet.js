/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
              ,"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    arr= []
  
s = s.split(":")
 fristLetter = alphabet.indexOf(s[0][0])
 secondLetter = alphabet.indexOf(s[1][0])
   
  for (let i = fristLetter; i < secondLetter+1; i++) {
    for (let j = s[0][1]; j <= s[1][1]; j++) {
       arr.push(alphabet[i]+j)
    }
  }

  return arr
};
