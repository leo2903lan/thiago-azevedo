import React from 'react';
import lady from '../images/lady-justice-2388500_960_720.webp';
import empresa from '../images/man-5806012_960_720.webp'
import digital from '../images/right-4926156_960_720.webp'
import { Carousel } from 'react-bootstrap';

export default function Carrosel() {
  return (
    <Carousel fade className="col-11 m-auto">
    <Carousel.Item className="fixedHeightImg">
      <img
        className="d-block w-100"
        src={lady}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Justiça</h3>
        <p>Sempre em busca da melhoir solução para você e sua empresa</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="fixedHeightImg">
      <img
        className="d-block w-100"
        src={empresa}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Empresarial</h3>
        <p>Encerrando um mommento para iniciar um novo!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="fixedHeightImg">
      <img
        className="d-block w-100"
        src={digital}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Direito Digital</h3>
        <p>Colocando a sua empresa legal no mundo digital.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
  )
}
