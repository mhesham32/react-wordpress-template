import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ active, dropdown, name, links, isChild, id }) =>
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
          <Link
            className="dropdown-item"
            to={`/category/${link.slug}/${link.id}`}
            key={link.slug}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </li>
  ) : (
    !isChild && (
      <li className={`nav-item ${active && 'active'}`}>
        <Link
          className="nav-link"
          to={name === 'Home' ? '/' : `/category/${name}/${id}`}
        >
          {name} {active && <span className="sr-only">(current)</span>}
        </Link>
      </li>
    )
  );

NavItem.propTypes = {
  active: PropTypes.bool.isRequired,
  dropdown: PropTypes.bool.isRequired,
  links: PropTypes.array,
  name: PropTypes.string.isRequired,
  isChild: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

NavItem.defaultProps = {
  links: [],
};

export default NavItem;
