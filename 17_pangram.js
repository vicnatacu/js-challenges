/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once.

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not.

If the given string has any uppercase or numbers, it should return false

*/

function isPangram(string) {
    let array = string.toUpperCase().split('');
    let abc = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for(let i = 0; i < abc.length; i++) {
        if(!array.includes(abc[i].toUpperCase())) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isPangram
};