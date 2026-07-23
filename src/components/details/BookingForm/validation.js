import * as yup from 'yup';

export const bookingSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Please enter your full name.')
    .min(3, 'Name must contain at least 3 characters.')
    .matches(
      /^(?=.*[A-Za-zА-Яа-яЇїІіЄєҐґ])[A-Za-zА-Яа-яЇїІіЄєҐґ0-9\s'-]+$/,
      'Name must contain at least one letter.'
    ),

  email: yup
    .string()
    .trim()
    .required('Please enter your email.')
    .email('Please enter a valid email address.'),
});
