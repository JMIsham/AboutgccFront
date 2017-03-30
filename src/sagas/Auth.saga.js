import * as types from '../constants/actionTypes';
import * as api2 from "../Connectivity/api2";
import {call,put} from 'redux-saga/effects';
import {takeLatest} from "redux-saga/effects";
import {push} from 'react-router-redux'
import jwtDecode from 'jwt-decode';


export function* doLogin(action){
    try{
        console.log("called!!");
        const {username,password} = action.payload;
        const response = yield call(api2.login,username,password);
        console.log(response);
        yield put(
            {
                type:types.LOGIN_SUCCEEDED,
                payload:{
                    token: response.token}
            }
        );
    }catch (e){
        yield put(
            {
                type:types.LOGIN_FAILED,
                payload:{
                    message: e.message,
                    statusCode:e.statusCode
                }
            }
        );
    }


}
export function* watchLogin(){
    console.log("loginCalled");
    yield takeLatest(types.LOGIN_REQUESTED,doLogin);
}

export function *watchLoginSucceeded(){
    yield takeLatest(types.LOGIN_SUCCEEDED,doLoginSucceeded);
}
export function *doLoginSucceeded(action){
    const token = action.payload.token;
    const output = yield call(jwtDecode,token);
    const {exp,id,roles,username} = output;

    yield put(
        {
            type:types.LOGIN_COMPLETED,
            payload:{exp,id,roles,username,token,}
        }
    );
    yield put(push('/mypage'));

}


export function *watchLogoutCalled(){
    yield takeLatest(types.LOGOUT_REQUESTED,doLogoutCalled);
}

export function *doLogoutCalled(){
    yield put({
            type:types.LOGOUT_COMPLETED
        });
    yield put(push('/'));
}

