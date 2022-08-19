/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
   let i =0 
    items.forEach(element => {
      if (ruleKey == "color")
      {
        if (element[1] == ruleValue )
        {
           i++
        }
      }
      if (ruleKey == "type")
      {
        if (element[0] == ruleValue )
        {
            i++
        }
      }
      if (ruleKey == "name")
      {
        if (element[2] == ruleValue )
        {
            i++
        }
      }


      
});


return i
};


Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"


countMatches(items, ruleKey, ruleValue)