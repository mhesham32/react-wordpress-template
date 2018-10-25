import React from 'react';
import PropTypes from 'prop-types';

import LoadingPost from '../posts/LoadingPost';
import { Redirect } from 'react-router-dom';

const HandleFetchingHoc = WrappedComponent =>
  class LoadingOrErrorComp extends React.Component {
    static propTypes = {
      fetchData: PropTypes.func.isRequired,
      isFetching: PropTypes.bool.isRequired,
      allPosts: PropTypes.array.isRequired,
      error: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string,
      postContent: PropTypes.string,
      type: PropTypes.string,
      slug: PropTypes.string,
    };

    static defaultProps = {
      errorMessage: '',
      postContent: '',
      type: '',
      slug: '',
    };

    componentWillMount() {}

    componentDidMount() {
      this.props.fetchData().then(() => {
        const { slug, type } = this.props;
        if (slug) {
          if (slug !== this.props.match.params.slug && type === 'post') {
            this.props.history.push(
              `/post/${slug}/${this.props.match.params.id}`
            );
          }
        }
      });
    }

    componentDidUpdate(prevProps) {
      if (prevProps.match !== this.props.match) {
        this.props.fetchData();
      }
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
        slug,
        type,
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
      // if (slug) {
      //   if (slug !== this.props.match.params.slug && type === 'post') {
      //     return (
      //       <Redirect to={`/post/${slug}/${this.props.match.params.id}`} />
      //     );
      //   }
      // }
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

export default HandleFetchingHoc;
