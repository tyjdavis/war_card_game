/*
Each of two players gets 26 cards. -done

In one round of play, each player shows the first card from his/her hand. -done

The player with the high card wins the round, and puts both cards at the bottom of his/her hand.

If both cards have the same value, "war" is declared.
Each player places a second card face down on top of the first, and then a third, face up, on top of the second. The player with the high third card wins the round, and puts all six cards at the bottom of his/her hand. If the third cards tie, continue with another war.

The winner is the player who ends up with all of the cards.


*/


const assert = require('assert');
const War = require('../lib/War');
const Card = require('../lib/Card');
const Deck = require('../lib/Deck');


describe('War', function () {
  it('has two players', function() {
    let game = new War('Tyler', 'Idiot');
    assert.equal(game.playerOne, 'Tyler');
    assert.equal(game.playerTwo, 'Idiot');
  })
  describe('#gameStart()', function (){
    it('playerOne has 26 cards', function (){
      let game = new War('Tyler', 'Idiot');
      assert.equal(game.playerOneDeck.length, 26);
    })
    it('playerTwo has 26 cards', function (){
      let game = new War('Tyler', 'Idiot');
      assert.equal(game.playerTwoDeck.length, 26)
    })
    describe('#showCard', function (){
      it('playerOne shows first card', function (){
        let game = new War('Tyler', 'Idiot');
        let showCard = game.showCard1();
        assert.equal(showCard, "Ace");
      })
      it('playerTwo shows first card', function (){
        let game = new War('Tyler', 'Idiot');
        let showCard = game.showCard2();
        assert.equal(showCard, "2");
      })
      describe('#whoWins', function(){
        it('player with highest card wins', function(){
          let game = new War('Tyler', 'Idiot');

          assert.equal()
        })
      })
    //player with highest card wins first round.
    })
  })
})











//
// var assert = require('assert');
// var Deck = require('../lib/MakeDeck');
// var Card = require('../lib/Card');
//
// describe('Deck', function() {
//   describe('MakeDeck()', function() {
//     it('should make a deck with a size equal to suits * values', function() {
//       assert.equal(Deck.MakeDeck(2,3).length, 6);
//       assert.equal(Deck.MakeDeck(2,4).length, 8);
//     });
//   });
// });
//
//
// describe('Card', function() {
//   describe('Constructor', function() {
//     it('should make a new card with predicted suit and rank.', function() {
//       var newCard = new Card(1,2)
//       assert.equal(newCard.suit, 1);
//       assert.equal(newCard.rank, 2);
//     });
//   });
// });
