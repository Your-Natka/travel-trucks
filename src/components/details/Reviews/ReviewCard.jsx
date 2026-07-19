import Icon from '../../shared/Icon/Icon';

import css from './ReviewCard.module.css';

const ReviewCard = ({ review }) => {
  return (
    <article className={css.card}>
      <div className={css.header}>
        <div className={css.avatar}>{review.reviewer_name.charAt(0)}</div>

        <div>
          <h3 className={css.name}>{review.reviewer_name}</h3>

          <div className={css.rating}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon
                key={index}
                name="icon-star-rating"
                width={16}
                height={16}
                className={
                  index < review.reviewer_rating ? css.active : css.inactive
                }
              />
            ))}
          </div>
        </div>
      </div>

      <p className={css.comment}>{review.comment}</p>
    </article>
  );
};

export default ReviewCard;
