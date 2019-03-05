/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x>Math.pow(2,31)-1 || x<Math.pow(-2,31)) {return 0;}
    let negative = false;
    let counter = 0;
    let y;
    if (x<0) {
        negative = true;
        y = 0-x;
    }
    let str = negative? y.toString() : x.toString();
    for (let i=0;i<str.length;i++) {
       counter+=str[i]*Math.pow(10,i)
    }
    if (negative) {counter = 0-counter;}
    if (counter>Math.pow(2,31)-1 || counter<Math.pow(-2,31)) {return 0;}
    return counter
};