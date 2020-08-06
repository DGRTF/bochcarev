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
import { setIdBarrel } from '../../store/actions/Barrel/Barrel';
import BarrelCircleForm from '../BarrelCircleForm/BarrelCircleForm';
import BarrelSquareForm from '../BarrelSquareForm/BarrelSquareForm';
import FormCall from '../FormCall/FormCall';
import callImg from '../../assets/pexels-andrea-piacquadio-789822.jpg';

interface ImapDispatchToProps {
  openOrderForm?: () => (dispatch: any, setState: () => StateType) => void;
  openCallForm?: () => (dispatch: any, setState: () => StateType) => void;
  setIdBarrel?: (idBarrel: number) => {
    type: "BARREL_SET_ID";
    payload: number;
  }
}

interface ICardsBoxProps extends ImapDispatchToProps {

}

class CardsBox extends Component<ICardsBoxProps> {
  render() {
    return (
      <div className='card-box'>
        <Card className='card-box__cards' border='info'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Баня-бочка</Card.Title>
            {/* <Card.Text>
              Описание Баня-бочка 3
            </Card.Text> */}
            <BarrelCircleForm />
            {/* <Button data-id={1} onClick={this.openOrderForm.bind(this)} variant="primary">Купить</Button> */}
          </Card.Body>
        </Card>
        <Card className='card-box__cards' border='info'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Баня-бочка Квадро</Card.Title>
            {/* <Card.Text>
              Описание Баня-бочка 2
            </Card.Text> */}
            <BarrelSquareForm />
            {/* <Button data-id={2} onClick={this.openOrderForm.bind(this)} variant="primary">Купить</Button> */}
          </Card.Body>
        </Card>
        {/* <Card className='card-box__cards'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Баня-бочка 3</Card.Title>
            <Card.Text>
              Описание Баня-бочка 3
            </Card.Text>
            <Button data-id={3} onClick={this.openOrderForm.bind(this)} variant="primary">Купить</Button>
          </Card.Body>
        </Card> */}
        {/* <Card className='card-box__cards'>
          <Card.Img variant="top" src={price_card_1} />
          <Card.Body>
            <Card.Title>Не определились с выбором?</Card.Title>
            <Card.Text>
              Закажите обратный звонок и мы поможем Вам!
            </Card.Text>
            <Button onClick={this.openCallForm.bind(this)} variant="primary">Заказать</Button>
          </Card.Body>
        </Card> */}
        <Card className='card-box__cards' border='info'>
          {/* <Card.Header className='home__text'>Закажите звонок прямо сейчас и мы ответим на все ваши вопросы!</Card.Header> */}
          <Card.Img variant="top" src={callImg} />
          <Card.Body>
          <Card.Title >Закажите звонок прямо сейчас и мы ответим на все ваши вопросы!</Card.Title>
            <FormCall />
          </Card.Body>
        </Card>
      </div >
    )
  }

  private openOrderForm(ev: React.MouseEvent) {
    this.props.openOrderForm();
    const el = ev.currentTarget as HTMLElement;
    const id = Number(el.dataset.id);
    this.props.setIdBarrel(id);
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
    setIdBarrel,
  }, dispatch);
}

export default connect<{}, ImapDispatchToProps, ICardsBoxProps, StateType>(
  null,
  mapDispatchToProps
)(CardsBox);
