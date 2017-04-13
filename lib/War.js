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
  this.showCard1();
  this.showCard2();
  this.whoWins();
}

War.prototype.getCardsPlayerOne = function () {
  this.playerOneDeck.push(this.deck.deal());
  //console.log(playerOneDeck);
}

War.prototype.getCardsPlayerTwo = function () {
  this.playerTwoDeck.push(this.deck.deal());
}

War.prototype.showCard1 = function () {
  return this.playerOneDeck[0].value;
}

War.prototype.showCard2 = function () {
  return this.playerTwoDeck[0].value;
}

War.prototype.whoWins = function () {
  if (this.playerOneDeck[0] > this.playerTwoDeck[0]){
    return "player one wins";
  }
  else if (this.playerTwoDeck[0] > this.playerOneDeck[0]) {
    return "player two wins";
  }
}




module.exports = War;
