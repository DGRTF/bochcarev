import React, { Component , lazy} from 'react';
import { StateType } from '../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Carousel } from 'react-bootstrap';
import './CardsBox.scss';
import {
  openOrderForm,
  openCallForm,
} from '../../store/actions/PriceVisible/PriceVisible';
import { setIdBarrel } from '../../store/actions/Barrel/Barrel';
import BarrelCircleForm from '../BarrelCircleForm/BarrelCircleForm';
import BarrelSquareForm from '../BarrelSquareForm/BarrelSquareForm';
import FormCall from '../FormCall/FormCall';
import callImg from '../../assets/pexels-andrea-piacquadio-789822.jpg';

import barrelCircleImg1 from '../../assets/BarrelCircle/IMG-20200723-WA0049.jpg';
import barrelCircleImg2 from '../../assets/BarrelCircle/IMG-20200723-WA0078.jpg';
import barrelCircleImg4 from '../../assets/BarrelCircle/IMG-20200723-WA0120.jpg';
import barrelCircleImg5 from '../../assets/BarrelCircle/IMG-20200723-WA0108.jpg';
import barrelCircleImg6 from '../../assets/BarrelCircle/IMG-20200723-WA0129.jpg';
import barrelCircleImg7 from '../../assets/BarrelCircle/IMG-20200723-WA0181.jpg';
import quatro1 from '../../assets/BarrelQuatro/quatro1.jpeg';
import quatro2 from '../../assets/BarrelQuatro/quatro2.jpg';
import quatro4 from '../../assets/BarrelQuatro/quatro4.jpg';
import quatro5 from '../../assets/BarrelQuatro/quatro5.jpg';
import quatro6 from '../../assets/BarrelQuatro/quatro6.jpg';

const CarouselItem = lazy(() => import('../../exportDefaults/CarouselItemExportDefault'));



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
          <Carousel className='card-box__carousel' interval={2500}>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={barrelCircleImg1}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={barrelCircleImg2}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={barrelCircleImg4}
              />
            </CarouselItem><CarouselItem>
              <img
                className='d-block w-100'
                src={barrelCircleImg5}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={barrelCircleImg6}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={barrelCircleImg7}
              />
            </CarouselItem>
          </Carousel>
          <Card.Body>
            <Card.Title>Баня-бочка</Card.Title>
            <BarrelCircleForm />
          </Card.Body>
        </Card>
        <Card className='card-box__cards' border='info'>
        <Carousel className='card-box__carousel' interval={2500}>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={quatro1}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={quatro2}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={quatro4}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={quatro5}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                className='d-block w-100'
                src={quatro6}
              />
            </CarouselItem>
          </Carousel>
          <Card.Body>
            <Card.Title>Баня-бочка Квадро</Card.Title>
            <BarrelSquareForm />
          </Card.Body>
        </Card>
        <Card className='card-box__cards' border='info'>
          <Card.Img variant="top" src={callImg} />
          <Card.Body>
            <Card.Title >Закажите звонок прямо сейчас и мы ответим на все ваши вопросы!</Card.Title>
            <FormCall />
          </Card.Body>
        </Card>
      </div >
    )
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
