
import * as authSaga from "./Auth.saga";
import * as register from './Registration.Saga';
import * as Admin from './AdminSaga';
import {fork} from 'redux-saga/effects';
export default function* rootSaga(){
    yield [
        fork(authSaga.watchLogin),
        fork(authSaga.watchLoginSucceeded),
        fork(authSaga.watchLogoutCalled),
        fork(register.watchEmployerRegister),
        fork(Admin.watchGetAllEmployers),

    ];
}