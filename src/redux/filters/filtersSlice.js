import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",

  AC: false,
  kitchen: false,
  bathroom: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    setFilter(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },

    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
