import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import helloReducer from '../reducers/helloReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      helloReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
