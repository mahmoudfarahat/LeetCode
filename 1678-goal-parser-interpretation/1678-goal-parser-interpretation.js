/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    

  while(command.includes('()'))
  {
    command = command.replace('()','o')
  }
  while(command.includes('(al)'))
  {
    command = command.replace('(al)','al')
  }
  


  return command

 
};
