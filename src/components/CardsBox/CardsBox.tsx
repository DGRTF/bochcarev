import React, { Component } from 'react'
import { StateType } from '../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap'
import './CardsBox.scss';
import price_card_1 from '../../assets/price_card_1.jpg';
import {
  openOrderForm,
  openCallForm,
} from '../../store/actions/PriceVisible/PriceVisible';

interface ImapDispatchToProps {
  openOrderForm?: () => (dispatch: any, setState: () => StateType) => void;
  openCallForm?: () => (dispatch: any, setState: () => StateType) => void;
}

interface ICardsBoxProps extends ImapDispatchToProps {

}

class CardsBox extends Component<ICardsBoxProps> {
  render() {
    return (
      <div className='card-box'>
        <Card className='card-box__cards'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Баня-бочка 1</Card.Title>
            <Card.Text>
              Описание Баня-бочка 3
            </Card.Text>
            <Button onClick={this.openOrderForm.bind(this)} variant="primary">Купить</Button>
          </Card.Body>
        </Card>
        <Card className='card-box__cards'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Баня-бочка 2</Card.Title>
            <Card.Text>
              Описание Баня-бочка 2
            </Card.Text>
            <Button onClick={this.openOrderForm.bind(this)} variant="primary">Купить</Button>
          </Card.Body>
        </Card>
        <Card className='card-box__cards'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Баня-бочка 3</Card.Title>
            <Card.Text>
              Описание Баня-бочка 3
            </Card.Text>
            <Button onClick={this.openOrderForm.bind(this)} variant="primary">Купить</Button>
          </Card.Body>
        </Card>
        <Card className='card-box__cards'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Не определились с выбором?</Card.Title>
            <Card.Text>
              Закажите обратный звонок и мы поможем Вам!
            </Card.Text>
            <Button onClick={this.openCallForm.bind(this)} variant="primary">Заказать</Button>
          </Card.Body>
        </Card>
      </div >
    )
  }

  private openOrderForm() {
    this.props.openOrderForm();
    window.scrollTo(null, 0);
  }

  private openCallForm() {
    this.props.openCallForm();
    window.scrollTo(null, 0);
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    openOrderForm,
    openCallForm,
  }, dispatch);
}

export default connect<{}, ImapDispatchToProps, ICardsBoxProps, StateType>(
  null,
  mapDispatchToProps
)(CardsBox);
