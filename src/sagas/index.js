
import * as authSaga from "./Auth.saga";
import * as register from './Registration.Saga';
import * as Admin from './AdminSaga';
import * as Employer from './EmployerSaga';
import * as Common from './CommonSaga';
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
        fork(Employer.watchMoreInfo),
        fork(Employer.watchAllPosts),
        fork(Employer.watchCreatePost),
        fork(Employer.watchEditPost),
        fork(Employer.watchUpdateTags),
        fork(Employer.watchPostDelete),
        fork(Employer.watchPostToggleView),
        fork(Common.watchTags),


    ];
}