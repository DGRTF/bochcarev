import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import { createBrowserHistory } from 'history';
import { store } from './store/store';



const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.StrictMode>
            {/* <div> */}
              <div className='App'>
                <Home />
              </div>
            {/* </div> */}
          </React.StrictMode>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
