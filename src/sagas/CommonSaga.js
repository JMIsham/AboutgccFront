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
export function * watchDP() {
    yield takeLatest(actionTypes.USER_DP_REQUESTED,doDP);
}
export function * doDP(action){
    try{
        const file = action.payload.file;
        const token = action.payload.token;
        const user = action.payload.user;
        const response=yield call(api2.changeDP,token,file,user);
            yield put({
                type:actionTypes.USER_DP_SUCCEEDED,
                payload:response
            });
        }catch(e){
        yield put({
            type:actionTypes.USER_DP_FAILED
        });
    }
}

export function * watchAllPosts(){
    yield takeLatest(actionTypes.HOMEPAGE_REQUESTED,doAllPosts);
}
export function * doAllPosts(action) {
    try{

        const response=yield call(api2.posts);
        if(!response){
            yield put({
                type:actionTypes.FETCH_ALL_POSTS_SUCCEEDED,
                payload:[]
            });
        }
        else{
            yield put({
                type:actionTypes.FETCH_ALL_POSTS_SUCCEEDED,
                payload:response
            });
        }}catch(e){
        yield put({
            type:actionTypes.FETCH_ALL_POSTS_FAILED
        });
    }
}
export function * watchPostMoreDetails(){
    yield takeLatest(actionTypes.POST_MORE_DETAILS_REQUESTED,doPostMoreDetails);
}
export function * doPostMoreDetails(action){
    try{
        const postId = action.payload;
        console.log(postId);
        const response=yield call(api2.postFulDetails,postId);
        console.log(response);
        if(!response){
            yield put({
                type:actionTypes.POST_MORE_DETAILS_FAILED

            });
            yield put(push('/'));        }
        else{
            yield put({
                type:actionTypes.POST_MORE_DETAILS_SUCCEEDED,
                payload:response
            });
        }}catch(e){
        yield put({
            type:actionTypes.POST_MORE_DETAILS_FAILED

        });
        yield put(push('/'));
    }
}