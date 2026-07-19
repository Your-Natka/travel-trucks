import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',

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
  name: 'filters',
  initialState,

  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },

    setForm(state, action) {
      state.form = action.payload;
    },

    setEngine(state, action) {
      state.engine = action.payload;
    },

    setTransmission(state, action) {
      state.transmission = action.payload;
    },

    toggleEquipment(state, action) {
      const equipment = action.payload;
      state[equipment] = !state[equipment];
    },

    clearFilters() {
      return initialState;
    },
  },
});

export const {
  setLocation,
  setForm,
  setEngine,
  setTransmission,
  toggleEquipment,
  clearFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
