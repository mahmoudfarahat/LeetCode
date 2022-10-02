
  /**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let arr = []
    accounts.forEach(a => {
     
       arr.push(a.reduce((a, b) => a + b, 0))
       
    })


    return Math.max(...arr)
 

};
