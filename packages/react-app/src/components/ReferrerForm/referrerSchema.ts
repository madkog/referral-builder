import * as yup from "yup";

export const referrerSchema = yup.object().shape({
    givenName: yup
      .string()
      .required()
      .required('GIVEN NAME is a required field')
      .min(1, 'GIVEN NAME must be at least 3 numbers')
      .max(50, 'GIVEN NAME must be at most 20 numbers'),
    surname: yup
      .string()
      .required('SURNAME is a required field')
      .min(3, 'SURNAME must be at least 3 numbers')
      .max(25, 'SURNAME must be at most 20 numbers'),
    email: yup
      .string()
      .required('EMAIL is a required field')
      .email("EMAIL must be valid email"),
    phone: yup
      .string()
      .required('PHONE is a required field')
      .min(3, 'PHONE must be at least 3 numbers')
      .max(25, 'PHONE NAME must be at most 20 numbers'),
    homeName: yup
      .string()
      .required('HOME NAME OR # is a required field')
      .min(1, 'HOME NAME OR # must be at least 3 characters')
      .max(100, 'HOME NAME OR # must be at most 20 characters'),  
    street: yup
      .string()
      .required('STREET is a required field')
      .min(3, 'STREET must be at least 3 characters')
      .max(20, 'STREET must be at most 20 characters'),
    suburb: yup
      .string()
      .required('SUBURB is a required field')
      .min(3, 'SUBURB must be at least 3 characters')
      .max(20, 'SUBURB must be at most 20 characters'), 
    state: yup
      .string()
      .required('COUNTRY is a required field')
      .min(3, 'COUNTRY must be at least 3 characters')
      .max(28, 'COUNTRY must be at most 20 characters'), 
    postcode: yup
      .string()
      .required('POSTCODE is a required field')
      .length(4, 'POSTCODE must of length 4.'),
    country: yup
      .string()
      .required('COUNTRY is a required field')
      .min(3, 'COUNTRY must be at least 3 characters')
      .max(20, 'COUNTRY must be at most 20 characters'),  
  });