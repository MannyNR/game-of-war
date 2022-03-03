class Game {
  constructor(player1, player2, deck) {
    this.player1 = player1
    this.player2 = player2
    this.deck = deck
  }
}

class Player {
  constructor(name, deck) {
    this.name = name
    this.deck = deck
  }
}

class Card {
  constructor(suit, rank, value) {
    this.suit = suit
    this.rank = rank
    this.value = value
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
    this.shuffle()
  }
  
  createDeck() {
    const suits = ['♥︎', '♠︎', '♣︎', '♦︎']
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
    
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 2))
      }
    }
  }
  
  shuffle = () => {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempCards = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = tempCards;
    }
  }
}
// run = () => {
//   if (play1.value > play2.value) {
     
//    }
    
//   }
let currentDeck = new Deck
let player1 = new Player('player1', currentDeck.cards.splice(0, 26))
let player2 = new Player('player2', currentDeck.cards.splice(0))
let play1 = (player1.deck.shift())
let play2 = (player2.deck.shift())
// console.log(player1)
// console.log(player2)
console.log(player1.deck.shift())
console.log(player2.deck.shift())
let inPlay = (play1, play2)
console.log(inPlay)