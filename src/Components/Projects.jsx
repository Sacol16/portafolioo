import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Img1 from './assets/CapturaEtiqueta.png';
import Img2 from './assets/CapturaSuperdepor.png';
import Img3 from './assets/CapturaLogin.png';
import Img4 from './assets/Contador.png';
import Img5 from './assets/Virtual.png';
import Img6 from './assets/React.png';



const Projects = () => {
  return (
    <Container id="projects">
      <h2>Proyectos</h2>
      <h3>Primer Corte</h3>
      <Carousel>
        <Carousel.Item>
          <img src={Img1} alt="Project 1"/>
          <Carousel.Caption>
            <a href="https://github.com/Sacol16/Clase_2.git" target="_blank" rel="noopener noreferrer">Clase 2: Etiqueta</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img2} alt="Project 2"/>
          <Carousel.Caption>
            <a href="https://github.com/Sacol16/Clase3-tarea.git" target="_blank" rel="noopener noreferrer">Clase 3: @media</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} alt="Project 3"/>
          <Carousel.Caption>
            <a href="https://github.com/edwinmgallego/clase-practica-css-jueves.git" target="_blank" rel="noopener noreferrer">Clase 4: Formularios</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h3>Segundo Corte</h3>
      
      <Carousel>
        <Carousel.Item>
          <img src={Img4} alt="Project 4"/>
          <Carousel.Caption>
            <a href="https://github.com/Sacol16/JavaScript-virtual.git" target="_blank" rel="noopener noreferrer">Clase virtual</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img5} alt="Project 5"/>
          <Carousel.Caption>
            <a href="https://github.com/Sacol16/Contador" target="_blank" rel="noopener noreferrer">Contador</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img6} alt="Project 6"/>
          <Carousel.Caption>
            <a href="https://github.com/Sacol16/EjercicioReact.git" target="_blank" rel="noopener noreferrer">React</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </Container>
  );
};

export default Projects;
