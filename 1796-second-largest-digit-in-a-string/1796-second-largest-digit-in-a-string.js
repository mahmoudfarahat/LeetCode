/**
 * @param {string} s
 * @return {number}
 */
 var secondHighest = function(s) {
    arr = s.split("")
output = {}
    for ( i = 0 ; i< arr.length ; i++)
    {
        if (!(isNaN(arr[i])))
        {
           if(output[arr[i]]){
           ++output[arr[i]]
           }else{
            output[arr[i]] = 1
           }
        }
    }
    if (Object.keys(output).length > 1)
    {
        return     Object.keys(output).sort((a,b) => a-b).reverse()[1] 

    }else{
        return -1 
    }
     
};
