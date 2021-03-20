import React, { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

const Schema = yup.object().shape({
  givenname: yup
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
  homename: yup
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
    .length(5, 'POSTCODE must of length 4.'),
  country: yup
    .string()
    .required('COUNTRY is a required field')
    .min(3, 'COUNTRY must be at least 3 characters')
    .max(20, 'COUNTRY must be at most 20 characters'),  
});

function App() {
  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(errors)

  return (
    <div>
      <div>
        <h1>Referral Builder</h1>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <label>GIVEN NAME</label>
          <input type="text" name="givenname" ref={register} />
          {errors.givenname && <p>{errors.givenname.message}</p>}

          <label>SURNAME</label>
          <input type="text" name="surname" ref={register} />
          {errors.surname && <p>{errors.surname.message}</p>}

          <label>EMAIL</label>
          <input type="text" name="email" ref={register} />
          {errors.email && <p>{errors.email.message}</p>}

          <label>PHONE</label>
          <input type="text" name="phone" ref={register} />
          {errors.phone && <p>{errors.phone.message}</p>}

          <label>HOME NAME OR #</label>
          <input type="text" name="homename" ref={register} />
          {errors.homename && <p>{errors.homename.message}</p>}

          <label>STREET</label>
          <input type="text" name="street" ref={register} />
          {errors.street && <p>{errors.street.message}</p>}

          <label>SUBURB</label>
          <input type="text" name="suburb" ref={register} />
          {errors.suburb && <p>{errors.suburb.message}</p>}

          <label>STATE</label>
          <input type="text" name="state" ref={register} />
          {errors.state && <p>{errors.state.message}</p>}

          <label>POSTCODE</label>
          <input type="text" name="postcode" ref={register} />
          {errors.postcode && <p>{errors.postcode.message}</p>}

          <label>COUNTRY</label>
          <input type="text" name="country" ref={register} />
          {errors.country && <p>{errors.country.message}</p>}

          <button type="button">Upload Avatar</button>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>Listing</h1>
        
      </div>
    </div>
  );
}

export default App;