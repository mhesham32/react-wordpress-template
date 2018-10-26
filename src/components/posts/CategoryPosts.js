import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { fetchCategoryData } from '../../actions/categories';
import {
  getPostsMiniData,
  getIsFetching,
  getError,
} from '../../reducers/categoryPostsReducer';
import { getCurrentRoute } from '../../reducers/catrgoriesReducer';
import MiniPost from './MiniPost';
import HandleFetchinHoc from '../HOC/LoadingOrError';

class CategoryPosts extends Component {
  static propTypes = {
    allPosts: PropTypes.array.isRequired,
    currentRoute: PropTypes.oneOf([PropTypes.object, undefined]).isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    match: PropTypes.object.isRequired,
    pages: PropTypes.number.isRequired,
  };

  render() {
    const {
      allPosts,
      currentRoute,
      match: {
        params: { slug, id },
      },
    } = this.props;

    if (slug) {
      if (slug !== currentRoute.slug) {
        return <Redirect to={`/category/${currentRoute.slug}/${id}`} />;
      }
    }

    return (
      <div className="home__posts conatiner">
        <div className="row justify-content-center home__flex">
          {allPosts.map(post => (
            <MiniPost {...post} key={post.title} linkText="Read More..." />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => {
  const { error, errorMessage } = getError(state);
  return {
    allPosts: getPostsMiniData(state),
    isFetching: getIsFetching(state),
    currentRoute: getCurrentRoute(state, id),
    pages: parseInt(state.categoryPosts.pages),
    error,
    errorMessage,
  };
};

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { id },
    },
  }
) => ({
  fetchData: page => dispatch(fetchCategoryData(id, page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleFetchinHoc(CategoryPosts));
