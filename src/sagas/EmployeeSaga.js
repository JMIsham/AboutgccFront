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

export function * watchApplication(){
    yield takeLatest(actionTypes.JOB_APPLICATION_REQUESTED,doApplication);
}
export function * doApplication(action){
    try{
        const token = action.payload.token;
        const postId = action.payload.postID;
        const response = yield call(api.employeeAplly,token,postId);
        if(response=="logout"){
            yield put({
                type:actionTypes.LOGOUT_REQUESTED
            });
        }
        else if(response){
            yield put({
                type:actionTypes.JOB_APLICATION_SUCCEEDED
            });
        }
        else {
            yield put({
                type:actionTypes.JOB_APPLICATION_FAILED
            });
        }
    }catch (e){
        yield put({
            type:actionTypes.JOB_APPLICATION_FAILED
        });
    }
}