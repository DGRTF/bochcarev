import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import price_card_1 from '../../assets/price_card_1.jpg';
import './FormOrder.scss';
import { closeOrderForm } from '../../store/actions/PriceVisible/PriceVisible';
import { StateType } from '../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



interface ImapDispatchToProps {
  closeOrderForm?: () => (dispatch: any, setState: () => StateType) => void;
}

interface IFormOrderProps extends ImapDispatchToProps {
  id: number;
}

class FormOrder extends Component<IFormOrderProps> {
  render() {
    return (
      <div>
        <div className='form-order'>
          <Card style={{ minWidth: '18rem', width: '18rem', maxWidth: '18rem' }}>
            <Card.Header className='form-order__header-form' >
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
            </Card.Header>
            <Card.Header >
              <Button onClick={this.closeOrderForm.bind(this)} variant="danger" >
                Закрыть
              </Button>
            </Card.Header>
            <Card.Img className='form-order__card-img' variant="top" src={price_card_1} />
            <Card.Body className='form-order__body-form'>
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
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }

  private closeOrderForm() {
    this.props.closeOrderForm();
    window.scrollTo(null, 0);
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    closeOrderForm,
  }, dispatch);
}

export default connect<{}, ImapDispatchToProps, IFormOrderProps, StateType>(
  null,
  mapDispatchToProps
)(FormOrder);
