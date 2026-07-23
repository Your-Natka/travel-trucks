import { useEffect, useState } from 'react';

import TruckAnimation from './TruckAnimation';
import Button from '../Button/Button';
import sprites from '../../../assets/icons/sprites.svg';
import css from './BookingSuccess.module.css';

const BookingSuccess = ({ onClose }) => {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheck(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.animationBlock}>
          <TruckAnimation />

          {showCheck && (
            <>
              <div className={css.successIconCircle}></div>

              <svg className={css.successIcon}>
                <use href={`${sprites}#icon-check`} />
              </svg>
            </>
          )}
        </div>

        <h2 className={css.title}>Booking confirmed!</h2>

        <p className={css.text}>
          Thank you for choosing TravelTrucks.
          <br />
          We'll contact you shortly to confirm your booking.
        </p>

        <Button variant="primary" size="full" onClick={onClose}>
          Awesome!
        </Button>
      </div>
    </div>
  );
};

export default BookingSuccess;
