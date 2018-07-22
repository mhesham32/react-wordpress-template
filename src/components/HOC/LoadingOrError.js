import React from 'react';
import PropTypes from 'prop-types';

import LoadingPost from '../posts/LoadingPost';

const LoadingOrError = WrappedComponent =>
  class LoadingOrErrorComp extends React.Component {
    static propTypes = {
      fetchData: PropTypes.func.isRequired,
      isFetching: PropTypes.bool.isRequired,
      allPosts: PropTypes.array.isRequired,
      error: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string,
      postContent: PropTypes.string,
      type: PropTypes.string,
    };

    static defaultProps = {
      errorMessage: '',
      postContent: '',
      type: '',
    };

    componentDidMount() {
      this.props.fetchData();
    }

    renderLoading = () =>
      this.props.type === 'post' ? (
        <div className="row justify-content-center">
          <LoadingPost />
        </div>
      ) : (
        <div className="row justify-content-center">
          <LoadingPost />
          <LoadingPost />
          <LoadingPost />
          <LoadingPost />
        </div>
      );

    render() {
      const {
        isFetching,
        error,
        errorMessage,
        fetchData,
        postContent,
        ...rest
      } = this.props;
      if (error) {
        return (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
            <button onClick={() => fetchData()}>Retry</button>
          </div>
        );
      }
      return (
        <React.Fragment>
          {isFetching ? (
            this.renderLoading()
          ) : (
            <WrappedComponent {...rest} postContent={postContent} />
          )}
        </React.Fragment>
      );
    }
  };

export default LoadingOrError;
