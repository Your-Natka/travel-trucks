import Icon from '../Icon/Icon';

import css from './Badge.module.css';

const Badge = ({ icon, label }) => {
  return (
    <div className={css.badge}>
      {icon && <Icon name={icon} width={20} height={20} className={css.icon} />}

      <span className={css.label}>{label}</span>
    </div>
  );
};

export default Badge;
