/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<2) {return s;}
   const checkPalindrome = function(string) {
        for (let left = 0, right=string.length-1; left<string.length/2; left++, right--) {
                    if (string[left]!==string[right]) {
                        return false
                    }
                }
       return true;
   }
   
        for (let i = 0;i<s.length;i++) {
            for (let j=0;j<=i;j++) {
                let subString = s.substring(j,s.length-i+j);
                console.log(subString,checkPalindrome(subString));
               if (checkPalindrome(subString)) {
                   return subString;
               }
            }
        }
    
};



longestPalindrome('fedadc')