import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './containers/loginPage'
import RegistrationPage from './containers/RegistrationPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
      <Route path="login" component ={LoginPage}/>
      <Route path="register" components={RegistrationPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
