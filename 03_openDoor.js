/*
Open Door

You will only open the door if Simon is there with coffee.

The openDoor function should return true if 
at least one person at the door has the name Simon,
and hasCoffee is true. Otherwise return false.

Does your solutino work when only one person is at the door? 
What if no one is there?

Beast mode: make it work when multiple people come to the door

Test your solution:
npm test

(requires jest: npm i -g jest)
*/

//Input is an array of of objexts, where each object as two properties:
//name: string
//hasCoffe: boolean
function openDoor(people) {

	// Your code here
	for (let i=0; i < people.length; i++) {
		if (people[i].name.toLowerCase() === 'simon' && people[i].hasCoffee === true)  {
		return true;
		}
		
	}
	return false;
}
module.exports = {
	openDoor	
	
}

