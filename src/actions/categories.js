import * as types from './actionTypes';
import * as fromApi from '../api/api';

const requestCategoriesData = () => ({
  type: types.REQUEST_CATEGORIES_DATA,
});

const fetchCategoriesSuccess = (data, pages) => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  data,
  pages,
});

const fetchCategoriesFailure = () => ({ type: types.FETCH_CATEGORIES_FAILURE });

export const fetchCateogries = () => dispatch => {
  dispatch(requestCategoriesData());
  return fromApi.fetchCategories().then(
    response => {
      dispatch(fetchCategoriesSuccess(response.data));
    },
    err => {
      dispatch(fetchCategoriesFailure);
    }
  );
};

const requestCategoryData = () => ({ type: types.REQUEST_CATEGORY_DATA });

const fetchCategorySuccess = (data, pages) => ({
  type: types.FETCH_CATEGORY_SUCCESS,
  data,
  pages,
});

const fetchCategoryFailure = error => ({
  type: types.FETCH_CATEGORY_FAILURE,
  error,
});

export const fetchCategoryData = (id, page = 1) => dispatch => {
  dispatch(requestCategoryData());
  return fromApi.fetchDataByslug(`posts?categories=${id}&&page=${page}`).then(
    response => {
      dispatch(fetchCategorySuccess(response.data, response.pages));
    },
    err => {
      dispatch(fetchCategoryFailure(err.message || 'some thing went wrong!!'));
    }
  );
};
