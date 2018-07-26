import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostData } from '../../actions/posts';
import HandleFetchingHoc from '../HOC/LoadingOrError';
import { getPostData } from '../../reducers/postReducer';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div
          className="post__header-image "
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0, 0.8)),url(${
              this.props.headerImage
            })`,
          }}
        >
          <div className="post__title ">
            <h1 className="display-3 post__title--header">
              {this.props.title}
            </h1>
          </div>
        </div>
        <div className="post__content">
          <div dangerouslySetInnerHTML={{ __html: this.props.postContent }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => getPostData(state);

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: () => dispatch(fetchPostData(ownProps.match.params.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleFetchingHoc(Post));
