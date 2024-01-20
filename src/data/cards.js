let deck = [];
deck = generateDeckOfCards();

// add some cards to some hands
deck[0].hand = 101;
deck[1].hand = 201;
deck[22].hand = 101;
deck[34].hand = 201;
deck[35].hand = 202;
deck[51].hand = 202;
deck[25].hand = 202;
deck[44].hand =  333;

function generateDeckOfCards() {
    const suits = ['spades', 'hearts', 'diamonds', 'clubs',];

    let cardIndex = 0;
    suits.forEach(suit => {
      for (let index = 0; index < 13; index += 1) {
        deck.push({
          id: cardIndex,
          suit: suit,
          value: index + 1,
          hand: null,
          // room: null,
          room: 1, // default for testing
        })
        cardIndex += 1;
      }
    })

    return deck;
}

export default deck;