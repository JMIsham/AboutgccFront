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
            yield put({
                    type:actionTypes.ALL_EMPLOYER_SUCCESS,
                    payload:[]
                })}
        else{
            yield put({
                    type:actionTypes.ALL_EMPLOYER_SUCCESS,
                    payload:response
                })}
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
    yield put({
            type:actionTypes.GET_SPECIFIC_EMPLOUER_SUCCEEDED,
            payload:response
        })
    }catch(e){
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
        yield put({
                type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
                payload:{
                    token:token
                }});
        yield put(push('/admin/employers'));
    }catch(e){
        yield put(push('/logout'));
    }
}
export function * watchUnblockUser(){

    yield takeLatest(actionTypes.UNBLOCK_USER_REQUESTED,doUnblockUser);
}

export function * doUnblockUser(action){
    try{
        const token=action.payload.token;
        const id = action.payload.id;
        const response=yield call(api.unblockUser,id,token);
        yield put({
            type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
            payload:{
                token:token
            }});
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
        const id = action.payload.postId;
        const employerID = action.payload.employerID;
        const fromMore = action.payload.more;
        const response=yield call(api.allowPost,id,token);
        if(fromMore){
            yield put({
                type:actionTypes.ADMIN_SPECIFIC_POST_REQUESTED,
                payload:{
                    token:token,
                    id:id
                }});
        }
        else if(employerID===undefined){
            yield put({
                type:actionTypes.ADMIN_ALL_POSTS_REQUESTED,
                payload:{
                    token:token
                }});
        }
        else{
            yield put({
                type:actionTypes.GET_SPECIFIC_EMPLOUER_REQUESTED,
                payload:{
                    id:employerID,
                    token:token
                }});
        }


    }catch(e){
    yield put(push('/logout'));
    }
}

export function * watchRejectPost(){
    yield takeLatest(actionTypes.ADMIN_BLOCK_POST_REQUESTED,doRejectPost);
}

export function * doRejectPost(action){
    try{
        const token=action.payload.token;
        const id = action.payload.postId;
        const employerID = action.payload.employerID;
        const fromMore = action.payload.more;
        const response=yield call(api.blockPost,id,token);
        if(fromMore){
            yield put({
                type:actionTypes.ADMIN_SPECIFIC_POST_REQUESTED,
                payload:{
                    token:token,
                    id:id
                }});
        }
        else if(employerID===undefined){
            yield put({
                type:actionTypes.ADMIN_ALL_POSTS_REQUESTED,
                payload:{
                    token:token
                }});
        }
        else{
            yield put({
                type:actionTypes.GET_SPECIFIC_EMPLOUER_REQUESTED,
                payload:{
                    id:employerID,
                    token:token
                }});
        }


    }catch(e){
    yield put(push('/logout'));
    }
}
export function * watchGetAllPosts(){
    yield takeLatest(actionTypes.ADMIN_ALL_POSTS_REQUESTED,doGetAllPosts)
}
export function * doGetAllPosts(action){
    try{
        const token=action.payload.token;
        const response=yield call(api.adminGetAllPost,token);
        if(!response){
            yield put({
                type:actionTypes.ADMIN_ALL_POSTS_SUCCEEDED,
                payload:[]
            })}
        else{
            yield put({
                type:actionTypes.ADMIN_ALL_POSTS_SUCCEEDED,
                payload:response
            })}
    }catch(e){
        yield put(push('/logout'));
    }
}
export function * watchSpecificPost(){

    yield takeLatest(actionTypes.ADMIN_SPECIFIC_POST_REQUESTED,doSpecificPost);
}

