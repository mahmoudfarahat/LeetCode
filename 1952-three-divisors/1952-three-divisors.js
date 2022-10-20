/**
 * @param {number} n
 * @return {boolean}
 */
 var isThree = function(n) {
let j =0;
   for ( i = 0 ; i <= n ; ++i)
   {
      if (n % i ==0  ){
         ++j

      }
   }

   return j === 3 
    
};

