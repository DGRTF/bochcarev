import React, { Component } from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Price from './pages/Price/Price';
import {
  Route,
  Router
} from "react-router-dom";
import { createBrowserHistory } from 'history';



const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='App'>
          <Router history={history}>
            {/* <Switch> */}
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            {/* <Route exact path={`${process.env.PUBLIC_URL}/price`} component={Price} />
            <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery} /> */}
            {/* </Switch> */}
          </Router>
        </div>
      </div>
    )
  }
}
