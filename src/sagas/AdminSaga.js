/**
 * Created by Isham on 3/30/2017.
 */
import * as actionTypes from '../constants/actionTypes';
import * as api from '../Connectivity/api2';
import {call,put} from 'redux-saga/effects';
import {takeLatest} from "redux-saga/effects";
import {push} from 'react-router-redux'

export function* doGetAllEmployers(action){
    try{
        const token=action.payload.token;
        const response=yield call(api.adminGetAllEmployer,token);
        if(!response){
            yield put(
                {
                    type:actionTypes.ALL_EMPLOYER_SUCCESS,
                    payload:[]
                }
            )
        }
        else{
            yield put(
                {
                    type:actionTypes.ALL_EMPLOYER_SUCCESS,
                    payload:response
                }
            )
        }


    }catch(e){
        yield put(push('/logout'));
    }

}
export function* watchGetAllEmployers(){
    yield takeLatest(actionTypes.REQUEST_GET_ALL_EMPLOYER,doGetAllEmployers)
}