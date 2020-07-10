import React, { Component } from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'
import price_card_1 from '../../assets/price_card_1.jpg';

export default class CardsBox extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card border='' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={price_card_1} />
            <Card.Body>
              <Card.Title>Баня-бочка 1</Card.Title>
              <Card.Text>
              Описание Баня-бочка 3
            </Card.Text>
              <Button variant="primary">Заказать</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={price_card_1} />
            <Card.Body>
              <Card.Title>Баня-бочка 2</Card.Title>
              <Card.Text>
              Описание Баня-бочка 2
            </Card.Text>
              <Button variant="primary">Заказать</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={price_card_1} />
            <Card.Body>
              <Card.Title>Баня-бочка 3</Card.Title>
              <Card.Text>
                Описание Баня-бочка 3
            </Card.Text>
              <Button variant="primary">Заказать</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div >
    )
  }
}
