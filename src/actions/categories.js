import * as types from './actionTypes';
import * as fromApi from '../api/api';

const requestData = () => ({
  type: types.REQUEST_DATA,
});

const fetchDataSucces = data => ({
  type: types.FETCH_DATA_SUCCESS,
  data,
});

const fetchDataFailure = () => ({ type: types.FETCH_DATA_FAILURE });

export const fetchCateogries = () => dispatch => {
  dispatch(requestData());
  return fromApi.fetchCategories().then(
    response => {
      dispatch(fetchDataSucces(response));
    },
    err => {
      dispatch(fetchDataFailure);
    }
  );
};
