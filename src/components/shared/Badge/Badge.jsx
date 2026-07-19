import Icon from '../Icon/Icon';

import css from './Badge.module.css';

const Badge = ({ icon, label }) => {
  return (
    <div className={css.badge}>
      <Icon name={icon} width={20} height={20} />

      <span>{label}</span>
    </div>
  );
};

export default Badge;
