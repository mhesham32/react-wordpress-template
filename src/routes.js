import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './sass/styles.css';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import NotFound from './components/NotFound';
import configureStore from './store/configureStore';

const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default Routes;
