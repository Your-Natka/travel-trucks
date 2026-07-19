import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import css from './TransmissionFilter.module.css';

const options = ['Automatic', 'Manual'];

const TransmissionFilter = () => {
  return (
    <section className={css.section}>
      <SectionTitle>Camper form</SectionTitle>

      <div className={css.list}>
        {options.map(option => (
          <label key={option} className={css.option}>
            <input type="radio" name="form" value={option} />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default TransmissionFilter;
