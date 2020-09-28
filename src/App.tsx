import React, { Component } from 'react';
import './App.scss';
import Home from './pages/Home/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='App'>
            <Home/>
        </div>
      </div>
    )
  }
}
