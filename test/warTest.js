/*
Each of two players gets 26 cards. -done

In one round of play, each player shows the first card from his/her hand. -done

The player with the high card wins the round, and puts both cards at the bottom of his/her hand. -done

If both cards have the same value, "war" is declared. - done

Each player places a second card face down on top of the first, and then a third, face up, on top of the second. -done
The player with the high third card wins the round, and puts all six cards at the bottom of his/her hand. If the third cards tie, continue with another war.-done

The winner is the player who ends up with all of the cards. -done
*/


const assert = require('assert');
const War = require('../lib/War');
const Card = require('../lib/Card');
const Deck = require('../lib/Deck');


describe('War', function () {
  let game;
  let gameStart;
  beforeEach(function () {
    game = new War('Tyler', 'Idiot');
    gameStart = game.gameStart();
  })
  it('Game has two players', function() {
    assert.equal(game.playerOne, 'Tyler');
    assert.equal(game.playerTwo, 'Idiot');
  })
  describe('#gameStart()', function (){
    it('PlayerOne has 26 cards', function (){
        assert.equal(game.playerOneDeck.length, 26);
    })
    it('PlayerTwo has 26 cards', function (){
        assert.equal(game.playerTwoDeck.length, 26);
    })
    describe('#getRawValues()', function(){
      it('Face cards have raw values', function(){
        let card = new Card('King', 'Clubs');
        assert.equal(card.rawValue, 13);
      })
    })
    describe('#showCards()', function (){
      it('Each player shows first card and places on table', function (){
        game.showCards();
        assert.equal(game.table.length == 2, true);
      })
    })
    describe('#possibleOutcome()', function(){
      it('PlayerOne can win', function(){
        game.showCards();
        game.table[0].rawValue = 10;
        game.table[1].rawValue = 2;
        game.possibleOutcome();
        assert.equal(game.possibleOutcome(), "Player one wins");
      })
      it('PlayerTwo can win', function (){
        game.showCards();
        game.table[0].rawValue = 2;
        game.table[1].rawValue = 10;
        game.possibleOutcome();
        assert.equal(game.possibleOutcome(), "Player two wins");
      })
      it('A War can occur', function () {
        game.showCards();
        game.table[0].rawValue = 10;
        game.table[1].rawValue = 10;
        game.possibleOutcome();
        assert.equal(game.possibleOutcome(), "War!");
      })
    })
    describe('#evaluateOutcome()', function(){
      it('Winner takes both cards and puts at bottom of their deck', function(){
      game.showCards();
      game.table[0].rawValue = 10;
      game.table[1].rawValue = 9;
      game.evaluateOutcome();
      assert.equal(game.playerOneDeck.length, 27);
      })
      it('War time', function(){
        game.showCards();
        game.table[0].rawValue = 10;
        game.table[1].rawValue = 10;
        game.evaluateOutcome();
        assert.equal(game.playerOneDeck.length, 31);
      })
    })
  })
  describe('#gameOver()', function (){
    it('Game ends when a player has 52 cards', function (){
      game.showCards();
      game.gameOver();
      game.playerTwoDeck.length = 52;
      game.playerOneDeck.length = 52;
      assert.equal(game.gameOver(), "Game Over");
    })
  })
})
