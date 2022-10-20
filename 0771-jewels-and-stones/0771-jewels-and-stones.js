 var numJewelsInStones = function(jewels, stones) {
    
   let j =0 

   for ( i = 0 ; i < stones.length; ++i)
   {
      jewels.includes(stones[i])? ++j : 0
      
   }



return j 
   
};
