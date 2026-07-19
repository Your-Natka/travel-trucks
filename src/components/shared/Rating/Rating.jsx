import Icon from '../Icon/Icon';
import css from './Rating.module.css';

const Rating = ({ rating }) => {
  return (
    <div className={css.rating}>
      <Icon name="icon-star-rating" width={16} height={16} />

      <span>{rating}</span>
    </div>
  );
};

export default Rating;
