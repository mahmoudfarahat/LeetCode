/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
    
   let j = 0;

   for ( i = 0 ; i < patterns.length; ++i)
   {
       word.includes(patterns[i])? ++j :0
       
   }

   return j
};
