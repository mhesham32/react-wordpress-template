import * as types from '../actions/actionTypes';

export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case types.REQUEST_CATEGORIES_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case types.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

const findChildren = (arr, parent) =>
  arr.filter(child => parent.id === child.parent);

export const getIsFetching = ({ categories }) => categories.isFetching;

export const getRoutesData = ({ categories }) => {
  if (categories.data) {
    const { data } = categories;
    const routes = data.map(element => {
      const isParent = !!findChildren(data, element);
      let children = [];
      const isChild = element.parent > 0;

      if (isParent) {
        children = findChildren(data, element).map(child => ({
          name: child.name,
          slug: child.slug,
          id: child.id,
        }));
      }

      const dropdown = children.length > 0;
      const { name } = element;
      return {
        name,
        slug: element.slug,
        dropdown,
        links: [...children],
        isChild,
        id: element.id,
      };
    });
    return routes;
  }
  return [];
};

export const getCurrentRoute = (state, id) =>
  state.categories.data
    ? getRoutesData(state).filter(route => route.id === Number(id))[0]
    : { slug: 'categoryName' };