export function * doSpecificPost(action){
    try{
        const token=action.payload.token;
        const id = action.payload.id;
        const response=yield call(api.getSpecificPost,id,token);
        if(!response || response==204){
            yield put(push('/admin/posts'));
        }
        else{
            yield put({
                type:actionTypes.ADMIN_SPECIFIC_POST_SUCCEEDED,
                payload:response
            })
        }
    }catch(e){
        yield put(push('/logout'));
    }
}
export function* doGetAllEmployees(action){
    try{
        const token=action.payload.token;
        const response=yield call(api.adminGetAllEmployee,token);
        if(!response){
            yield put({
                type:actionTypes.ADMIN_ALL_EMPLOYEES_SUCCEEDED,
                payload:[]
            })}
        else{
            yield put({
                type:actionTypes.ADMIN_ALL_EMPLOYEES_SUCCEEDED,
                payload:response
            })}
    }catch(e){
        yield put(push('/logout'));
    }
}
export function* watchGetAllEmployees(){
    yield takeLatest(actionTypes.ADMIN_ALL_EMPLOYEES_REQUESTED,doGetAllEmployees)
}
export function * watchBlockUnblockEmployee(){
    yield takeLatest(actionTypes.ADMIN_BLOCK_UNBLOCK_EMPLOYEE_REQUESTED,doBlockUnblockEmployee);
}

export function * doBlockUnblockEmployee(action){
    try{
        const token=action.payload.token;
        const id = action.payload.id;
        const block=action.payload.status==="1";
        const response=yield call(api.blockUnblockEmployee,id,token,block);
        yield put({
            type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
            payload:{
                token:token
            }});
        yield put(push('/admin/jobseekers'));
    }catch(e){
        yield put(push('/logout'));
    }
}
export function * watchGetAllApplications(){
    yield takeLatest(actionTypes.ADMIN_GET_ALL_APPLICATIONS_REQUESTED,doGetAllApplications)
}
export function * doGetAllApplications(action){
    try{
        const token=action.payload.token;
        const response=yield call(api.adminGetAllApplications,token);
        if(!response){
            yield put({
                type:actionTypes.ADMIN_GET_ALL_APPLICATIONS_SUCCEEDED,
                payload:[]
            })}
        else{
            yield put({
                type:actionTypes.ADMIN_GET_ALL_APPLICATIONS_SUCCEEDED,
                payload:response
            })}
    }catch(e){
        yield put(push('/logout'));
    }
}
export function * watchAcceptApplication(){

    yield takeLatest(actionTypes.ADMIN_ACCEPT_APPLICATION_REQUESTED,doAcceptApplication);
}

export function * doAcceptApplication(action){
    try{
        const token=action.payload.token;
        const applicationId = action.payload.applicationId;
        const allApplications=action.payload.allApplications;
        const response=yield call(api.acceptApplication,applicationId,token);
        if(allApplications){
            yield put({
                type:actionTypes.ADMIN_GET_ALL_APPLICATIONS_REQUESTED,
                payload:{
                    token:token
                }});
        }
    }catch(e){
        yield put(push('/logout'));
    }
}
export function * watchRejectApplication(){

    yield takeLatest(actionTypes.ADMIN_REJECT_APPLICATION_REQUESTED,doRejectApplication);
}

export function * doRejectApplication(action){
    try{
        const token=action.payload.token;
        const applicationId = action.payload.applicationId;
        const allApplications=action.payload.allApplications;
        const response=yield call(api.rejectApplication,applicationId,token);
        if(allApplications){
            yield put({
                type:actionTypes.ADMIN_GET_ALL_APPLICATIONS_REQUESTED,
                payload:{
                    token:token
                }});
        }
    }catch(e){
        yield put(push('/logout'));
    }
}
export function * watchSpecificEmployee(){

    yield takeLatest(actionTypes.ADMIN_SPECIFIC_EMPLOYEE_REQUESTED,doSpecificEmployee);
}

export function * doSpecificEmployee(action){
    try{
        const token=action.payload.token;
        const employeeID = action.payload.employeeID;
        const response=yield call(api.getSpecificEmployee,employeeID,token);
        yield put({
            type:actionTypes.ADMIN_SPECIFIC_EMPLOYEE_SUCCEEDED,
            payload:response
        })
    }catch(e){
        yield put(push('/logout'));
    }
}


