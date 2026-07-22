import { Oval } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => (
  <div className={css.overlay}>
    <div className={css.card}>
      <Oval
        height={48}
        width={48}
        color="#829B91"
        secondaryColor="#DADDE1"
        strokeWidth={4}
      />

      <h3 className={css.title}>Loading tracks...</h3>

      <p className={css.text}>
        Please wait while we fetch the best travel trucks for you.
      </p>
    </div>
  </div>
);

export default Loader;
