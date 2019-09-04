const findWinner = require('./05_sumNumbers').findWinner

class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
    
}
//Added a prototype function to calculate totalScores for players.
Player.prototype.totalScores = function() {
    let totalScore = 0;
    for(let score of this.scores) {
        totalScore += score;
    }
    return totalScore;
}

let players = []
describe('findWinner', function () {
    test('Should return the winner when winner is first in array', function () {
        players = [new Player('James', [50, 100, 85]), new Player('Nathan', [40, 90, 86])]
        expect(findWinner(players)).toBe('James');
    })
    test('Should return the winner when winner is second in array', function () {
        players = [new Player('James', [40, 90, 86]), new Player('Nathan', [50, 100, 85])]
        expect(findWinner(players)).toBe('Nathan');
    })
    test('Should return the first player when both players are tied', function () {
        players = [new Player('Nathan', [50, 100, 85]), new Player('James', [50, 100, 85])]
        expect(findWinner(players)).toBe('Nathan');
    })
})