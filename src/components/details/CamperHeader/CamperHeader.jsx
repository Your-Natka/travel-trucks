import Rating from '../../shared/Rating/Rating';
import Location from '../../shared/Location/Location';

import css from './CamperHeader.module.css';

const CamperHeader = ({ camper }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>{camper.name}</h1>

      <div className={css.info}>
        <Rating rating={camper.rating} />
        <Location location={camper.location} />
      </div>

      <p className={css.price}>
        €
        {Number(camper.price).toLocaleString('de-DE', {
          minimumFractionDigits: 2,
        })}
      </p>

      <p className={css.description}>{camper.description}</p>
    </div>
  );
};

export default CamperHeader;
