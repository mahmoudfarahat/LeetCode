  /**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    
    let output = 0


    for(i = 0 ; i <operations.length ;i++ )
    {
        switch (operations[i]){
            case '--X':
            case 'X--':
                --output
                break;  
            case '++X':
            case 'X++':   
                ++output 
                break;
        }
      

    }
return output
};


 