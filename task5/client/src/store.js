import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);