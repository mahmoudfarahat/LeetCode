/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
arr =[]

 for (let i = 0; i < emails.length; i++) {
  email = ''
   email =  emails[i]
  email = email.replaceAll(/\+\w+((\.\w+)+)?/g,"") 
  
   for (let j = 0; j < email.length; j++) {
   if(email[j] === '.')
   {
     if( j < email.indexOf('@') )
    {
      // console.log(j , email[i].indexOf('@'))   
      email = email.replace('.' , "") 
    }
   }
   }
   console.log(email)
  arr.push(email)
 
  
 }

 return [...new Set(arr)].length
};
