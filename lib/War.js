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
}

War.prototype.showCards = function () {
  this.table.push(this.playerOneDeck.shift());
  this.table.push(this.playerTwoDeck.shift());
}

War.prototype.whoWins = function () {
  if (this.table[0].rawValue > this.table[1].rawValue) {
    return "Player one wins";
  } else if (this.table[0].rawValue < this.table[1].rawValue) {
    return "Player two wins";
  } else {
    return "War!";
  }
}

War.prototype.gameOn = function () {
  if (this.table[0].rawValue > this.table[1].rawValue) {
    this.playerOneDeck.push.apply(this.playerOneDeck, this.table);
    console.log(this.playerOneDeck.length);

  } else if (this.table[0].rawValue == this.table[1].rawValue) {
      
  }
}



module.exports = War;
