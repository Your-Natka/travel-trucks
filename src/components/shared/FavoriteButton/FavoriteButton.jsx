import { useDispatch, useSelector } from 'react-redux';

import Icon from '../Icon/Icon';

import { toggleFavorite } from '../../../redux/favorites/favoritesSlice';

import { selectIsFavorite } from '../../../redux/favorites/selectors';

import css from './FavoriteButton.module.css';

const FavoriteButton = ({ camper }) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector(state => selectIsFavorite(state, camper.id));

  return (
    <button
      type="button"
      className={css.button}
      onClick={() => dispatch(toggleFavorite(camper))}
    >
      <Icon
        name={isFavorite ? 'icon-heart-fill' : 'icon-heart'}
        className={isFavorite ? css.active : css.icon}
        width={24}
        height={24}
      />
    </button>
  );
};

export default FavoriteButton;
