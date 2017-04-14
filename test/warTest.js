/*
Each of two players gets 26 cards. -done

In one round of play, each player shows the first card from his/her hand. -done

The player with the high card wins the round, and puts both cards at the bottom of his/her hand.

If both cards have the same value, "war" is declared. - done
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
    describe('#getRawValues()', function(){
      it('face cards have raw values', function(){
        let card = new Card('King', 'Clubs');
        assert.equal(card.rawValue, 13)
      })
    })
    describe('#showCards()', function (){
      it('playerOne shows first card', function (){
        let game = new War('Tyler', 'Idiot');
        let showCard = game.showCard1();
        assert(showCard);
        //console.log(showCard);
      })
      it('playerTwo shows first card', function (){
        let game = new War('Tyler', 'Idiot');
        let showCard = game.showCard2();
        assert(showCard);
        //console.log(showCard);
      })
    })
    describe('#whoWins()', function(){
      it('playerOne can win', function(){
        let game = new War('Tyler', 'Idiot');
        game.playerOneDeck[0].rawValue = 10;
        game.playerTwoDeck[0].rawValue = 2;
        let whoWins = game.whoWins();
        assert.equal(whoWins, "Player one wins")
      })
      it('playerTwo can win', function (){
        let game = new War('Tyler', 'Idiot');
        game.playerOneDeck[0].rawValue = 2;
        game.playerTwoDeck[0].rawValue = 10;
        let whoWins = game.whoWins();
        assert.equal(whoWins, "Player two wins")
      })
      it('a War can occur', function () {
        let game = new War('Tyler', 'Idiot');
        game.playerOneDeck[0].rawValue = 10;
        game.playerTwoDeck[0].rawValue = 10;
        let whoWins = game.whoWins();
        assert.equal(whoWins, "War!")
      })
    })
  })
})
