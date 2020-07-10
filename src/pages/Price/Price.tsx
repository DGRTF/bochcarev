import React, { Component } from 'react'
import './Price.scss';
import CardsBox from '../../components/CardsBox/CardsBox';
import CarouselBackground from '../../components/CarouselBackground/CarouselBackground';
import FormCall from '../../components/FormCall/FormCall';
import FormOrder from '../../components/FormOrder/FormOrder';

export default class Price extends Component {
  private visibleFormOrder: false;

  render() {
    return (
      <div className='price'>
        <CarouselBackground />
        <div className='price__content'>
          <div style={{ display: `${this.visibleFormOrder ? 'block' : 'none'}` }}>
            <FormOrder id={0} />
          </div>
          <CardsBox />
          <div className='price__form-call'>
            <FormCall textHeader='Не определились с выбором? Закажите обратный звонок и мы поможем Вам!' />
          </div>
        </div>
      </div>
    )
  }
}
