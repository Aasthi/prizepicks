import { createSlice } from "@reduxjs/toolkit";
import { teams } from "../utils/constants";

const currentTabSlice = createSlice({
  name: 'tab',
  initialState: {
    tab: 0,
    showPlayers: false,
    cards: [],
    message: false,
    modal: false,
    players: teams
  },
  reducers: {
    setTab(state, action) {
      state.tab = action.payload;
    },

    setShowPlayers(state) {
      state.showPlayers = !state.showPlayers;
    },

    setCards(state, action) {
      if (state.cards.length >= 8) {
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

      if (state.cards.length == 0)
        state.showPlayers = false;
    },

    clearCards(state) {
      state.cards = [];
      state.message = false;
      state.showPlayers = false;
    },
    deleteSingle(state, action) {

      state.message = false;

      const idToDelete = action.payload;
      state.cards = state.cards.filter(item => item.id !== idToDelete);
      if (state.cards.length == 0)
        state.showPlayers = false;
    },

    toggleModal(state) {
      state.modal = !state.modal;

    },


    //Search through array
    onChangeFunc(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.cards = state.players.filter((player) => player.name.toLowerCase().includes(searchTerm));
      console.log(state.cards, 'look');
    }
  }
})

export default currentTabSlice.reducer;
export const tabAction = currentTabSlice.actions;
