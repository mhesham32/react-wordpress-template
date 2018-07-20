import * as types from './actionTypes';
import * as fromApi from '../api/api';

const requestPostsData = () => ({
  type: types.REQUEST_POSTS_DATA,
});

const fetchPostsSuccess = data => ({
  type: types.FETCH_POSTS_SUCCESS,
  data,
});

const fetchPostsFailure = error => ({ type: types.FETCH_POSTS_FAILURE, error });

export const fetchAllPosts = () => dispatch => {
  dispatch(requestPostsData());
  return fromApi.fetchPosts().then(
    response => {
      dispatch(fetchPostsSuccess(response));
    },
    err => {
      dispatch(fetchPostsFailure(err.message || 'some thing went wrong!!'));
    }
  );
};
