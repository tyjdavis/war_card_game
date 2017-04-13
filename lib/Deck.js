let Card = require('./Card');

function Deck () {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  this.cards = suits.reduce((cards, suit) => {
    return cards.concat(values.reduce((cardsOfSuit, value) => {
      return cardsOfSuit.concat(new Card(value, suit));
    }, []));
  }, []);
  Deck.prototype.deal = function() {
    return this.cards.shift();
    }
  }
module.exports = Deck;
