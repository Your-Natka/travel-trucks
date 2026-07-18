import sprites from '../../../assets/icons/sprites.svg';
import Button from '../../shared/Button/Button';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h2>{camper.name}</h2>
          <div className={css.price}>
            <p>€{camper.price}</p>
            {/* HeartButton */}
          </div>
        </div>
        <div className={css.meta}>
          <div className={css.rating}>
            <svg width="20" height="20">
              <use href={`${sprites}#icon-star-rating`} />
            </svg>
            <span>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </div>
          {/* Rating */}
          <div className={css.location}>
            <svg width="20" height="20">
              <use href={`${sprites}#icon-map`} />
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>

        <p>{camper.description}</p>
        <div className={css.features}>
          <div className={css.feature}>
            <svg width="20" height="20">
              <use href={`${sprites}#icon-zapravka`} />
            </svg>

            <span>{camper.engine}</span>
          </div>
          <div className={css.feature}>
            <svg width="20" height="20">
              <use href={`${sprites}#icon-automat`} />
            </svg>

            <span>{camper.transmission}</span>
          </div>
          <div className={css.feature}>
            <svg width="20" height="20">
              <use href={`${sprites}#icon-car`} />
            </svg>

            <span>{camper.form}</span>
          </div>
        </div>
        <Button>Show more</Button>
      </div>
    </article>
  );
};

export default CamperCard;
