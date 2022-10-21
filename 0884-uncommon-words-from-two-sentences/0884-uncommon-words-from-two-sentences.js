/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let output = []
s1.split(" ").forEach(element => {
  if(!(s2.split(" ").includes(element)))
  {
    if(s1.split(" ").indexOf(element) === s1.split(" ").lastIndexOf(element))
    {
      output.push(element)
    }
     
  }
});
s2.split(" ").forEach(element => {
  if(!(s1.split(" ").includes(element)))
  {
    if(s2.split(" ").indexOf(element) === s2.split(" ").lastIndexOf(element))
    {
      output.push(element)
    }
  }
});

return output
};

