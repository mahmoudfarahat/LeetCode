/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
if (s.trim().length == 0 )
    {
          return 0
    }
   while (s.includes('  ')) {
       s = s.replace('  ',' ')
       
   }
 return s.trim().replaceAll('  ',' ').split(" ").length
};