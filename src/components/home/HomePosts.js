import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts } from '../../actions/posts';
import { getPostsMiniData, getIsFetching } from '../../reducers/postsReducer';
import LoadingPost from '../posts/LoadingPost';
import MiniPost from '../posts/Post';

class HomePosts extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { isFetching, allPosts } = this.props;
    return (
      <div className="home__posts conatiner">
        <div className="row justify-content-between">
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

const mapStateToProps = state => ({
  allPosts: getPostsMiniData(state),
  isFetching: getIsFetching(state),
});

export default connect(
  mapStateToProps,
  { fetchAllPosts }
)(HomePosts);
