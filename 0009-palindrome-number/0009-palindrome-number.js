/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    str = x.toString()

    left = 0
    right = str.length-1
    while (right>left) {
        if(str[left] == str[right])
        {
            ++left
            --right
        }else{
            return false
        }
        
    }
    return true
};