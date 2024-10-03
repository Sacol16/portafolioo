import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Foto from './assets/Foto.png';

const Home = () => {
  return (
    <Container id="home">
      <Row className="mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Santiago Colonia</Card.Title>
              <Card.Subtitle>Desarrollador Web y Gameplay Designer</Card.Subtitle>
              <Card.Text>
                Actualmente cursando el séptimo semestre en la Universidad Autónoma de Occidente. Tengo un gran interés en el desarrollo web y el desarrollo de videojuegos, áreas en las que disfruto explorar y crear experiencias innovadoras. Cuento con 8 meses de experiencia como gameplay designer, lo que me ha permitido desarrollar habilidades creativas y técnicas en la creación de experiencias interactivas. Soy una persona apasionada por el aprendizaje continuo y siempre estoy en busca de nuevos desafíos para crecer profesionalmente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img src={Foto} alt="Imagen" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
