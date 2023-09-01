import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Jumbotron() {
  return (
    <div className="justify-content-center gap-1 my-1 ">
      <Card className="bg-primary text-white">
        <Card.Body className='myCardBody'>
          <Card.Title className='m-4'><h1>¡Jugar, luchar y ganar!</h1></Card.Title>
          <Card.Text className='m-4'>
            ¡Así son las jugadoras de la Selección Absoluta Femenina de Fútbol de España!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  );
}


export default Jumbotron;

