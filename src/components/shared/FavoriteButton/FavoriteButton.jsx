import { useDispatch, useSelector } from 'react-redux';

import {
  addFavorite,
  removeFavorite,
} from '../../../redux/favorites/favoritesSlice';

import css from './FavoriteButton.module.css';

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites.items);

  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <button
      className={`${css.button} ${isFavorite ? css.active : ''}`}
      onClick={toggleFavorite}
    >
      ♥
    </button>
  );
};

export default FavoriteButton;
