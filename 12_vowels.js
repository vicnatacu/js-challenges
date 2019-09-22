/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]

Check your solution by running the tests:
npm test
*/

function vowels(string) {
    // Your code here
        // return (string.match(/[aeiou]/ig)||[]);
        // console.log(string);  
        let array = string.split('');
        let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
        let result = [];
        for(let i = 0; i < array.length; i++) {
            if(vowels.includes(array[i])) {
                result.push(array[i])
           }
        }
        return result;
}
console.log(vowels('The happy happy Hippo'))

module.exports = {
    vowels
}