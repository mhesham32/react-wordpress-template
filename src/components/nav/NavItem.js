import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ active, dropdown, name, links }) =>
  dropdown ? (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to="/"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {name}
      </Link>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {links.map(link => (
          <Link className="dropdown-item" to={`/${name}/${link}`} key={link}>
            {link}
          </Link>
        ))}
      </div>
    </li>
  ) : (
    <li className={`nav-item ${active && 'active'}`}>
      <Link className="nav-link" to={name === 'Home' ? '/' : `/${name}`}>
        {name} {active && <span className="sr-only">(current)</span>}
      </Link>
    </li>
  );

NavItem.propTypes = {
  active: PropTypes.bool.isRequired,
  dropdown: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  links: [],
};

export default NavItem;
