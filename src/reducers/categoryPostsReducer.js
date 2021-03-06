import $ from 'jquery';
import * as types from '../actions/actionTypes';

export default (state = { isFetching: false, error: false }, action) => {
  switch (action.type) {
    case types.REQUEST_CATEGORY_DATA:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case types.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
        error: false,
        pages: action.pages,
      };
    case types.FETCH_CATEGORY_FAILURE:
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

export const getPostsMiniData = ({ categoryPosts: { data } }) => {
  if (data) {
    const posts = data.map(post => ({
      id: post.id,
      categoryId: post.categories[0],
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

export const getIsFetching = ({ categoryPosts }) => categoryPosts.isFetching;

export const getCategoryId = ({ categories: { data } }, slug) => {
  if (data) {
    return data.filter(cat => cat.slug === slug)[0].id;
  }
  return null;
};

export const getError = ({ categoryPosts }) => ({
  error: categoryPosts.error,
  errorMessage: categoryPosts.errorMessage,
});
