import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import HTML from './assets/HTML.png';
import Photoshop from './assets/Photoshop.png';
import Premiere from './assets/Premiere.png';
import Unity from './assets/Unity.png';
import Blender from './assets/Blender.png';
import Python from './assets/Python.png';

const Skills = () => {
  return (
    <Container id="skills" className="mt-5">
      <h1 className="text-center">Habilidades</h1>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Carousel>
            <Carousel.Item>
              <img className="img" src={HTML} alt="HTML" />
              <h2>HTML</h2>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={Unity} alt="Unity" />
              <h2>Unity</h2>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={Photoshop} alt="Photoshop" />
              <h2>Photoshop</h2>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={Premiere} alt="Premiere Pro" />
              <h2>Premiere Pro</h2>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={Blender} alt="Blender" />
              <h2>Blender</h2>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img" src={Python} alt="Random Skill" />
              <h2>Python</h2>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
          <Carousel>
            <Carousel.Item>
              <h3>Trabajo en equipo</h3>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Comunicación</h3>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Adaptabilidad</h3>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Deseo de Aprender</h3>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Resiliencia</h3>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Gestión del Tiempo</h3>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
