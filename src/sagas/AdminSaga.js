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

export function * watchSpecificEmployer(){

    yield takeLatest(actionTypes.GET_SPECIFIC_EMPLOUER_REQUESTED,doSpecificEmployer);
}

export function * doSpecificEmployer(action){
    try{
    const token=action.payload.token;
    const id = action.payload.id;
    const response=yield call(api.getSpecificEmployer,id,token);
    yield put(
        {
            type:actionTypes.GET_SPECIFIC_EMPLOUER_SUCCEEDED,
            payload:response
        }
    )}catch(e){
    yield put(push('/logout'));
    }
}
export function * watchBlockUser(){

    yield takeLatest(actionTypes.BLOCK_USER_REQUESTED,doBlockUser);
}

export function * doBlockUser(action){
    try{
        const token=action.payload.token;
        const id = action.payload.id;
        const response=yield call(api.blockUser,id,token);
        yield put(
            {
                type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
                payload:{
                    token:token
                }
            }
        );
        yield put(push('/admin/employers'));
    }catch(e){
        yield put(push('/logout'));
    }
}export function * watchUnblockUser(){

    yield takeLatest(actionTypes.UNBLOCK_USER_REQUESTED,doUnblockUser);
}

export function * doUnblockUser(action){
    try{
        const token=action.payload.token;
        const id = action.payload.id;
        const response=yield call(api.unblockUser,id,token);
        yield put(
        {
            type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
            payload:{
                token:token
            }
        }
        );
        yield put(push('/admin/employers'));
    }catch(e){
    yield put(push('/logout'));
    }
}

export function * watchAllowPost(){

    yield takeLatest(actionTypes.ADMIN_ALLOW_POST_REQUESTED,doAllowPost);
}

export function * doAllowPost(action){
    try{
        const token=action.payload.token;
        const id = action.payload;
        const response=yield call(api.allowPost,id,token);
        yield put(
        {
            type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
            payload:{
                token:token
            }
        }
        );
        yield put(push('/admin/employers'));
    }catch(e){
    yield put(push('/logout'));
    }
}

