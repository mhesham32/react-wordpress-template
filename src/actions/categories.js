import * as types from './actionTypes';
import * as fromApi from '../api/api';

const requestCategoriesData = () => ({
  type: types.REQUEST_CATEGORIES_DATA,
});

const fetchCategoriesSuccess = data => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  data,
});

const fetchCategoriesFailure = () => ({ type: types.FETCH_CATEGORIES_FAILURE });

export const fetchCateogries = () => dispatch => {
  dispatch(requestCategoriesData());
  return fromApi.fetchCategories().then(
    response => {
      dispatch(fetchCategoriesSuccess(response));
    },
    err => {
      dispatch(fetchCategoriesFailure);
    }
  );
};
