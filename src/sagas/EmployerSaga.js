/**
 * Created by Isham on 4/15/2017.
 */
import * as actionTypes from '../constants/actionTypes';
import * as api from '../Connectivity/api2';
import {call,put,takeLatest} from 'redux-saga/effects';
import {push} from 'react-router-redux';

export function * watchMoreInfo(){
    yield takeLatest(actionTypes.EMPLOYER_MORE_INFO_REQUESTED,doMoreInfo);
}

export function * doMoreInfo(action){
    try{
    const token=action.payload.token;
    const id=action.payload.id;
    const response=yield call(api.employerMoreInfo,id,token);
    if(!response){
        yield put({
            type:actionTypes.EMPLOYER_MORE_INFO_UNAUTHERIZED
        });
        yield put(push('/logout'));
    }else{
        yield put({
            type:actionTypes.EMPLOYER_MORE_INFO_SUCCEEDED,
            payload:response
        });
    }}catch(e){
        yield put({
           type:actionTypes.EMPLOYER_MORE_INFO_FAILED
        });
        yield put(push('/logout'));
    }


}
export function * watchAllPosts(){
    yield takeLatest(actionTypes.EMPLOYER_ALL_POSTS_REQUESTED,doAllPosts);
}

export function * doAllPosts(action){
    try{
    const token=action.payload.token;

    const response=yield call(api.employerAllPosts,token);
    if(!response){
        yield put({
            type:actionTypes.EMPLOYER_ALL_POSTS_UNAUTHERIZED
        });
        yield put(push('/logout'));
    }else if(response=="NO_CONTENT"){
        yield put({
            type:actionTypes.EMPLOYER_ALL_POSTS_NO_CONTENT
        });
    }
    else{
        yield put({
            type:actionTypes.EMPLOYER_ALL_POSTS_SUCCEEDED,
            payload:response
        });
    }}catch(e){
        yield put({
           type:actionTypes.EMPLOYER_ALL_POSTS_FAILED
        });
        yield put(push('/logout'));
    }


}