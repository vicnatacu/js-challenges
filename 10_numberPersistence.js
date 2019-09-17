/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3 
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4 
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/

function persistence(num) {
    //enter code here
    let count = 0;
    
    let array = num.toString().split('');
    let digits = array.map(Number);
    while (digits.length > 1) {
        let sum = 1;
        for(let i = 0; i < digits.length; i++) {
            sum *= digits[i];
        } 
        count++;
        digits = sum.toString().split('').map(Number); 
    }
    return count;  
}
console.log(persistence(731))

module.exports = {
    persistence
}