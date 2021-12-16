import React from 'react';
import { Card } from 'react-bootstrap';

export default function News() {
  return (
    <div className="col-sm-8">
      <Card>
          <Card.Img variant="top" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2017/01/lisboa-portugal-capa-1-820x430.jpg" />
          <Card.Body>
            <Card.Title>Lisboa reabre as fronteiras</Card.Title>
            <Card.Text>
              As fronteiras estão reabertas a novos turistas e quem deseja vir morar em Portugal...{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img  variant="top" src="https://portal.oa.pt/media/1022/logo-oa-big.png?center=0.48636363636363639,0.14909090909090908&mode=crop&width=275&rnd=131188469140000000" />
          <Card.Body>
            <Card.Title>Ordem dos Advogados Portugues</Card.Title>
            <Card.Text>
              A OAP está com isncrições abertas para novos estagiários para 1º semestre de 2022.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    </div>
  )
}