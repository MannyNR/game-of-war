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

let currentDeck = new Deck
let player1 = new Player('player1', currentDeck.cards.splice(0, 26))
let player2 = new Player('player2', currentDeck.cards.splice(0))

const runGame = () => {
  while (player1.deck.length !== 0 && player2.deck.length !== 0) {
    if (player1.deck[0].value > player2.deck[0].value) {
      let array = [player1.deck.shift(), player2.deck.shift()]
      player1.deck.push(...array);
      console.log(player1.deck[0], player2.deck[0])
      console.log("player 1 wins", player1.deck.length, player2.deck.length)
    } else if (player2.deck[0].value > player1.deck[0].value) {
      let array = [player1.deck.shift(), player2.deck.shift()]
      player2.deck.push(...array);
      console.log(player1.deck[0], player2.deck[0])
      console.log("player 2 wins", player1.deck.length, player2.deck.length);
    } else if (player1.deck[0].value === player2.deck[0].value) {
      console.log(player1.deck[0], player2.deck[0])
      console.log("tie", player1.deck.length, player2.deck.length)
      if (player1.deck.length < 5) {
        player1.deck.length = 0
        console.log(player1.deck, player2.deck)
        console.log("Player 2 wins the whole game!")
        return
      } else if (player2.deck.length < 5) {
        player2.deck.length = 0
        console.log("Player 1 wins the whole game!")
        return
      } else {
        declareWar()
      }
    }
  }
  if (player2.deck.length === 0) {
    console.log("Player 1 wins the whole game!")
  } else if (player1.deck.length === 0) {
    console.log("Player 2 wins the whole game!")
  }
}

let warDeck = []
let declareWar = () => {
  // if player 1 or 2 have less than 4 cards
  let temp = player1.deck.splice(0, 4)
  let temp2 = player2.deck.splice(0, 4)
  warDeck.push(...temp, ...temp2)
  if (player1.deck[0].value > player2.deck[0].value) {
    player1.deck.push(...warDeck)
    warDeck.length = 0
    console.log(player1.deck[0], player2.deck[0])
  } else if (player2.deck[0].value > player1.deck[0].value) {
    player2.deck.push(...warDeck)
    warDeck.length = 0
    console.log(player1.deck[0], player2.deck[0])
  } else if (player1.deck[0].value === player2.deck[0].value) {
    console.log(player1.deck[0], player2.deck[0])
    declareWar()
  }
}


runGame()