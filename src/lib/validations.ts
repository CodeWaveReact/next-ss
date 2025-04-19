import * as yup from 'yup';

// login validation schema
export const loginValidationSchema = yup.object({
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
}).required();

export type FormData = yup.InferType<typeof loginValidationSchema>;