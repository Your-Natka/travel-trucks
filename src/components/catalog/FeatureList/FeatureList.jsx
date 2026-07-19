import Badge from '../../shared/Badge/Badge';
import { capitalize } from '../../../utils/capitalize';

import css from './FeatureList.module.css';

const FeatureList = ({ camper }) => {
  const features = [];

  if (camper.engine) {
    features.push({
      label: capitalize(camper.engine),
      icon: 'icon-zapravka',
    });
  }

  if (camper.transmission) {
    features.push({
      label: capitalize(camper.transmission),
      icon: 'icon-automat',
    });
  }

  if (camper.AC) {
    features.push({
      label: 'AC',
      icon: 'icon-car',
    });
  }

  return (
    <div className={css.list}>
      {features.map(({ icon, label }) => (
        <Badge key={label} icon={icon} label={label} />
      ))}
    </div>
  );
};

export default FeatureList;
