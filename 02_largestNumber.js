/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largestNumber.js

Question: Why does the test pass for the third (last) test 
with no changes to the function?
*/

//This function when given an array of numbers determines which is largest.
function largestNumber(arr) {
    // Your code here
    
    let max = -Infinity;
   
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
     

    }
    if (max === -Infinity) {
        return null
    }
    return max
}




var assert = require('assert');

describe('largestNumber', function () {
    it('should return the largest number', function () {
        assert.equal(10, largestNumber([5, -2, 10]));
    });
    it('should ignore invalid array entries', function () {
        assert.equal(10, largestNumber([10, 10, 's']));
    });
    it('should return null if the array is empty', function () {
        assert.equal(null, largestNumber([]));
    });

});