import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavItem from './NavItem';

const routes = [
  {
    dropdown: false,
    name: 'Home',
  },
  {
    dropdown: true,
    name: 'tech',
    links: ['apple', 'Microsoft', 'Google', 'Samsung'],
  },
  {
    dropdown: true,
    name: 'Science',
    links: ['space', 'Energy', 'Health'],
  },
  {
    dropdown: false,
    name: 'Culture',
  },
  {
    dropdown: true,
    name: 'Cars',
    links: ['BMW', 'Ferrari', 'Mass Transit'],
  },
];

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      React Blog
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {routes.map(route => {
          if (
            props.location.pathname.includes(route.name) ||
            (props.location.pathname === '/' && route.name === 'Home')
          ) {
            return <NavItem {...route} key={route.name} active />;
          }
          return <NavItem {...route} key={route.name} active={false} />;
        })}
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
);

export default withRouter(Nav);
