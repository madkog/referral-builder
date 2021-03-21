import React from 'react';

import { useForm } from "react-hook-form";
import { Row, Col, Button} from 'react-bootstrap';

import { referrerSchema } from './referrerSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const ReferrerForm = (props:any) => {

  const { handleSubmit, register, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(referrerSchema)
  });

  return (
    <div className="pannel">
    <h1>Referral Builder</h1>
    
    <form autoComplete="off" onSubmit={handleSubmit(props.submit)}>
    <fieldset>
        <legend>Personal Details</legend>    
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
    </fieldset>
    <fieldset>
        <legend>Address</legend>  
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
    </fieldset>
    </form>
    </div>
  );
}

export default ReferrerForm;