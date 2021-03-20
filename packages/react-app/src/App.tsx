import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

//import { useTable } from 'react-table';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ReferrerTable from './components/ReferrerTable';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: {'Cache-Control': 'no-cache'}
});

const Schema = yup.object().shape({
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

function App() {
  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema)
  });

  const onSubmit = (data: any) => {
    // console.log(data);

    instance.post('/referrals', data)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  };

  instance.get('/referrals')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  console.log(errors)

  return (
      <Container fluid>
      <Row>
        <Col>
          <div className="pannel">
          <h1>Referral Builder</h1>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <label>GIVEN NAME</label>
              <input type="text" name="givenName" ref={register} />
              {errors.givenName && <p>{errors.givenName.message}</p>}
            </Col>
            <Col>
              <label>SURNAME</label>
              <input type="text" name="surname" ref={register} />
              {errors.surname && <p>{errors.surname.message}</p>}
            </Col>
          </Row>
          <Row>
            <Col>
              <label>EMAIL</label>
              <input type="text" name="email" ref={register} />
              {errors.email && <p>{errors.email.message}</p>}
            </Col>
            <Col>
            <label>PHONE</label>
            <input type="text" name="phone" ref={register} />
            {errors.phone && <p>{errors.phone.message}</p>}
            </Col>
          </Row>
          <Row>
            <Col>
              <label>HOME NAME OR #</label>
              <input type="text" name="homeName" ref={register} />
              {errors.homeName && <p>{errors.homeName.message}</p>}
            </Col>
            <Col>
              <label>STREET</label>
              <input type="text" name="street" ref={register} />
              {errors.street && <p>{errors.street.message}</p>}
            </Col>
          </Row>
          <Row>
            <Col>
              <label>SUBURB</label>
              <input type="text" name="suburb" ref={register} />
              {errors.suburb && <p>{errors.suburb.message}</p>}
            </Col>
            <Col>
              <label>STATE</label>
              <input type="text" name="state" ref={register} />
              {errors.state && <p>{errors.state.message}</p>}
            </Col>  
          </Row>
          <Row>
            <Col>
              <label>POSTCODE</label>
              <input type="text" name="postcode" ref={register} />
              {errors.postcode && <p>{errors.postcode.message}</p>}
            </Col> 
            <Col>
              <label>COUNTRY</label>
              <input type="text" name="country" ref={register} />
              {errors.country && <p>{errors.country.message}</p>}
            </Col>   
          </Row>
          <Row className="row-btn">
            <Col>
              <input type="hidden" name="avatar" value="" ref={register} />
              {errors.avatar && <p>{errors.avatar.message}</p>}

              <Button className="btn-block" type="button">Upload Avatar</Button>
            </Col>
            <Col>
              <Button className="btn-block btn-green" type="submit">Submit</Button>
            </Col>    
          </Row>  
          </form>
          </div>
        </Col >
        <Col>
          <div className="pannel">
            <h1>Listing</h1>
            <ReferrerTable />
          </div>
        </Col>
        </Row>
      </Container>
  );
}

export default App;