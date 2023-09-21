import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyCard() {
  return (
    <div className="my-4">
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4 mb-4">
        {/* Primer grupo de 4 columnas */}
      <Col className="custom-column">
          <Card border="danger">
            <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espanola-de-futbol-femenino/1-284-60/cata-coll-a.jpg" />
            <Card.Body>
              <Card.Title>Cata Coll</Card.Title>
              <Card.Text>
                Cata Coll es una de las porteras de la selección. Con 22 años es campeona de Europa y del Mundo Sub-17. Está nominada al premio The Best a la mejor portera de la FIFA.
              </Card.Text>
              <Button variant="danger">Quiero saber más!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="custom-column">
        <Card border="primary">
            <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espanola-de-futbol-femenino/1-284-70/ona-battle-a.jpg" />
            <Card.Body>
              <Card.Title>Ona Batlle</Card.Title>
              <Card.Text>
                Con 24 años, Ona Batlle comenzó en las categorías inferiores del Barcelona y después de 5 años ha vuelto al club blaugrana. Su ídolo futbolístico es Lucy Bronze.
              </Card.Text>
              <Button variant="primary">Quiero saber más!</Button>
            </Card.Body>
          </Card>
        </Col>
      <Col className="custom-column">
        <Card border="danger">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-639/alexia-putellas-a.jpg" />
          <Card.Body>
            <Card.Title>Alexia Putellas</Card.Title>
            <Card.Text>
              Con 29 años, Alexia Putellas tiene ya dos balones de oro y vuelve a la selección después de superar la lesión de ligamento cruzado. Destaca por sus pases y su llegada.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="custom-column">
        <Card border="primary">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-634/jennifer-hermoso-a.jpg" />
          <Card.Body>
            <Card.Title>Jennifer Hermoso</Card.Title>
            <Card.Text>
              Con 33 años, Jennifer Hermoso es la primera futbolista en la historia de España en ser nominada por la FIFA a mejor jugadora del mundo y máxima goleadora.
            </Card.Text>
            <Button variant="primary">Quiero saber más!</Button>
          </Card.Body>
        </Card>
      </Col>      
        {/* Segundo grupo de 4 columnas */}
        <Col className="custom-column">
          <Card border="danger">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-623/irene-paredes-a.jpg" />
          <Card.Body>
            <Card.Title>Irene Paredes</Card.Title>
            <Card.Text>
              Con 31 años, Irene Paredes tiene una personalidad ligada al liderazgo hizo que portase el brazalete de la selección.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col className="custom-column">
          <Card border="primary">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-65/laia-codina-a.jpg" />
          <Card.Body>
            <Card.Title>Laia Codina</Card.Title>
            <Card.Text>
              Con 23 años, la defensa catalana, reciente ganadora del Mundial, seguirá su carrera en Londres en el Arsenal.
            </Card.Text>
            <Button variant="primary">Quiero saber más!</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col className="custom-column">
          <Card border="danger">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-69/olga-carmona-a.jpg" />
          <Card.Body>
            <Card.Title>Olga Carmona</Card.Title>
            <Card.Text>
              Con 23 años, Olga Carmona es lateral pero puede jugar de extremo. Jugadora vertical que genera mucho peligro por la banda.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col className="custom-column">
          <Card border="primary">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-624/teresa-abelleira-a.jpg" />
          <Card.Body>
            <Card.Title>Teresa Abelleira</Card.Title>
            <Card.Text>
              Con 23 años, la centrocampista del Real Madrid jugó al fútbol sala y se proclamó campeona de España en la categoría cadete.
            </Card.Text>
            <Button variant="primary">Quiero saber más!</Button>
          </Card.Body>
          </Card>
        </Col>
      </Row>    
      <Row xs={1} sm={2} md={3} lg={3} xl={3} className="g-4 mb-4">
        {/* Tercer grupo de 3 columnas */}
        <Col className="custom-column">
          <Card border="danger">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-627/aitana-bonmati-a.jpg" />
          <Card.Body>
            <Card.Title>Aitana Bonmatí</Card.Title>
            <Card.Text>
            Con 25 años, Aitana Bonmatí, sumó 17 goles y 21 asistencias en la temporada 22-23 en la que fue campeona de Liga, Supercopa y Champions.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col className="custom-column">
          <Card border="primary">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-72/salma-a.jpg" />
          <Card.Body>
            <Card.Title>Salma Paralluelo</Card.Title>
            <Card.Text>
              A pesar de su juventud, 19 años, la jugadora del Barsa es todo un referente en el fútbol femenino y ha marcado la diferencia con goles.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col className="custom-column">
          <Card border="danger">
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-58/alba-redondo-a.jpg" />
          <Card.Body>
            <Card.Title>Alba Redondo</Card.Title>
            <Card.Text>
            La delantera manchega de 26 años. Es la "pichichi" de la Liga F con 27 goles en 30 partidos. Cambió de niña la gimnasia por el fútbol.
            </Card.Text>
            <Button variant="primary">Quiero saber más!</Button>
          </Card.Body>
          </Card>
        </Col>
        </Row>
    </div>
  );
}

export default MyCard;
