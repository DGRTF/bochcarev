import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

interface IFormOrderProps {
  id: number;
}

export default class FormOrder extends Component<IFormOrderProps> {
  render() {
    return (
      <div>
        <div className='form-order'>
          <div className='form-order__header'>
            Мы готовы принять Ваш заказ!
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Ваше имя" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="tel" placeholder="Номер телефона" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="hidden" name='id' value={this.props.id} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Заказать баню-бочку
          </Button>
          </Form>
        </div>
      </div>
    )
  }
}
