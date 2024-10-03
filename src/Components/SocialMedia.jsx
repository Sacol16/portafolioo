import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <Container id="social" className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Contacto</Card.Title>
          <div className="d-flex justify-content-around">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter size={32} /></a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={32} /></a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SocialMedia;
