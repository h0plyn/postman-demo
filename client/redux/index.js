import { combineReducers } from 'redux';
import productsReducer from './products';

const reducer = combineReducers({
  products: productsReducer,
});

export default reducer;
