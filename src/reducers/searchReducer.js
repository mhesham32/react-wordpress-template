import $ from 'jquery';
import * as actionTypes from '../actions/actionTypes';

export default (
  state = {
    searchText: '',
    loading: false,
    error: false,
    posts: [],
    noResults: false,
    pages: 1,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.REQUEST_SEARCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.data,
        searchText: action.searchText,
        pages: action.pages,
        error: false,
        noResults: false,
      };
    case actionTypes.FIND_NO_RESULTS:
      return {
        ...state,
        loading: false,
        searchText: action.searchText,
        noResults: true,
        error: false,
        posts: [],
        pages: action.pages,
      };
    case actionTypes.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        noResults: false,
        errorMessage: action.errorMessage,
        posts: [],
        pages: action.pages,
      };
    default:
      return state;
  }
};

export const getPostsMiniData = ({ posts: data }) => {
  if (data) {
    const posts = data.map(post => ({
      id: post.id,
      title: post.title.rendered.replace('&nbsp;', ' ').replace('&#8217;', "'"),
      desc: $(post.excerpt.rendered)
        .eq(0)
        .text(),
      linkText: $(post.excerpt.rendered)
        .find('a')
        .text(),
      slug: post.slug,
      image: post.jetpack_featured_media_url
        ? post.jetpack_featured_media_url
        : '',
    }));
    return posts;
  }
  return [];
};
