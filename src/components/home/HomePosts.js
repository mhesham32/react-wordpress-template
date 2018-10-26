import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAllPosts } from '../../actions/posts';
import {
  getPostsMiniData,
  getIsFetching,
  getError,
} from '../../reducers/postsReducer';
import MiniPost from '../posts/MiniPost';
import HandleFetchingHoc from '../HOC/LoadingOrError';

class HomePosts extends Component {
  static propTypes = {
    allPosts: PropTypes.array.isRequired,
    pages: PropTypes.number.isRequired,
  };

  render() {
    const { allPosts } = this.props;

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

const mapStateToProps = state => {
  const { error, errorMessage } = getError(state);
  return {
    allPosts: getPostsMiniData(state),
    isFetching: getIsFetching(state),
    error,
    errorMessage,
    pages: parseInt(state.posts.pages),
  };
};

export default connect(
  mapStateToProps,
  { fetchData: page => fetchAllPosts(page) }
)(HandleFetchingHoc(HomePosts));
