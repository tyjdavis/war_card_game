let Card = require('./Card');
let Deck = require('./Deck');


function War (playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.deck = new Deck;
  this.playerOneDeck = [];
  this.playerTwoDeck = [];
  this.table = [];
}



War.prototype.gameStart = function() {
  this.deck.shuffle();
  for(let i = 0; i < 26; i ++) {
    this.playerOneDeck.push(this.deck.deal());
    this.playerTwoDeck.push(this.deck.deal());
  }
  this.whoWins();
}

War.prototype.showCard1 = function () {
  this.table.push(this.playerOneDeck.shift());
  console.log(this.table);
}

War.prototype.showCard2 = function () {
  this.table.push(this.playerTwoDeck.shift());
  console.log(this.table);
}

War.prototype.whoWins = function () {
  if (this.playerOneDeck[0].rawValue > this.playerTwoDeck[0].rawValue) {
    return "Player one wins";
  } else if (this.playerOneDeck[0].rawValue < this.playerTwoDeck[0].rawValue) {
    return "Player two wins";
  } else {
    return "War!";
  }
}

War.prototype.gameOn = function () {

}



module.exports = War;
