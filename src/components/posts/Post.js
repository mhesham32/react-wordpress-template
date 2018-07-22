import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostData } from '../../actions/posts';
import LoadingOrError from '../HOC/LoadingOrError';

class Post extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.postContent }} />;
  }
}

const mapStateToProps = ({ post }) => ({
  isFetching: post.isFetching,
  error: post.error,
  errorMessage: post.errorMessage,
  postContent: post.postData.content ? post.postData.content.rendered : '',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: () => dispatch(fetchPostData(ownProps.match.params.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingOrError(Post));
