import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCategoryData } from '../../actions/categories';
import {
  getPostsMiniData,
  getIsFetching,
  getError,
} from '../../reducers/categoryPostsReducer';
import MiniPost from './MiniPost';
import HandleFetchinHoc from '../HOC/LoadingOrError';

class CategoryPosts extends Component {
  static propTypes = {
    allPosts: PropTypes.array.isRequired,
  };

  render() {
    const { allPosts } = this.props;

    return (
      <div className="home__posts conatiner">
        <div className="row justify-content-center home__flex">
          {allPosts.map(post => <MiniPost {...post} key={post.title} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { error, errorMessage } = getError(state);
  return {
    allPosts: getPostsMiniData(state),
    isFetching: getIsFetching(state),
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
  fetchData: () => dispatch(fetchCategoryData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleFetchinHoc(CategoryPosts));
