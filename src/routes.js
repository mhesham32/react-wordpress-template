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
import Post from './components/posts/Post';
import CategoryPosts from './components/posts/CategoryPosts';
import Search from './components/search/Search';

const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:slug/:id" component={Post} />
            <Route path="/search" component={Search} />
            <Route path="/category/:slug/:id" component={CategoryPosts} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default Routes;
