import React from "react";

import { useForm } from "react-hook-form";
import { Row, Col, Button} from 'react-bootstrap';

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { apiCreateReferrer, apiGetReferrers } from "../../services/referrerService";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Referrer } from "../../types/Referrer";

function ReferrerForm() {
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

  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema)
  });

  console.log(errors)

  const onSubmit = (data: Referrer) => {
       apiCreateReferrer(data);
  };

  return (
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
  );
}

export default ReferrerForm;