import React, { Component } from 'react'
import './FormCall.scss';
import { Form, Button } from 'react-bootstrap'


export default class FormCall extends Component {
  render() {
    return (
      <div className='form-call'>
        <Form onSubmit={this.submitForm.bind(this)} action='FormCall.php' method='post'>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" name='name' placeholder="Ваше имя" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control required type="tel" name='tel' placeholder="Номер телефона" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Заказать звонок
          </Button>
        </Form>
      </div>
    )
  }

  private submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const response = fetch('FormCall.php', {
      method: 'POST',
      body: new FormData(form)
    }).then(() => {
      alert('С вами свяжутся в скором времени. Ваша заявка в обработке.');
    },
      () => {
        alert('Что-то пошло не так :(, попробуйте отправить заявку ещё раз');
      });
  }
}
