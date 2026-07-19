import ReviewCard from './ReviewCard';

import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <section className={css.wrapper}>
      {reviews.map(review => (
        <ReviewCard key={review.reviewer_name} review={review} />
      ))}
    </section>
  );
};

export default Reviews;
