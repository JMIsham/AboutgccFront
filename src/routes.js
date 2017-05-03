import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './containers/loginPage';
import LogoutPage from './containers/LogoutPage';
import RegistrationPage from './containers/RegistrationPage';
import UserPage from './containers/UserPage';
import AdminPanel from './containers/AdminPanal';
import AdminApplications from './containers/AdminApplications';
import AdminEmployers from './containers/AdminEmployers';
import AdminJobseekers from './containers/AdminJobseekers';
import AdminPosts from './containers/AdminPosts';
import AdminMoreEmployer from './containers/AdminMoreEmployer';
import CompanyPage from './containers/CompanyPage';
import EmployeePage from './containers/JobseekerPage';
import CompanyPosts from './containers/CompanyJobPosts';
import CompanyPostMore from './containers/CompanyPostMore';
import ViewPost from './components/viewPost';
import JobseekerApplication from './containers/JobseekerApplications';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="login" component ={LoginPage}/>
      <Route path="logout" component={LogoutPage}/>
      <Route path="mypage" component={UserPage}/>
      <Route path="admin" component={AdminPanel}>
          <IndexRoute component={AdminApplications}/>
          <Route path="employers" component={AdminEmployers}/>
          <Route path="jobseekers" component={AdminJobseekers}/>
          <Route path="posts" component={AdminPosts}/>
          <Route path="employer/:id" component={AdminMoreEmployer}/>
      </Route>
      <Route path="employer" component={CompanyPage} >
          <IndexRoute component={CompanyPosts}/>
          <Route path="posts" component={CompanyPosts}/>
          <Route path="post-more" component={CompanyPostMore}/>
      </Route>
      <Route path="employee" component={EmployeePage} >
          <IndexRoute component={JobseekerApplication}/>
          {/*<Route path="application" component={CompanyPosts}/>*/}
          {/*<Route path="application-more" component={CompanyPostMore}/>*/}
      </Route>
      <Route path="view-post/:id" component={ViewPost}/>
      <Route path="register" components={RegistrationPage}/>
      <Route path="*" component={NotFoundPage}/>
  </Route>
);
