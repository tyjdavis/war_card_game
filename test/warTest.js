/*
Each of two players gets 26 cards. -done

In one round of play, each player shows the first card from his/her hand. -done

The player with the high card wins the round, and puts both cards at the bottom of his/her hand. -done

If both cards have the same value, "war" is declared. - done

Each player places a second card face down on top of the first, and then a third, face up, on top of the second. -done
The player with the high third card wins the round, and puts all six cards at the bottom of his/her hand. If the third cards tie, continue with another war.-done

The winner is the player who ends up with all of the cards.
*/


const assert = require('assert');
const War = require('../lib/War');
const Card = require('../lib/Card');
const Deck = require('../lib/Deck');


describe('War', function () {
  let game;
  beforeEach(function () {
    game = new War('Tyler', 'Idiot');
  })
  it('has two players', function() {
    game.gameStart();
    assert.equal(game.playerOne, 'Tyler');
    assert.equal(game.playerTwo, 'Idiot');
  })
  describe('#gameStart()', function (){
    it('playerOne has 26 cards', function (){
      game.gameStart();
      assert.equal(game.playerOneDeck.length, 26);
    })
    it('playerTwo has 26 cards', function (){
      game.gameStart();
      assert.equal(game.playerTwoDeck.length, 26);
    })
    describe('#getRawValues()', function(){
      it('face cards have raw values', function(){
        game.gameStart();
        let card = new Card('King', 'Clubs');
        assert.equal(card.rawValue, 13);
      })
    })
    describe('#showCards()', function (){
      it('each player shows first card', function (){
        game.gameStart();
        game.showCards();
        assert.equal(game.table.length == 2, true);
      })
    })
    describe('#whoWins()', function(){
      it('playerOne can win', function(){
        game.gameStart();
        game.showCards();
        game.table[0].rawValue = 10;
        game.table[1].rawValue = 2;
        game.whoWins();
        assert.equal(game.whoWins(), "Player one wins");
      })
      it('playerTwo can win', function (){
        game.gameStart();
        game.showCards();
        game.table[0].rawValue = 2;
        game.table[1].rawValue = 10;
        game.whoWins();
        assert.equal(game.whoWins(), "Player two wins");
      })
      it('a War can occur', function () {
        game.gameStart();
        game.showCards();
        game.table[0].rawValue = 10;
        game.table[1].rawValue = 10;
        game.whoWins();
        assert.equal(game.whoWins(), "War!");
      })
    })
    describe('#gameOn()', function(){
      it('winner takes both cards and puts at bottom their deck', function(){
      game.gameStart();
      game.showCards();
      game.table[0].rawValue = 10;
      game.table[1].rawValue = 9;
      game.gameOn();
      assert.equal(game.playerOneDeck.length, 27);
      })
      it('war', function(){
        game.gameStart();
        game.showCards();
        game.table[0].rawValue = 10;
        game.table[1].rawValue = 10;
        game.gameOn();
        assert.equal(game.playerOneDeck.length, 31);
      })
      it('gameover', function (){
        game.gameStart();
        game.showCards();
        game.gameOn();
        result = "game over"
        assert.equal(game.playerOneDeck.length, 52);
      })
    })
  })
})
