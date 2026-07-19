import Button from '../../shared/Button/Button';
import css from './LoadMore.module.css';

const LoadMore = ({ onClick }) => {
  return (
    <div className={css.botton}>
      <Button variant="secondary" size="card" onClick={onClick}>
        Load more
      </Button>
    </div>
  );
};

export default LoadMore;
