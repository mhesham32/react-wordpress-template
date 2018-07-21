import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAllPosts } from '../../actions/posts';
import {
  getPostsMiniData,
  getIsFetching,
  getError,
} from '../../reducers/postsReducer';
import LoadingPost from '../posts/LoadingPost';
import MiniPost from '../posts/MiniPost';

class HomePosts extends Component {
  static propTypes = {
    fetchAllPosts: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    allPosts: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  };

  static defaultProps = {
    errorMessage: '',
  };

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { isFetching, allPosts, error, errorMessage } = this.props;
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
          <button onClick={() => this.props.fetchAllPosts()}>Retry</button>
        </div>
      );
    }
    return (
      <div className="home__posts conatiner">
        <div className="row justify-content-center home__flex">
          {isFetching ? (
            <Fragment>
              <LoadingPost />
              <LoadingPost />
              <LoadingPost />
              <LoadingPost />
            </Fragment>
          ) : (
            allPosts.map(post => <MiniPost {...post} key={post.title} />)
          )}
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
  };
};

export default connect(
  mapStateToProps,
  { fetchAllPosts }
)(HomePosts);
