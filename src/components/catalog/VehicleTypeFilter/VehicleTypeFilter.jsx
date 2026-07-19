import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';

import { selectForm } from '../../../redux/filters/selectors';
import { setForm } from '../../../redux/filters/filtersSlice';

import css from './VehicleTypeFilter.module.css';

const options = [
  { label: 'Alcove', value: 'alcove' },
  { label: 'Panel Van', value: 'panelTruck' },
  { label: 'Fully Integrated', value: 'fullyIntegrated' },
];

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();

  const form = useSelector(selectForm);

  return (
    <section className={css.section}>
      <SectionTitle>Camper form</SectionTitle>

      <div className={css.list}>
        {options.map(option => (
          <label key={option.value} className={css.option}>
            <input
              className={css.radio}
              type="radio"
              name="form"
              checked={form === option.value}
              onChange={() => dispatch(setForm(option.value))}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default VehicleTypeFilter;
