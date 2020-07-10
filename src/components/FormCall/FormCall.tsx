import React, { Component } from 'react'
import './FormCall.scss';
import { Form, Button } from 'react-bootstrap'

export default class FormCall extends Component {
  render() {
    return (
      <div className='form-call'>
        <span className='form-call__header'>
          Закажите звонок прямо сейчас и мы ответим на все ваши вопросы!
        </span>
        <Form>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Ваше имя</Form.Label> */}
            <Form.Control type="text" placeholder="Ваше имя" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
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
