import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavItem from './NavItem';
import NavLoading from './NavLoading';
import { getIsFetching, getRoutesData } from '../../reducers/catrgoriesReducer';
import { fetchCateogries } from '../../actions/categories';
import NavBody from './NavBody';

class Nav extends Component {
  static propTypes = {
    fetchRoutes: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    routes: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { isFetching, routes, location } = this.props;

    return (
      <NavBody title="React Blog">
        {isFetching && routes.length === 0 ? (
          <NavLoading />
        ) : (
          routes.map(route => {
            if (
              location.pathname.includes(route.name) ||
              (location.pathname === '/' && route.name === 'Home')
            ) {
              return <NavItem {...route} key={route.name} active />;
            }
            return <NavItem {...route} key={route.name} active={false} />;
          })
        )}
      </NavBody>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  routes: getRoutesData(state),
});

export default connect(
  mapStateToProps,
  { fetchRoutes: fetchCateogries }
)(withRouter(Nav));
