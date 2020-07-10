import React, { Component } from 'react'
import './FormCall.scss';
import { Form, Button } from 'react-bootstrap'


export default class FormCall extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Ваше имя" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="tel" placeholder="Номер телефона" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Заказать звонок
          </Button>
        </Form>
      </div>
    )
  }
}
