/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
        obj = {}
   
    for (let i = 0; i < arr.length; i++) {
            if(obj[arr[i]]){
                    
                    obj[arr[i]]++
            }else{
                    obj[arr[i]] = 1
                     
            }
               
    }

     newArr =    Object.values(obj).map(a => {
                if(a ==1 )
            {
                return a
            }
        })  
    
    newIndex = []
 
  
    
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i])
        {
            newIndex.push(i)
        }
    }
    
     if (newIndex.length < k) return ""
   return Object.keys(obj)[newIndex[k-1]]
   
            
};