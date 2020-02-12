// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import './style.css';

import { HashRouter } from 'react-router-dom';

import {
  Switch,
  Route,

} from 'react-router-dom';

import createStore from './Redux/store';

import Home from './pages/home/Home';
import Terminal from './pages/Terminal';
// import Desembaraco from './pages/Desembaraco';
import MapScreen from './pages/Terminal/Map';

const history = createBrowserHistory();

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const store = createStore();

    return (
      <Provider store={store}>
        <HashRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/terminal" component={Terminal} />
            {/* <Route exact path="/desembaraco" component={Desembaraco} /> */}
            <Route exact path="/map" component={MapScreen} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
