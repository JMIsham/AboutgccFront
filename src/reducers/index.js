import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as fromReducer} from 'redux-form';
import userReducer from './UserReducer';
import loginFormReducer from './LoginFormReducer';

const rootReducer = combineReducers({
  form: fromReducer,
  user:userReducer,
  loginForm:loginFormReducer,
  routing: routerReducer


});

export default rootReducer;
