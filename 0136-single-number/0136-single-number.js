 

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
obj = {}

for(let i = 0 ; i < nums.length ; ++i)
{
    if(obj[nums[i]]){
        ++obj[nums[i]]
    }else{
        obj[nums[i]] = 1
    }
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  return getKeyByValue(obj,1);
 


    
};


