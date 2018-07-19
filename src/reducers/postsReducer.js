import * as types from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_POSTS_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
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
      title: post.title.rendered,
      desc: post.excerpt.rendered,
      image: post.better_featured_image
        ? post.better_featured_image.source_url
        : '',
    }));
    return posts;
  }
  return [];
};

export const getIsFetching = ({ posts }) => posts.isFetching;
