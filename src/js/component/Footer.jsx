import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluidExample() {
  return (
    <Container fluid className="bg-danger text-white p-1">
      <Row>
        <Col><p class="text-center">Copyright 2023</p></Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;