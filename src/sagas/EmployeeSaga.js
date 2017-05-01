/**
 * Created by Isham on 5/1/2017.
 */
import * as actionTypes from '../constants/actionTypes';
import * as api from '../Connectivity/api2';
import {call,put,takeLatest} from 'redux-saga/effects';
import {push} from 'react-router-redux';

export function * watchCVUpdate(){
    yield takeLatest(actionTypes.EMPLOYEE_CV_UPDATE_REQUESTED,doUpdateCV);
}
export function * doUpdateCV(action){
    try{
        const file = action.payload.file;
        const token = action.payload.token;
        const response=yield call(api.changeCV,token,file);
        yield put({
            type:actionTypes.EMPLOYEE_CV_UPDATE_SUCCEEDED,
            payload:response
        });
    }catch (e){
        yield put({
            type:actionTypes.EMPLOYEE_CV_UPDATE_FAILED,
        });
    }
}