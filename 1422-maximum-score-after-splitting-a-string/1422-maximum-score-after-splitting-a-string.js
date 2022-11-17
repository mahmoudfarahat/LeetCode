/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
 left = []
 right = []
 arr = []
 for (let i = 1; i < s.length; i++) {
   left.push(s.substr(0,i))
   right.push(s.substr(i))
 }

 for (let i = 0; i < left.length; i++) {
  for (let j = 0; j < left[i].length; j++) {
   if(left[i][j] == 1)
   {
    left[i] = left[i].replaceAll(left[i][j],'')
   }
  }
 }
  for (let i = 0; i < right.length; i++) {
  for (let j = 0; j < right[i].length; j++) {
   if(right[i][j] == 0)
   {
    right[i] = right[i].replaceAll(right[i][j],'')
   }
  }
 }
 
for (let i = 0; i < right.length; i++) {
 arr.push(right[i].length +left[i].length  )
}

 
 return Math.max(...arr)
 
 
};

