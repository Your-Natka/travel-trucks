import { useDispatch, useSelector } from 'react-redux';

import { toggleEquipment } from '../../../redux/filters/filtersSlice';

import { selectFilters } from '../../../redux/filters/selectors';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';

import css from './EquipmentFilter.module.css';

const options = ['AC', 'Kitchen', 'Bathroom', 'TV', 'Radio'];

const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <section className={css.section}>
      <SectionTitle>Vehicle equipment</SectionTitle>

      <div className={css.list}>
        {options.map(option => {
          const key =
            option === 'Kitchen'
              ? 'kitchen'
              : option === 'Bathroom'
                ? 'bathroom'
                : option === 'Radio'
                  ? 'radio'
                  : option;

          return (
            <label key={key} className={css.option}>
              <input
                className={css.checkbox}
                type="checkbox"
                checked={filters[key]}
                onChange={() => dispatch(toggleEquipment(key))}
              />

              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default EquipmentFilter;
