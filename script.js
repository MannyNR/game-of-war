class Game {
  constructor(result, round) {
    this.result = result
    this.round = round
  }
}

class Player {
  constructor(name) {
    this.name = name
  }
}

class Card {
  constructor(rank, suit, value) {
    this.rank = rank
    this.suit = suit
    this.value = value
  }
}

class Deck {
  constructor(cards) {
    this.cards = cards
  }
}