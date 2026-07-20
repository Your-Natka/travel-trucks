import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';

import Button from '../../shared/Button/Button';
import { bookingSchema } from './validation';

import css from './BookingForm.module.css';

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const onSubmit = data => {
    console.log('Submitted!', data);

    toast.success('Booking successful!');

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.title}>Book your campervan now</h2>

      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.fields}>
        <div>
          <input
            className={`${css.input} ${errors.name ? css.inputError : ''}`}
            type="text"
            placeholder="Name*"
            {...register('name')}
          />

          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>

        <div>
          <input
            className={`${css.input} ${errors.email ? css.inputError : ''}`}
            type="email"
            placeholder="Email*"
            {...register('email')}
          />

          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>
      </div>

      <Button type="submit" variant="primary" size="details">
        Send
      </Button>
    </form>
  );
};

export default BookingForm;
