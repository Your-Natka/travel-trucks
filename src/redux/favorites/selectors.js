export const selectFavorites = state => state.favorites.items;

export const selectIsFavorite = (state, id) =>
  state.favorites.items.some(item => item.id === id);
