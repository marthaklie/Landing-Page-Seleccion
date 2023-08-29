import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Jumbotron() {
  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>A Warm Welcome!</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est laborum distinctio accusamus aperiam quasi numquam maxime tempora quis. Ab, dignissimos?
        </Card.Text>
        <Button variant="primary">Call to action!</Button>
      </Card.Body>
    </Card>
  );
}

export default Jumbotron;