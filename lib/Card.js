function Card (value, suit) {
  this.value = value;
  this.suit = suit;
  this.rawValue = this.getRawValue();
}

Card.prototype.getRawValue = function(){
  if (typeof this.value == 'number') {
    return this.value;
  }
  if (this.value == "Jack"){
    return 11;
  }
  if (this.value == "Queen"){
    return 12;
  }
  if (this.value == "King"){
    return 13;
  }
  if (this.value == "Ace"){
    return 14;
  }
}

module.exports = Card;
