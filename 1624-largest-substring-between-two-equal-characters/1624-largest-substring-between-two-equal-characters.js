/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
    j =0
    u = false
    output = []
    s.split("").forEach(el =>{
        if (s.split("").indexOf(el)  !== (s.split("").lastIndexOf(el)))
        {
            if(s.split("").lastIndexOf(el)-s.split("").indexOf(el)-1){
                
                j = s.split("").lastIndexOf(el)-s.split("").indexOf(el)-1
                 output.push(j)
                 u = true
                
            }else if (s.split("").lastIndexOf(el)-s.split("").indexOf(el)-1 == 0){
                u = true
            }
        
            
          
        }
      
        
    })


if (j === 0 && !u  )
{
 j = -1   
}
if (output.length > 0)
{
    j = Math.max(...output)
}
     return j
};
