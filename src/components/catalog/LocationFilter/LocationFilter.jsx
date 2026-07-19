import sprite from '../../../assets/icons/sprites.svg';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

import css from './LocationFilter.module.css';

const LocationFilter = ({ value, onChange }) => {
  return (
    <div className={css.section}>
      <SectionTitle>Location</SectionTitle>

      <div className={css.inputWrapper}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-map`} />
        </svg>

        <input
          className={css.input}
          type="text"
          placeholder="City"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
