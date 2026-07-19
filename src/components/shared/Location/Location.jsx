import Icon from '../Icon/Icon';
import css from './Location.module.css';

const Location = ({ location }) => {
  const parts = location.split(',');

  return (
    <div className={css.location}>
      <Icon name="icon-map" width={16} height={16} />

      <span>
        {parts[1]?.trim()}, {parts[0]?.trim()}
      </span>
    </div>
  );
};

export default Location;
