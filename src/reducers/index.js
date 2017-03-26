import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import {reducer as fromReducer} from 'redux-form';

const rootReducer = combineReducers({
  fuelSavings,
  form: fromReducer,
  routing: routerReducer


});

export default rootReducer;
