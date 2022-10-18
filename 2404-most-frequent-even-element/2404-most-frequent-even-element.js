/**
 * @param {number[]} nums
 * @return {number}
 */
 var mostFrequentEven = function(nums) {
    

output = {}

for (i = 0 ; i < nums.length ; i++)
{
  if (nums[i] % 2 == 0 )
  {
    if(output[nums[i]])
    {
      ++output[nums[i]]
    }else{
      output[nums[i]] = 1
    }
  } 
}
     if(Object.keys(output).length === 0 )
{
  return -1
}
newArray = []
for (let j in output)
{
  newArray.push(output[j])
}
 
maxNum = Math.max(...newArray)

var matched = Object.keys(output).filter(function(key) {
  return output[key] === maxNum;
});

return Math.min(...matched)

};