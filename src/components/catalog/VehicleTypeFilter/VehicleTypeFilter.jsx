import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import css from './VehicleTypeFilter.module.css';

const options = ['Alcove', 'Panel Van', 'Integrated', 'Semi Integrated'];

const VehicleTypeFilter = () => {
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

export default VehicleTypeFilter;
