import * as actionTypes from './actionTypes';
import * as fromApi from '../api/api';

function requestSearchData() {
  return { type: actionTypes.REQUEST_SEARCH_DATA };
}

function fetchSearchSucces(data, searchText, pages) {
  return { type: actionTypes.FETCH_SEARCH_SUCCESS, data, pages, searchText };
}

function findNoResults(searchText) {
  return { type: actionTypes.FIND_NO_RESULTS, searchText };
}

function fetchSearchFailure(err) {
  return {
    type: actionTypes.FETCH_SEARCH_FAILURE,
    errorMessage: err.message,
  };
}

export default (searchText, page = 1) => dispatch => {
  dispatch(requestSearchData());
  return fromApi
    .fetchDataByslug(`posts?search=${searchText}&&page=${page}`)
    .then(
      response => {
        dispatch(
          fetchSearchSucces(response.data, searchText, parseInt(response.pages))
        );
      },
      err => {
        if (err.message === 'There is No data!') {
          dispatch(findNoResults(searchText));
        } else {
          dispatch(fetchSearchFailure(err));
        }
      }
    );
};
