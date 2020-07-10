import React, { Component } from 'react'
import './FormCall.scss';
import { Form, Button } from 'react-bootstrap'

interface IFormCallProps {
  textHeader?: string;
}

export default class FormCall extends Component<IFormCallProps> {
  private textHeader = 'Закажите звонок прямо сейчас и мы ответим на все ваши вопросы!'
  render() {
    return (
      <div className='form-call'>
        <div className='form-call__header'>
          {this.props.textHeader ? this.props.textHeader : this.textHeader}
        </div>
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
