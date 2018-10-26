import * as types from './actionTypes';
import * as fromApi from '../api/api';

const requestPostsData = () => ({
  type: types.REQUEST_POSTS_DATA,
});

const fetchPostsSuccess = (data, pages) => ({
  type: types.FETCH_POSTS_SUCCESS,
  data,
  pages,
});

const fetchPostsFailure = error => ({ type: types.FETCH_POSTS_FAILURE, error });

export const fetchAllPosts = () => dispatch => {
  dispatch(requestPostsData());
  return fromApi.fetchPosts().then(
    response => {
      dispatch(fetchPostsSuccess(response.data, response.pages));
    },
    err => {
      dispatch(fetchPostsFailure(err.message || 'some thing went wrong!!'));
    }
  );
};

const requestPostData = () => ({ type: types.REQUEST_POST_DATA });

const fetchPostSuccess = data => ({ type: types.FETCH_POST_SUCCESS, data });

const fetchPostFailure = error => ({ type: types.FETCH_POST_FAILURE, error });

export const fetchPostData = id => dispatch => {
  dispatch(requestPostData());
  return fromApi.fetchDataByslug(`posts/${id}`).then(
    response => {
      dispatch(fetchPostSuccess(response.data, response.pages));
    },
    err => {
      dispatch(fetchPostFailure(err.message || 'some thing went wrong!!'));
    }
  );
};
