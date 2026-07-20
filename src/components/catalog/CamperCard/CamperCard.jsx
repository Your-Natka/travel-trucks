import { Link } from 'react-router-dom';

import CamperImage from '../CamperImage/CamperImage';
import FeatureList from '../FeatureList/FeatureList';
import Rating from '../../shared/Rating/Rating';
import Location from '../../shared/Location/Location';
import Button from '../../shared/Button/Button';
import FavoriteButton from '../../shared/FavoriteButton/FavoriteButton';

import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  return (
    <article className={css.card}>
      <CamperImage image={camper.gallery[0].thumb} name={camper.name} />

      <div className={css.content}>
        <header className={css.header}>
          <div>
            <h2 className={css.title}>{camper.name}</h2>
          </div>

          <div className={css.priceBox}>
            <span className={css.price}>
              €
              {Number(camper.price).toLocaleString('de-DE', {
                minimumFractionDigits: 2,
              })}
            </span>
            <FavoriteButton camper={camper} />
          </div>
        </header>

        <div className={css.info}>
          <Rating rating={camper.rating} />

          <Location location={camper.location} />
        </div>

        <p className={css.description}>{camper.description}</p>

        <FeatureList camper={camper} />

        <Link to={`/catalog/${camper.id}`} target="_blank">
          <Button variant="primary" size="hero">
            Show more
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default CamperCard;
