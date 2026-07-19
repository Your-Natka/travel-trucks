import Button from '../shared/Button/Button';
import css from './LoadMore.module.css';

const LoadMore = ({ onClick }) => {
  return (
    <div className={css.wrapper}>
      <Button variant="secondary" onClick={onClick}>
        Load more
      </Button>
    </div>
  );
};

export default LoadMore;
