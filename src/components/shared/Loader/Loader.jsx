import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.loader}>
    <Oval
      height={48}
      width={48}
      color="#829B91"
      secondaryColor="#DADDE1"
      strokeWidth={4}
    />
  </div>
);

export default Loader;
