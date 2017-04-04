/**
 * Created by Isham on 3/25/2017.
 */
import * as types from '../constants/actionTypes';
import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../Connectivity/api2';
import * as formValidation from '../Connectivity/form.api';

export function* doEmployerRegister(action){
    const response = yield call(api.registerEmployer,action.payload);
    console.log(response);
}

export function* watchEmployerRegister(){
    yield takeLatest(types.EMPLOYER_REGISTRATION_REQUESTED,doEmployerRegister);
}

export function * watchEmployerUsername(){
    yield takeLatest(types.EMPLOYER_USERNAME_REQUESTED,doEmployerUsername)
}
export function * doEmployerUsername(action){
    try{
        const response = yield call(formValidation.checkUsername,action.payload);
        if(response){
            yield put({
                    type:types.EMPLOYER_USERNAME_PASSED
                });
        }
        else{
            yield put({
                    type:types.EMPLOYER_USERNAME_FAILED
                });
        }
    }catch(e){

    }

}
export function * watchEmployerEmail(){
    yield takeLatest(types.EMPLOYER_EMAIL_REQUESTED,doEmployerEmail)
}
export function * doEmployerEmail(action){
    try{
        const response = yield call(formValidation.checkEmail,action.payload);
        if(response){
            yield put({
                    type:types.EMPLOYER_EMAIL_PASSED
                });
        }
        else{
            yield put({
                    type:types.EMPLOYER_EMAIL_FAILED
                });
        }
    }catch(e){

    }

}
