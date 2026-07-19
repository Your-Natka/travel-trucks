import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';

import { selectEngine } from '../../../redux/filters/selectors';
import { setEngine } from '../../../redux/filters/filtersSlice';

import css from './EngineFilter.module.css';

const options = ['Diesel', 'Petrol', 'Hybrid', 'Electric'];

const EngineFilter = () => {
  const dispatch = useDispatch();

  const engine = useSelector(selectEngine);

  return (
    <section className={css.section}>
      <SectionTitle>Engine type</SectionTitle>

      <div className={css.list}>
        {options.map(option => (
          <label key={option} className={css.option}>
            <input
              className={css.radio}
              type="radio"
              name="engine"
              checked={engine === option}
              onChange={() => dispatch(setEngine(option))}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default EngineFilter;
