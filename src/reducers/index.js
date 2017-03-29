import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as fromReducer} from 'redux-form';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  form: fromReducer,
  user:userReducer,
  routing: routerReducer


});

export default rootReducer;
