import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations';

const initialState = {
  items: [],
  camper: null,

  page: 1,
  hasMore: true,

  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,

  reducers: {
    resetCampers(state) {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;

        const { items, page } = action.payload;

        if (page === 1) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }

        state.page = page;
        state.hasMore = items.length === 4;
      })

      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload;
      })

      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
