import React, { Component } from 'react'
import CarouselBox from '../../components/CarouselBox/CarouselBox';
import NavBar from '../../components/NavBar/NavBar';

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CarouselBox />
      </div>
    )
  }
}
