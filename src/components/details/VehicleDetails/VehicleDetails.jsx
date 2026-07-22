import CamperHeader from '../CamperHeader/CamperHeader';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';
import BookingForm from '../BookingForm/BookingForm';
import Reviews from '../Reviews/Reviews';

import css from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  return (
    <main className={css.wrapper}>
      <section className={css.top}>
        <Gallery images={camper.gallery} name={camper.name} />

        <div className={css.right}>
          <CamperHeader camper={camper} />

          <Features camper={camper} />
        </div>
      </section>

      <section className={css.reviewsSection}>
        <h2 className="title">Reviews</h2>
        <div className={css.bottom}>
          <Reviews reviews={camper.reviews} />

          <BookingForm />
        </div>
      </section>
    </main>
  );
};

export default VehicleDetails;
