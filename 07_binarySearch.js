/*
Write a method which will act as a binary search which will find the 
position and the actual number of steps required to find the position. 
When the array has an even number of values the midpoint index will be rounded up.

Example:
    binaryArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.

*/

function binarySearch(binaryArray, searchValue) {
    // Your code here
    let binArr = binaryArray.slice(0);
    let mid = Math.floor(binArr.length/2);
    let num = searchValue;
    let len = binArr.length;
    let offset = 0;
    let steps = 0;
    while (true) {
        steps++;
        if(binArr[mid] === num) {
            return [mid + offset, steps];
;        } else if (binArr[mid] > num) {
            binArr.splice(mid, len-mid);
            len = binArr.length;
            mid = Math.floor(len/2)
            
        } else {
            let chopped = binArr.splice(0, mid+1)
            len = binArr.length;
            mid = Math.floor(len/2);
            offset += chopped.length;
        }
    
    }


}

module.exports = {
    binarySearch
};