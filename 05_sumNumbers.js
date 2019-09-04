// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test

//Changed function to work with the prototype function that I added to sumNumbers.test.js 
function findWinner(players) {
    // Your code here

    let winner = players[0].name;
    let winnerScore = players[0].totalScores();
    for (let ind = 1; ind < players.length; ind++) {
        let playerTotalScore = players[ind].totalScores()
        if(playerTotalScore > winnerScore) {
            winner = players[ind].name;
            winnerScore = playerTotalScore;

        }
    }

    return winner;   
}


// function totalScores(scores) {
//     //Calculates the total of the array of score taht is 
//     //passed in 
//    let totalScore = 0;
//    for(let score of scores) {
//        totalScore += score;
//    }
//    return totalScore;
// }

module.exports = {
    findWinner
}