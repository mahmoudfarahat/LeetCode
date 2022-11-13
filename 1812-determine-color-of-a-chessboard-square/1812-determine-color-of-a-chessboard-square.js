/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) { 
   alphabet = ['a','b','c','d','e','f','g','h']

 coordinates = coordinates.split("")

  return !(alphabet.indexOf(coordinates[0]) % 2 == 0 && coordinates[1] % 2 != 0  || alphabet.indexOf(coordinates[0]) % 2 != 0 && coordinates[1] % 2 == 0 )
  
    
   
  
 
   
};

