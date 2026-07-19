import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';

import { selectForm } from '../../../redux/filters/selectors';
import { setForm } from '../../../redux/filters/filtersSlice';

import css from './VehicleTypeFilter.module.css';

const options = ['Alcove', 'Panel Van', 'Integrated', 'Semi Integrated'];

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();

  const form = useSelector(selectForm);

  return (
    <section className={css.section}>
      <SectionTitle>Camper form</SectionTitle>

      <div className={css.list}>
        {options.map(option => (
          <label key={option} className={css.option}>
            <input
              className={css.radio}
              type="radio"
              name="form"
              checked={form === option}
              onChange={() => dispatch(setForm(option))}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default VehicleTypeFilter;
