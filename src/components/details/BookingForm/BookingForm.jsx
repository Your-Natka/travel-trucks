import { useState } from 'react';

import Button from '../../shared/Button/Button';

import css from './BookingForm.module.css';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(form);

    setForm({
      name: '',
      email: '',
      date: '',
      comment: '',
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Book your campervan now</h2>

      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={css.fields}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" variant="primary" size="details">
        Send
      </Button>
    </form>
  );
};

export default BookingForm;
