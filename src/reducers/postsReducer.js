import $ from 'jquery';
import * as types from '../actions/actionTypes';

export default (state = { isFetching: false, error: false }, action) => {
  switch (action.type) {
    case types.REQUEST_POSTS_DATA:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
        error: false,
      };
    case types.FETCH_POSTS_FAILURE:
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

// Destructuring  data from posts reducer
export const getPostsMiniData = ({ posts: { data } }) => {
  if (data) {
    console.log(data);
    const posts = data.map(post => ({
      id: post.id,
      title: post.title.rendered,
      desc: $(post.excerpt.rendered)
        .eq(0)
        .text(),
      linkText: $(post.excerpt.rendered)
        .find('a')
        .text(),
      slug: post.slug,
      image: post.better_featured_image
        ? post.better_featured_image.source_url
        : '',
    }));
    console.log({ posts });
    return posts;
  }
  return [];
};

export const getIsFetching = ({ posts }) => posts.isFetching;

export const getError = ({ posts }) => ({
  error: posts.error,
  errorMessage: posts.errorMessage,
});
