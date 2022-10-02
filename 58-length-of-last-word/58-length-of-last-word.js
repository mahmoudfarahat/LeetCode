/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().slice(s.trim().lastIndexOf(' ')+1).length
};