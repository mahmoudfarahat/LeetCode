/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
alphbet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
 arr = []
 newArr = []
 for (let i = 0; i < words.length; i++) {
  p = words[0].length
  for (let j = 0; j < words[i].length; j++) {
   --p
   if(p != 0)
      {
 arr.push(alphbet.indexOf(words[i][j+1])-alphbet.indexOf(words[i][j])) 
      }
  
 }}
const chunkSize = words[0].length-1;
for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    // do whatever
 newArr.push(chunk.toString())
}

 obj = []
 for (let i = 0; i < newArr.length; i++) {
  if(obj[newArr[i]])
  {
   obj[newArr[i]]++
  }else
  {
   obj[newArr[i]]= 1
  }
 }

for (let element in obj) {
 if(obj[element] == 1)
 {
  return words[newArr.indexOf(element)]
 }
}


 
 
  
};
