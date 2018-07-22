import * as types from '../actions/actionTypes';

export default (
  state = { isFetching: false, error: false, postData: {} },
  action
) => {
  switch (action.type) {
    case types.REQUEST_POST_DATA:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        postData: { ...action.data },
        isFetching: false,
        error: false,
      };
    case types.FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error,
      };

    default:
      return state;
  }
};
