
import * as authSaga from "./Auth.saga";
import * as register from './Registration.Saga';
import * as Admin from './AdminSaga';
import * as Employer from './EmployerSaga';
import * as Common from './CommonSaga';
import * as Employee from './EmployeeSaga';
import {fork} from 'redux-saga/effects';
export default function* rootSaga(){
    yield [
        fork(authSaga.watchLogin),
        fork(authSaga.watchLoginSucceeded),
        fork(authSaga.watchLogoutCalled),
        fork(register.watchEmployerRegister),
        fork(register.watchEmployeeRegister),
        fork(Admin.watchGetAllEmployers),
        fork(register.watchEmployerUsername),
        fork(register.watchEmployerEmail),
        fork(Admin.watchSpecificEmployer),
        fork(Admin.watchBlockUser),
        fork(Admin.watchUnblockUser),
        fork(Admin.watchAllowPost),
        fork(Admin.watchRejectPost),
        fork(Admin.watchGetAllPosts),
        fork(Admin.watchSpecificPost),
        fork(Employer.watchMoreInfo),
        fork(Employer.watchAllPosts),
        fork(Employer.watchCreatePost),
        fork(Employer.watchEditPost),
        fork(Employer.watchUpdateTags),
        fork(Employer.watchPostDelete),
        fork(Employer.watchPostToggleView),
        fork(Common.watchTags),
        fork(Common.watchDP),
        fork(Common.watchAllPosts),
        fork(Common.watchPostMoreDetails),
        fork(Employee.watchCVUpdate),
        fork(Employee.watchApplication),
        fork(Employee.watchAllApplications),
        fork(Employee.watchCancelApplication),


    ];
}