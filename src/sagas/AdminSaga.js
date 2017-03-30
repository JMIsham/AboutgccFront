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
        console.log(response);


    }catch(e){

    }

}
export function* watchGetAllEmployers(){
    yield takeLatest(actionTypes.REQUEST_GET_ALL_EMPLOYER,doGetAllEmployers)
}