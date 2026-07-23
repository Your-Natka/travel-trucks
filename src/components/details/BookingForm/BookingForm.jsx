import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../shared/Button/Button';
import BookingSuccess from '../../shared/BookingSuccess/BookingSuccess';
import sprites from '../../../assets/icons/sprites.svg';
import { bookingSchema } from './validation';

import css from './BookingForm.module.css';

const BookingForm = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = data => {
    console.log(data);

    reset();

    setIsSuccessOpen(true);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className={css.title}>Book your campervan now</h2>

        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>

        <div className={css.fields}>
          <div className={css.field}>
            <label className={css.label}>Name*</label>
            <div className={css.inputWrapper}>
              <input
                type="text"
                className={`${css.input} ${errors.name ? css.inputError : ''}`}
                {...register('name')}
              />

              {errors.name && (
                <svg className={css.errorIcon}>
                  <use href={`${sprites}#icon-Vector`} />
                </svg>
              )}
            </div>

            {errors.name && (
              <span className={css.error}>{errors.name.message}</span>
            )}
          </div>

          <div className={css.field}>
            <label className={css.label}>Name*</label>
            <div className={css.inputWrapper}>
              <input
                type="email"
                className={`${css.input} ${errors.email ? css.inputError : ''}`}
                {...register('email')}
              />

              {errors.email && (
                <svg className={css.errorIcon}>
                  <use href={`${sprites}#icon-Vector`} />
                </svg>
              )}
            </div>

            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
            )}
          </div>
        </div>

        <Button type="submit" variant="primary" size="details">
          Send
        </Button>
      </form>

      {isSuccessOpen && (
        <BookingSuccess onClose={() => setIsSuccessOpen(false)} />
      )}
    </>
  );
};

export default BookingForm;
