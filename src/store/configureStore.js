import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import categories from '../reducers/catrgoriesReducer';
import posts from '../reducers/postsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      categories,
      posts,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
