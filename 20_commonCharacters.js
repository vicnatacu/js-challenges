/*
Write code which will return the common characters found in
two different strings. You should only need to return the
characters once.

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""

*/

function commonCharacters(string1, string2) {
    // Your code here
   let outcome = ""
   for(let i of string1.replace(/ /g, "")) {
       if (string2.includes(i) && !outcome.includes(i)) {
           outcome += i;
       }
   }
   return outcome;
  
} 
console.log(commonCharacters('Riding on a buffalo makes me more approachable', 'so what'));

module.exports = {
    commonCharacters
};