import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';

import { selectTransmission } from '../../../redux/filters/selectors';

import { setTransmission } from '../../../redux/filters/filtersSlice';

import css from './TransmissionFilter.module.css';

const options = [
  { label: 'Automatic', value: 'automatic' },
  { label: 'Manual', value: 'manual' },
];

const TransmissionFilter = () => {
  const dispatch = useDispatch();

  const transmission = useSelector(selectTransmission);

  return (
    <section className={css.section}>
      <SectionTitle>Transmission</SectionTitle>

      <div className={css.list}>
        {options.map(option => (
          <label key={option.value} className={css.option}>
            <input
              className={css.radio}
              type="radio"
              name="transmission"
              checked={transmission === option.value}
              onChange={() => dispatch(setTransmission(option.value))}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default TransmissionFilter;
