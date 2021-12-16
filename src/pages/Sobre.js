import React from 'react';
import { Button, Card} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import thiago from '../images/thiago-its-me.jpeg'


export default function Sobre() {
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center bg-light marginTop">
      <div className="col-md-4">
        <Card style={{ width: '18rem' }} >
          <Card.Img variant="top" src={thiago} />
          <Card.Body>
            <Card.Title className="text-center">Thiago de Azevedo Ribeiro</Card.Title>
            <Card.Text>
              <Card.Subtitle className="text-center">OAB/RJ 15318449 e OAP 62818L</Card.Subtitle>

              O Thiago Azevedo é advogado autónomo, graduado em Direito em 2019. Pós graduado em M&A e Corporate Litigation, pela Faculdade de Direito de Lisboa, especialização em Marcas e Patentes, Propriedade Intelectual e Direitos Autorais.
              Atua nos mais diversos ramos do direito, especialmente em direito empresarial e internacional com ênfase na imigração entre Brasil e Portugal.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
      <Footer />
    </>
  )
}


