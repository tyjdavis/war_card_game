let Card = require('./Card');
let Deck = require('./Deck');

function War (playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.deck = new Deck;
  this.playerOneDeck = [];
  this.playerTwoDeck = [];
  this.gameStart();
}

War.prototype.gameStart = function() {
  for(let i = 0; i < 26; i ++) {
    this.getCardsPlayerOne();
    this.getCardsPlayerTwo();
  }
}

War.prototype.getCardsPlayerOne = function () {
  this.playerOneDeck.push(this.deck.deal());
}

War.prototype.getCardsPlayerTwo = function () {
  this.playerTwoDeck.push(this.deck.deal());
}



module.exports = War;
