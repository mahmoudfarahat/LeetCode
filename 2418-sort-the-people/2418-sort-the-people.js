/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
   
   obj = {}

   arrheights = []

   arrNames = []


   while(heights.length > 0 ){

      arrheights.push(Math.max(...heights))

      arrNames.push(names[heights.indexOf(Math.max(...heights))])
 
      names.splice( heights.indexOf(Math.max(...heights)) , 1)

      heights.splice( heights.indexOf(Math.max(...heights)) , 1)
   }

 
    return arrNames


 
};
