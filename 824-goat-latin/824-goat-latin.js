 const vowel = {
    "a": "a",
    "e": "e",
    "i": "i",
    "o": "o",
    "u": "u",
    "A": "A",
    "E": "E",
    "I": "I",
    "O": "O",
    "U": "U",
}
 var toGoatLatin = function(sentence) {
    output ='';
    sentence = sentence.split(' ')
    for ( i = 0 ; i<sentence.length ; i++)
    {
       if(vowel[sentence[i][0]])
       {
            word = sentence[i] + "ma"
       }else{

        word = sentence[i].substr(1)+ sentence[i][0] +"ma"
         
       }

       for (j =0 ; j<= i ; j++)
       {
           word += "a"
       }

 output += word + (i !== sentence.length-1? ' ': '') 
    }

   
return output
    };