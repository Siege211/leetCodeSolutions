
function lengthOfLongestSubstring(s) {
    let storage = {};
    let max = 0;
    let left = 0;
    let right = 0;
    while(right < s.length){
        if(storage[s[right]]){
            storage[s[left]] = null;
            left ++;
        }
        else{
            storage[s[right]] = true;
           if(right-left+1>max) {max=right-left+1;}
            right ++;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring('abacdefjkhxabato'))