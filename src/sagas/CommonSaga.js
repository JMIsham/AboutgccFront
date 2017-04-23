/**
 * Created by Isham on 4/23/2017.
 */
import * as actionTypes from '../constants/actionTypes';
import * as api2 from "../Connectivity/api2";
import {call,put} from 'redux-saga/effects';
import {takeLatest} from "redux-saga/effects";
import {push} from 'react-router-redux'

export function * watchTags(){
    yield takeLatest(actionTypes.FETCH_TAGS_REQUSTED,doTags);
}

export function * doTags(){
    try{

        const response=yield call(api2.tags);
        if(!response){
            yield put({
                type:actionTypes.FETCH_TAGS_SUCCEEDED,
                payload:[]
            });
        }
        else{
            yield put({
                type:actionTypes.FETCH_TAGS_SUCCEEDED,
                payload:response
            });
        }}catch(e){
        yield put({
            type:actionTypes.FETCH_TAGS_FAILED
        });
    }


}
