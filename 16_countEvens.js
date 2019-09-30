/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
    // Your code here
    let count = 0;
    for(let i =0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++; 
            
        }
        
    }
    return count;
}
// console.log(countEvens([1,2,4,6,8,9]));

module.exports = {
    countEvens
}


