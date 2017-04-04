import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as fromReducer} from 'redux-form';
import userReducer from './UserReducer';
import loginFormReducer from './LoginFormReducer';
import employerForm from './EmployerFormReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
  form: fromReducer,
  user:userReducer,
  loginForm:loginFormReducer,
  routing: routerReducer,
  employerForm:employerForm,
  adminData:adminReducer,

});

export default rootReducer;
