import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import '../style/ServicoCard.css'

export default function ServicoCard() {
  return (
    <div className="container d-flex justify-content-center align-items-center bg-light marginTop">
      <div className="col-md-4">
        <Card className="bg-light text-center">
          <Card.Body className="text-dark">
            <Card.Title>Áreas de atuação:</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Direito empresarial </ListGroup.Item>
                <ListGroup.Item>Direito civil</ListGroup.Item>
                <ListGroup.Item>Direito das Sucessões</ListGroup.Item>
                <ListGroup.Item>Registros e Notariados</ListGroup.Item>
                <ListGroup.Item>Obtenção de título de residência</ListGroup.Item>
                <ListGroup.Item>Nacionalidade Portuguesa</ListGroup.Item>
                <ListGroup.Item>Ordem dos Advogados</ListGroup.Item>
                <ListGroup.Item>Regularização e obtenção de documentos</ListGroup.Item>
                <ListGroup.Item>Correspondência internacional</ListGroup.Item>
                <ListGroup.Item>Consultoria jurídica</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}