import { combineReducers } from 'redux';
import puppiesReducer from './puppies';

const reducer = combineReducers({
  puppies: puppiesReducer,
});

export default reducer;
