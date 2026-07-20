import * as yup from 'yup';

export const bookingSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(3, 'Minimum 3 characters'),

  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Invalid email'),
});
