import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredCampers = createSelector(
  [state => state.campers.items, state => state.filters],
  (campers, filters) => {
    const { location, form, engine, transmission, ...equipment } = filters;

    return campers.filter(camper => {
      if (
        location &&
        !camper.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      if (form && camper.form !== form) {
        return false;
      }

      if (engine && camper.engine !== engine) {
        return false;
      }

      if (transmission && camper.transmission !== transmission) {
        return false;
      }

      for (const key in equipment) {
        if (equipment[key] && !camper[key]) {
          return false;
        }
      }

      return true;
    });
  }
);
