import React, { Component } from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Price from './pages/Price/Price';
import NavBar from './components/NavBar/NavBar';
import {
  Route,
  Router
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Switch from 'react-bootstrap/esm/Switch';



const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='App'>
          <NavBar />
          <Router history={history}>
            {/* <Switch> */}
              <Route exact path='/' component={Home} />
              <Route exact path='/gallery' component={Gallery} />
              <Route exact path='/price' component={Price} />
            {/* </Switch> */}
          </Router>
        </div>
      </div>
    )
  }
}
