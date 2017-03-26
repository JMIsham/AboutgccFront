/**
 * Created by Isham on 3/25/2017.
 */
import * as types from '../constants/actionTypes';
import {takeLatest, call} from 'redux-saga/effects';
import * as api from '../Connectivity/api2';


export function* doEmployerRegister(action){
    const response = yield call(api.registerEmployer,action.payload);
    console.log(response);
}

export function* watchEmployerRegister(){
    yield takeLatest(types.EMPLOYER_REGISTRATION_REQUESTED,doEmployerRegister);
}
