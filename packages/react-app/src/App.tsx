import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ReferrerTable from './components/ReferrerTable';
import ReferrerForm from './components/ReferrerForm';

function App() {
  return (
      <Container fluid>
      <Row>
        <Col>
          <ReferrerForm />
        </Col >
        <Col>
          <ReferrerTable />
        </Col>
        </Row>
      </Container>
  );
}

export default App;