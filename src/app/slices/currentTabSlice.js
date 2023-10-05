import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const currentTabSlice = createSlice({
  name: 'tab',
  initialState: {
    tab: 0,
    showPlayers: false,
    cards: [],
    message: false,
    modal: false,
    players: [
      {
        id: uuidv4(),
        name: "Virat Kohli",
        team: "Royal Challengers Bangalore",
        opponent: "Mumbai Indians",
        date: "2022-05-01"
      },
      {
        id: uuidv4(),
        name: "Rohit Sharma",
        team: "Mumbai Indians",
        opponent: "Chennai Super Kings",
        date: "2022-05-02"
      },
      {
        id: uuidv4(),
        name: "MS Dhoni",
        team: "Chennai Super Kings",
        opponent: "Royal Challengers Bangalore",
        date: "2022-05-03"
      },
      {
        id: uuidv4(),
        name: "Jasprit Bumrah",
        team: "Mumbai Indians",
        opponent: "Delhi Capitals",
        date: "2022-05-04"
      },
      {
        id: uuidv4(),
        name: "David Warner",
        team: "Sunrisers Hyderabad",
        opponent: "Kolkata Knight Riders",
        date: "2022-05-05"
      },
      {
        id: uuidv4(),
        name: "Kagiso Rabada",
        team: "Delhi Capitals",
        opponent: "Punjab Kings",
        date: "2022-05-06"
      },
      {
        id: uuidv4(),
        name: "KL Rahul",
        team: "Punjab Kings",
        opponent: "Rajasthan Royals",
        date: "2022-05-07"
      },
      {
        id: uuidv4(),
        name: "Andre Russell",
        team: "Kolkata Knight Riders",
        opponent: "Sunrisers Hyderabad",
        date: "2022-05-08"
      },
      {
        id: uuidv4(),
        name: "AB de Villiers",
        team: "Royal Challengers Bangalore",
        opponent: "Chennai Super Kings",
        date: "2022-05-09"
      },
      {
        id: uuidv4(),
        name: "Sanju Samson",
        team: "Rajasthan Royals",
        opponent: "Mumbai Indians",
        date: "2022-05-10"
      }
    ]
  },
  reducers: {
    setTab(state, action) {
      state.tab = action.payload;
    },

    setShowPlayerss(state) {
      state.showPlayers = !state.showPlayers;
      console.log(state.showPlayers);
    },

    setCards(state, action) {
      if (state.cards.length >= 6) {
        state.message = true;

        const existingItemIndex = state.cards.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
          state.cards = state.cards.filter(item => item.id !== action.payload.id);
        }
        return;

      }

      const existingItemIndex = state.cards.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        state.cards = state.cards.filter(item => item.id !== action.payload.id);
      } else {
        state.cards.push(action.payload);
        state.showPlayers = true;
      }
    },

    clearCards(state) {
      state.cards = [];
      state.message = false;
    },
    deleteSingle(state, action) {

      state.message = false;

      const idToDelete = action.payload;
      state.cards = state.cards.filter(item => item.id !== idToDelete);

    },

    toggleModal(state) {
      state.modal = !state.modal;

    },


    //Search through array
    onChangeFunc(state, action) { 
      const searchTerm = action.payload.toLowerCase();
      state.cards = state.players.filter((player) => player.name.toLowerCase().includes(searchTerm));
      console.log(state.cards,'look');
    }
  }
})

export default currentTabSlice.reducer;
export const tabAction = currentTabSlice.actions;
