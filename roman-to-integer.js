
const digitVals = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}
var romanToInt = function(s) {
    //if 1 the left is lesser numbers
    // then subtract by those numbers
    //if 1,2,3
    let counter = 0;
    for (let i=0;i<s.length;i++) {
        if (i>0 && digitVals[ s[i-1] ] < digitVals[s[i]] ) {
            counter += digitVals[s[i]] - digitVals[s[i-1]];
            counter -= digitVals[s[i-1]];
        }
        else {
            counter += digitVals[s[i]];
        }
    }
    
    return counter;
};