/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    arr =[]
for (i = 0 ; i < candies.length ; i ++)
{
     
    if (candies[i]+extraCandies >=Math.max(...candies) )  
    {
        arr.push(true)
    } else{
        arr.push(false)
    }
    
}
     return arr



};
candies = [2,3,5,1,3], extraCandies = 3
  kidsWithCandies(candies, extraCandies)