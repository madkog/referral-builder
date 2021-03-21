import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ReferrerTable from './components/ReferrerTable';
import ReferrerForm from './components/ReferrerForm';

import { Referrer } from "./types/Referrer";
import { apiGetReferrers, apiCreateReferrer } from "./services/referrerService";

const App = () => {

  const data: any[] = [];
  const [referrer, setReferrer] = useState(
    data
  ); 

  const onSubmit = (data: Referrer) => {
    apiCreateReferrer(data)
    .then(function(result) {
      loadData();
    })
  };

  const loadData = () => {
    const referrerData = apiGetReferrers();
          referrerData
          .then(function(result) {
              setReferrer(result);
    })
  };

  useEffect(() => {
      (async () => {
        loadData();
      })();
  }, []);

  return (
      <Container fluid>
      <Row>
        <Col>
          <ReferrerForm submit={onSubmit}/>
        </Col >
        <Col>
          <ReferrerTable referrer={referrer} />
        </Col>
        </Row>
      </Container>
  );
}

export default App;