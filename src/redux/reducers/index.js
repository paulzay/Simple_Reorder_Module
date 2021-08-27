import { combineReducers } from 'redux';
import products from './products';
import reorders from './reorders';

const rootReducer = combineReducers({
  products,
  reorders,
});

export default rootReducer;