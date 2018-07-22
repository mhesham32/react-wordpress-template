import * as types from '../actions/actionTypes';

export default (
  state = { isFetching: false, error: false, postData: {}, dataState: '' },
  action
) => {
  switch (action.type) {
    case types.REQUEST_POST_DATA:
      return {
        ...state,
        isFetching: true,
        error: false,
        dataState: 'fetching',
      };
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        postData: { ...action.data },
        isFetching: false,
        error: false,
        dataState: 'success',
      };
    case types.FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error,
        dataState: 'error',
      };

    default:
      return state;
  }
};

export const getPostData = ({ post }) => {
  if (post.dataState === 'success') {
    return {
      isFetching: post.isFetching,
      error: post.error,
      errorMessage: post.errorMessage,
      postContent: post.postData.content ? post.postData.content.rendered : '',
      title: post.postData.title.rendered,
      headerImage: post.postData.better_featured_image.source_url,
      type: 'post',
    };
  }
  return {
    isFetching: post.isFetching,
    error: post.error,
    errorMessage: post.errorMessage,
    postContent: '',
    title: '',
    headerImage: '',
    type: 'post',
  };
};
