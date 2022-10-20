/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
    
   arr = title.split(" ")
for (i =0 ; i < arr.length ; i++)
{
    
   if(arr[i].length > 2)
   {
       arr[i] = arr[i].toLowerCase()
      arr[i] = arr[i].replace(arr[i],arr[i][0].toUpperCase() + arr[i].slice(1))

  
   }else
   {
   arr[i] = arr[i].toLowerCase();
   }
}
return arr.join(" ")
};

