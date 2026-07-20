import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',

  initialState,

  reducers: {
    toggleFavorite(state, action) {
      const camper = action.payload;

      const exists = state.items.find(item => item.id === camper.id);

      if (exists) {
        state.items = state.items.filter(item => item.id !== camper.id);
      } else {
        state.items.push(camper);
      }

      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
