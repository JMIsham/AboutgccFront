import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as fromReducer} from 'redux-form';
import userReducer from './UserReducer';
import loginFormReducer from './LoginFormReducer';
import employerForm from './EmployerFormReducer';
import adminReducer from './adminReducer';
import EmployerReducer from './EmployerReducer';
import common from './commonReducer';

const rootReducer = combineReducers({
  form: fromReducer,
  user:userReducer,
  loginForm:loginFormReducer,
  routing: routerReducer,
  employerForm:employerForm,
  adminData:adminReducer,
  employerReducer:EmployerReducer,
  common:common,

});

export default rootReducer;
