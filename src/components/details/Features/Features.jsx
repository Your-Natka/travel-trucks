import Badge from '../../shared/Badge/Badge';
import { capitalize } from '../../../utils/capitalize';

import css from './Features.module.css';

const Features = ({ camper }) => {
  const badges = [];

  if (camper.transmission) {
    badges.push({
      label: capitalize(camper.transmission),
    });
  }

  if (camper.AC) {
    badges.push({
      label: 'AC',
    });
  }

  if (camper.engine) {
    badges.push({
      label: capitalize(camper.engine),
    });
  }

  if (camper.kitchen) {
    badges.push({
      label: 'Kitchen',
    });
  }

  if (camper.radio) {
    badges.push({
      label: 'Radio',
    });
  }

  if (camper.form) {
    badges.push({
      label: capitalize(camper.form),
    });
  }

  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>Vehicle details</h2>

      <div className={css.badges}>
        {badges.map(item => (
          <Badge key={item.label} label={item.label} />
        ))}
      </div>

      <div className={css.line} />

      <div className={css.table}>
        <div className={css.row}>
          <span>Form</span>
          <span>{capitalize(camper.form)}</span>
        </div>

        <div className={css.row}>
          <span>Length</span>
          <span>{camper.length}</span>
        </div>

        <div className={css.row}>
          <span>Width</span>
          <span>{camper.width}</span>
        </div>

        <div className={css.row}>
          <span>Height</span>
          <span>{camper.height}</span>
        </div>

        <div className={css.row}>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </div>

        <div className={css.row}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </div>
      </div>
    </section>
  );
};

export default Features;
