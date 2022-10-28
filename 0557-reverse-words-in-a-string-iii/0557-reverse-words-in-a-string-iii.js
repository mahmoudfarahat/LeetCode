/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

 arr =[] 
 arr2 =  s.split(" ")

 for (let i = 0; i < arr2.length; i++) {
 arr.push(arr2[i].split("").reverse().join(""))
 }
 return arr.join(" ")
};
