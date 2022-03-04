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

runGame = () => {
  while (player1.cards.length && player2.length !== 0) {
    if (player1.cards[0].value > player2.cards[0].value) {
      player1.cards.push(player1.cards.shift());
      player1.cards.push(...player2.cards.shift());
      console.log(player1.cards[0], player2.cards[0])
    } else if (player2.cards[0].value > player1.cards[0].value) {
      player2.cards.push(player1.cards.shift());
      player2.cards.push(...player1.cards.shift());
      console.log(player2.cards[0], player1.cards[0])
    } else if (player1.cards[0].value === player2.cards[0].value) {
      console.log(player1.cards[0], player2.cards[0])
      declareWar()
    } if (player2.deck.length === 0) {
      console.log("Player 1 wins!")
    } else if (player2.deck.length === 0) {
      console.log("Player 2 wins!")
    }
  }
  let warDeck = []
  declareWar = () => {
    if (player1.cards.length < 4 || player2.cards.length < 4) {
      if (player1.cards.length = 4) {
        return
      } else {
        player2.cards.length = 0
        return
      }
    } else if (player1.cards[3].value > player2.cards[3].value) {
      warDeck = player1.cards.splice(0, 4)
      warDeck.push(...player2.cards.splice(0, 4))
      player1.cards.push(warDeck)
      console.log(player1.cards[0], player2.cards[0])
    } else if (player2.cards[3].value > player1.cards[3].value) {
      warDeck = player2.cards.splice(0, 4)
      warDeck.push(...player1.cards.splice(0, 4))
      player2.cards.push(warDeck)
      console.log(player2.cards[0], player1.cards[0])
    } else if (player1.cards[3].value === player2.cards[3].value) {
      warDeck = player1.cards.splice(0, 4)
      warDeck.push(...player2.splice(0, 4))
      console.log(player1.cards[0], player2.cards[0])
      declareWar()
    }
  }
}

let currentDeck = new Deck
let player1 = new Player('player1', currentDeck.cards.splice(0, 26))
let player2 = new Player('player2', currentDeck.cards.splice(0))
let play1 = player1.deck.shift()
let play2 = player2.deck.shift()
console.log(player1.deck[0])
console.log(player2.deck[0])
runGame()
// console.log(player1)
// console.log(player2)
//console.log(player1.deck.shift())
//console.log(player2.deck.shift())
