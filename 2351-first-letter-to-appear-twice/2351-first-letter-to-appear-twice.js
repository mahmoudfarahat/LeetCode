/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {

    arr = s.split("")
    output = {}

   
    j =0 ;
   for ( i = 0 ; i < arr.length ; ++i){
        if (output[arr[i]])
        {
            return  arr[i] 
        }else{
            output[arr[i]] = 1
        }
   }
    



    
};
