import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard() {
  return (
    <><><div className="d-flex justify-content-center gap-3 my-4 ">
      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-60/cata-coll-a.jpg" />
         <Card.Body>
          <Card.Title>Cata Coll</Card.Title>
          <Card.Text>
            Cata Coll es una de las porteras de la selección. Con 22 años es campeona de Europa y del Mundo Sub-17 y subcampeona del mundo Sub-20.
          </Card.Text>
          <Button variant="danger">Quiero saber más!</Button>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-70/ona-battle-a.jpg" />
        <Card.Body>
          <Card.Title>Ona Batlle</Card.Title>
          <Card.Text>
            Con 24 años, Ona Batlle comenzó en las categorías inferiores el Barcelona y después de 5 años ha vuelto al club blaugrana. Su ídolo futbolístico es Lucy Bronze.
          </Card.Text>
          <Button variant="primary">Quiero saber más!</Button>
        </Card.Body>
      </Card>
      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-639/alexia-putellas-a.jpg" />
        <Card.Body>
          <Card.Title>Alexia Putellas</Card.Title>
          <Card.Text>
            Con 29 años, Alexia Putellas tiene ya dos balones de oro y vuelve a la selección después de superar la lesión de ligamento cruzado. Destaca por sus pases y su llegada.
          </Card.Text>
          <Button variant="danger">Quiero saber más!</Button>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-634/jennifer-hermoso-a.jpg" />
        <Card.Body>
          <Card.Title>Jennifer Hermoso</Card.Title>
          <Card.Text>
            Con 33 años, Jennifer Hermoso es internacional absoluta con la selección española desde 2012 y la máxima goleadora histórica de la selección.
          </Card.Text>
          <Button variant="primary">Quiero saber más!</Button>
        </Card.Body>
      </Card>
    </div>
      <div className="d-flex justify-content-center gap-3 my-4 ">
        <Card border="danger" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-623/irene-paredes-a.jpg" />
          <Card.Body>
            <Card.Title>Irene Paredes</Card.Title>
            <Card.Text>
              Con 31 años, Irene Paredes tiene una personalidad ligada al liderazgo hizo que portase el brazalete de la selección.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
        </Card>
        <Card border="danger" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-65/laia-codina-a.jpg" />
          <Card.Body>
            <Card.Title>Laia Codina</Card.Title>
            <Card.Text>
              Con 23 años, la defensa catalana, reciente ganadora del Mundial, seguirá su carrera en Londres en el Arsenal.
            </Card.Text>
            <Button variant="primary">Quiero saber más!</Button>
          </Card.Body>
        </Card>
        <Card border="danger" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-69/olga-carmona-a.jpg" />
          <Card.Body>
            <Card.Title>Olga Carmona</Card.Title>
            <Card.Text>
              Con 23 años, Olga Carmona es lateral pero puede jugar de extremo. Jugadora vertical que genera mucho peligro por la banda.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-624/teresa-abelleira-a.jpg" />
          <Card.Body>
            <Card.Title>Teresa Abelleira</Card.Title>
            <Card.Text>
              Con 23 años, la centrocampista del Real Madrid jugó al fútbol sala y se proclamó campeona de España en la categoría cadete.
            </Card.Text>
            <Button variant="primary">Quiero saber más!</Button>
          </Card.Body>
        </Card>
      </div></>
      <div className="d-flex justify-content-center gap-3 my-4 ">
        <Card border="danger" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-283-627/aitana-bonmati-a.jpg" />
          <Card.Body>
            <Card.Title>Aitana Bonmatí</Card.Title>
            <Card.Text>
              Con 25 años, Aitana Bonmatí , es uno de los nombres que más suenan del fútbol femenino y favorita para llevarse el premio a Jugadora del Año de la UEFA.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-58/alba-redondo-a.jpg" />
          <Card.Body>
            <Card.Title>Alba Redondo</Card.Title>
            <Card.Text>
              Alba Redondo tiene 26 años. Es la "pichichi" de la Liga F con 27 goles en 30 partidos. Su referente en el mundo del fútbol siempre fue Andrés Iniesta.
            </Card.Text>
            <Button variant="primary">Quiero saber más!</Button>
          </Card.Body>
        </Card>
        <Card border="danger" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.hola.com/imagenes/actualidad/20230721236051/conoce-a-las-jugadoras-de-la-seleccion-espaola-de-futbol-femenino/1-284-72/salma-a.jpg" />
          <Card.Body>
            <Card.Title>Salma Paralluelo</Card.Title>
            <Card.Text>
              A pesar de su juventud, 19 años, la jugadora del Barsa es todo un referente en el fútbol femenino y ha marcado la diferencia con goles muy importantes.
            </Card.Text>
            <Button variant="danger">Quiero saber más!</Button>
          </Card.Body>
        </Card>
      </div></>

  );

}

export default MyCard;

