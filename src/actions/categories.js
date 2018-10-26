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

const fetchCategorySuccess = data => ({
  type: types.FETCH_CATEGORY_SUCCESS,
  data,
});

const fetchCategoryFailure = error => ({
  type: types.FETCH_CATEGORY_FAILURE,
  error,
});

export const fetchCategoryData = id => dispatch => {
  dispatch(requestCategoryData());
  return fromApi.fetchDataByslug(`posts?categories=${id}`).then(
    response => {
      dispatch(fetchCategorySuccess(response.data, response.pages));
    },
    err => {
      dispatch(fetchCategoryFailure(err.message || 'some thing went wrong!!'));
    }
  );
};
