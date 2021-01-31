import React, { Component, Suspense } from 'react'
import './Home.scss';
import NavBar from '../../components/NavBar/NavBar';
import quatro4 from '../../assets/BarrelQuatro/quatro4.jpg';
const Footer = React.lazy(() => import( '../../components/Footer/Footer'));
const CardsBox = React.lazy(() => import('../../components/CardsBox/CardsBox'));

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NavBar />
        <img
          className='d-block w-100'
          src={quatro4}
          alt='First slide'
        />
        <div className='home__welcome'>
          <div className='home__welcome-text'>
            Сделай заказ сегодня и получи баню уже через 7 дней! Доставка в подарок!
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <CardsBox />
          <Footer />
        </Suspense>
      </div>
    )
  }
}
