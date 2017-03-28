import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import {reducer as fromReducer} from 'redux-form';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  fuelSavings,
  form: fromReducer,
  user:userReducer,
  routing: routerReducer


});

export default rootReducer;
