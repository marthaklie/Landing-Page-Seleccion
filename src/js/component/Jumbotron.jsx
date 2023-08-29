import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Jumbotron() {
  return (
    <Card className="bg-primary text-white">  
      <Card.Body>
        <Card.Title><h1>A Warm Welcome!</h1></Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est laborum distinctio accusamus aperiam quasi numquam maxime tempora quis. Ab, dignissimos?
        </Card.Text>
        <Button variant="light">Call to action!</Button>
      </Card.Body>
    </Card>
  );
}

export default Jumbotron;

