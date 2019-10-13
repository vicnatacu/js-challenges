/*
Find the unique string in an array. A unique string contains characters that are not present in any other string in the array. Return the string that is unique.

Example:
uniqueString(["alright", "isod", "Alright", "ALRIGHT"]) => "isod"

Test your solution:
npm test
*/

function getUnique(string) {
    for(let key of Object.keys(string)) {
        if(string[key].length == 1) 
            return string[key][0]
    }
}

function uniqueString(array) {
    let unique = {};
    for(let word of array) {
        let orderedSetOfChars = [...new Set(word.toLowerCase())].sort().join('');
        if (Object.keys(unique).includes(orderedSetOfChars)) {
            unique[orderedSetOfChars].push(word);
        } else {
            unique[orderedSetOfChars] = [word]
        }
        
    }
    return getUnique(unique);
}
console.log(uniqueString(["alright", "isod", "Alright", "ALRIGHT"])) 
module.exports = {
    uniqueString
};