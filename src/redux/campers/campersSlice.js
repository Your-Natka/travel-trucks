import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations';

const initialState = {
  items: [],
  camper: null,

  page: 1,
  limit: 4,
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

    nextPage(state) {
      state.page += 1;
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

        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items.push(...action.payload.items);
        }

        state.hasMore = action.payload.items.length === state.limit;
      })

      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
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

export const { resetCampers, nextPage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
