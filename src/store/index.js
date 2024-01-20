import { createStore } from 'vuex'

// The entire apps open data will be kept in the store
// There will be data for the active game.

export default createStore({
  state: {
    // Seats will be an array of the current room's seats
    seats: [],
    // Each active player has a hand, hands are generated as soon as a round starts
    hands: [],
    // All the cards assigned to this room
    cards: [],
    // Object containing data about the current room
    room: {
      id: null,
      name: '',
      activeSeat: null,
      activeTurnTime: null,
    },
    dealer: {

    },
    user: {

    },

    // cards: suit, value, hand, room
    // hands: seat
    // seat: room, player, number, next player, status
    // -- seat can have status. ready, playing, leaving
    // room: name
    
  },
  actions: {
    updateRoom({ commit } , data ) { 
      console.log(data)
      commit('UPDATE_Room', data);
    },
    updateUser({ commit }, data ) {
      commit('UPDATE_User', data);
    },
    updateSeats({ commit }, data ) {
      commit('UPDATE_Seats', data);
    },
    updatePlayers({ commit }, data ) {
      commit('UPDATE_Players', data);
    },
    updateHands({ commit }, data ) {
      commit('UPDATE_Hands', data);
    },
    updateCards({ commit }, data ) {
      commit('UPDATE_Cards', data);
    },
    addCardToHand({ commit }, data ) {
      console.log('addCardToHand', data);
      commit('addCardToHand', data);
    },
    setActiveTurn({ commit }, data ) {
      commit('setActiveTurn', data);
    },

    sitPlayer({ commit }, data ) {
      commit('assignPlayerToSeat', data);
    }
  },
  mutations: {
    UPDATE_Seats(state, data) {
      state.seats = data;
    },
    UPDATE_User(state, data) {
      console.log('UPDATE_User', data);
      state.user = data;
    },
    UPDATE_Room(state, data) {
      console.log('UPDATE_Room', data);
      state.room = data;
    },
    UPDATE_Players(state, data) {
      state.players = data;
    },
    UPDATE_Hands(state, data) {
      state.hands = data;
    },
    UPDATE_Cards(state, data) {
      state.cards = data;
    },
    addCardToHand(state, data) {
      const undeltCards = state.cards.filter(card => card.hand === null);
      console.log(undeltCards)
      let randomCard = undeltCards[(Math.floor(Math.random() * undeltCards.length))];
      console.log(randomCard)
      // dealCard.hand = data.handId;
      const cardIndex = state.cards.findIndex(card => card.id === randomCard.id);
      console.log(cardIndex)
      state.cards[cardIndex].hand = data.handId;
    },
    setActiveTurn(state, data) {
      console.log('setActiveTurn', data);
      const seatIndex = state.seats.findIndex(seat => seat.id === data.seatId);
      console.log(seatIndex)
      // state.seats[seatIndex].status = 'playing';
      state.room.activeSeat = data.seatId;
      state.room.activeTurnTime = 30;

      // Remove this in the future when handled by game state... 
      setTimeout(() => {
        state.room.activeSeat = null;
        state.room.activeTurnTime = null;
        clearInterval(activeTurnInterval);
      }, 30 * 1000);

      let activeTurnInterval = setInterval(() => {
        state.room.activeTurnTime -= 1;
      }, 1000);
    },
    assignPlayerToSeat(state, data) {
      console.log('assignPlayerToSeat', data);
      const seatIndex = state.seats.findIndex(seat => seat.id === data.seatId);
      console.log(seatIndex)
      state.seats[seatIndex].player = state.user.id;
      console.log(state.seats)
      state.players.push(state.user)
      state.user.seat = data.seatId;
    }

  },
})
