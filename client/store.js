import { createStore, applyMiddleware } from 'redux';
import reducer from './redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: false }))
);
