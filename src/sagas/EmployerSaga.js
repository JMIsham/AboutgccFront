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
        const userType = action.payload.userType;
        const response=yield call(api.employerMoreInfo,id,token,userType);
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
        console.log(e);
        yield put({
           type:actionTypes.EMPLOYER_ALL_POSTS_FAILED
        });
        yield put(push('/logout'));
    }


}

export function * watchCreatePost(){
    yield takeLatest(actionTypes.EMPLOYER_NEW_POST_REQUESTED,doCreatePost);
}

export function * doCreatePost(action){
    try{
    const token=action.payload.token;
    const formData = action.payload.formData;
    const response=yield call(api.employerCreatePost,token,formData);
    if(!response){
        yield put({
            type:actionTypes.EMPLOYER_NEW_POST_UNAUTHERIZED
        });
        yield put(push('/employer/posts'));
    }else if(response=="NO_CONTENT"){
        yield put({
            type:actionTypes.EMPLOYER_NEW_POST_NO_CONTENT
        });
    }
    else{
        yield put({
            type:actionTypes.EMPLOYER_NEW_POST_SUCCEEDED,
            payload:response
        });
        yield put({
            type:actionTypes.EMPLOYER_ALL_POSTS_REQUESTED,
            payload:{
                token:token
            }
        });
        yield put(push('/employer/posts'));
    }}catch(e){
        yield put({
           type:actionTypes.EMPLOYER_NEW_POST_FAILED
        });
        yield put(push('/employer/posts'));
    }


}

export function * watchEditPost(){
    yield takeLatest(actionTypes.EMPLOYER_EDIT_POST_REQUESTED,doEditPost);
}

export function * doEditPost(action){
    try{
    const token=action.payload.token;
    const formData = action.payload.formData;
        const id = action.payload.id;
    const response=yield call(api.employerUpdatePost,token,formData,id);
    if(!response){
        yield put({
            type:actionTypes.EMPLOYER_EDIT_POST_UNAUTHERIZED
        });
        yield put(push('/employer/posts'));
    }else if(response=="NO_CONTENT"){
        yield put({
            type:actionTypes.EMPLOYER_EDIT_POST_NO_CONTENT
        });
    }
    else{
        yield put({
            type:actionTypes.EMPLOYER_EDIT_POST_SUCCEEDED,
            payload:response
        });
        yield put({
            type:actionTypes.EMPLOYER_ALL_POSTS_REQUESTED,
            payload:{
                token:token
            }
        });
        yield put(push('/employer/posts'));
    }}catch(e){
        yield put({
           type:actionTypes.EMPLOYER_EDIT_POST_FAILED
        });
        yield put(push('/employer/posts'));
    }


}
export function * watchUpdateTags(){
    yield takeLatest(actionTypes.UPDATE_TAGS_REQUSTED,doUpdateTags);
}

export function * doUpdateTags(action){
    try{
    const token=action.payload.token;
    const body = action.payload.body;
    const response=yield call(api.employerUpdateTags,token,body);
    if(!response){
        yield put({
            type:actionTypes.UPDATE_TAGS_FAILED
        });
        yield put(push('/employer/posts'));
    }else if(response=="NO_CONTENT"){
        yield put({
            type:actionTypes.UPDATE_TAGS_FAILED
        });
    }
    else{
        yield put({
            type:actionTypes.UPDATE_TAGS_SUCCEEDED,
            payload:{
                id:body.id,
                newTags:response
            }
        });
        yield put(push('/employer/posts'));
    }}catch(e){
        yield put({
           type:actionTypes.UPDATE_TAGS_FAILED
        });
        yield put(push('/employer/posts'));
    }


}
export function * watchPostDelete(){
    yield takeLatest(actionTypes.EMPLOYER_POST_DELETE_REQUESTED,doPostDelete);
}

export function * doPostDelete(action){
    try{
    const token=action.payload.token;
    const id = action.payload.id;
    const response=yield call(api.employerDeletePost,token,id);
    if(!response){
        yield put({
            type:actionTypes.EMPLOYER_POST_DELETE_FAILED
        });
        yield put(push('/employer/posts'));
    }else if(response=="NO_CONTENT"){
        yield put({
            type:actionTypes.EMPLOYER_POST_DELETE_FAILED
        });
    }
    else{
        yield put({
            type:actionTypes.EMPLOYER_POST_DELETE_SUCCEEDED,
        });
        yield put({
            type:actionTypes.EMPLOYER_ALL_POSTS_REQUESTED,
            payload:{
                token:token
            }
        });
        yield put(push('/employer/posts'));
    }}catch(e){
        yield put({
           type:actionTypes.EMPLOYER_POST_DELETE_FAILED
        });
        yield put(push('/employer/posts'));
    }
}

export function * watchPostToggleView(){
    yield takeLatest(actionTypes.EMPLOYER_POST_TOGGLE_VISIBILITY_REQUESTED,doPostToggleView);
}

export function * doPostToggleView(action){
    try{
        const token=action.payload.token;
        const id = action.payload.id;
        const status = parseInt(action.payload.status);
        const response=yield call(api.employerPostToggleView,token,id,status);
        if(!response){
            console.log("succeeded1");
            yield put({
                type:actionTypes.EMPLOYER_POST_TOGGLE_VISIBILITY_FAILED
            });
            yield put(push('/employer/posts'));
        }else if(response=="NO_CONTENT"){
            console.log("succeeded2");
            yield put({
                type:actionTypes.EMPLOYER_POST_TOGGLE_VISIBILITY_FAILED
            });
        }
        else if(response){
            console.log("succeeded");
            yield put({
                type:actionTypes.EMPLOYER_POST_TOGGLE_VISIBILITY_SUCCEEDED,
            });
            yield put({
                type:actionTypes.EMPLOYER_POST_TOGGLE_VISIBILITY_REQUESTED,
                payload:{
                    token:token
                }
            });
            yield put(push('/employer/posts'));
    }}catch(e){
        console.log(e);
        yield put({
           type:actionTypes.EMPLOYER_POST_TOGGLE_VISIBILITY_FAILED
        });
        yield put(push('/employer/posts'));
    }
}

