import React, { Component } from 'react'
import './Home.scss';
import CardsBox from '../../components/CardsBox/CardsBox';
import NavBar from '../../components/NavBar/NavBar';
import { Card, Carousel } from 'react-bootstrap';
import qualityImg from '../../assets/pexels-tirachard-kumtanom-733854.jpg';
import priceImg from '../../assets/pexels-jonathan-borba-3689188.jpg';
import bestTeamImg from '../../assets/pexels-jeshootscom-834892.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NavBar />
        {/* <CarouselBackground /> */}
        <div className='home__content'>
          {/* <Card style={{ minWidth: '18rem', width: '18rem', maxWidth: '18rem' }}> */}
          <Carousel className='home__present'> 
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={qualityImg}
                alt='First slide'
              />
              <Carousel.Caption>
                <h4>Лучшее качество</h4>
                {/* <p>Контролькачества на каждом этапе производства.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={priceImg}
                alt='First slide'
              />
              <Carousel.Caption>
                <h4>Низкие цены</h4>
                {/* <p>Благодаря большим объёмам мы можем предложить самые низкие цены</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={bestTeamImg}
                alt='First slide'
              />
              <Carousel.Caption>
                <h4>Команда профессионалов</h4>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <CardsBox />
      </div>
    )
  }
}
