import Button from '../Button/Button';
import noCampers from '../../../assets/images/no-campers2x.png';
import css from './EmptyState.module.css';
import sprite from '../../../assets/icons/sprites.svg';

const EmptyState = ({ onClear, onViewAll }) => {
  return (
    <div className={css.wrapper}>
      <img
        src={noCampers}
        alt="No campers"
        className={css.image}
        width={488}
        height={463}
      />

      <h2 className={css.title}>No campers found</h2>

      <p className={css.text}>
        We couldn't find any campers matching your filters.
      </p>
      <p className={css.text}>
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.buttons}>
        <Button variant="secondary" size="full" onClick={onClear}>
          <>
            <svg className={css.icon} width="16" height="16">
              <use href={`${sprite}#icon-close`} />
            </svg>
            <span>Clear filters</span>
          </>
        </Button>

        <Button variant="primary" size="full" onClick={onViewAll}>
          View all campers
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
