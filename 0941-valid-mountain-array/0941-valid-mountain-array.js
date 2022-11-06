/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
 if(arr.length < 2) {return false } 
 up = 0
 down = 0
 for (let i = 0; i < arr.length; i++) {
  if(arr[i+1] == arr[i])
  {
   return false
  }
  
  if(arr[i+1] > arr[i])
  {
   if(down == 0)
   {
     ++up
   }else{
    return false
   }
  
  }else if (arr[i+1] < arr[i])
  {
   if( up > 0)
   {
    ++down
   }else{
    return false
   }
   
  }

  
 }
if (down == 0 ){
    return false
}
  return true
};
