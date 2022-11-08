/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    rings = rings.split("")
 obj = {}
for (let i = 0; i < rings.length; i++) {
 for (let j = 0; j <= 9; j++) {
  if(rings[i] == j)
  {
   if( obj[rings[i]])
   {
    obj[rings[i]] = obj[rings[i]] + rings[i-1]
   }else{
    obj[rings[i]] = rings[i-1]
   }
   
  }
 }
  
}
 w = 0
 for (let elment in obj) {
   if (obj[elment].includes('B') && obj[elment].includes('R') && obj[elment].includes('G'))
   {
    ++w
   }
 }
  return w
};
