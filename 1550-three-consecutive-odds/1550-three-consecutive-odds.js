/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var threeConsecutiveOdds = function(arr) {
    a=0

    for(i = 0 ; i <arr.length ; i++)
    {
       
        
        if (arr[i]%2 != 0)
        {
            a++
        } else if (arr[i]%2 == 0){
            a = 0
        }

        if ((arr[i]%2 != 0) && a >= 3){
                return true
        }

    }
     
     if ( a <3)
         {
             return false
         }

    
};


 