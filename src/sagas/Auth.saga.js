import * as types from '../constants/actionTypes';
import * as api2 from "../Connectivity/api2";
import {call} from 'redux-saga/effects';
import {takeLatest} from "redux-saga/effects";



export function* doLogin(action){
    console.log("called!!");
    const {username,password} = action.payload;
    const response = yield call(api2.login,username,password);
    console.log(response);


}
export function* watchLogin(){
    console.log("loginCalled");
    yield takeLatest(types.LOGIN_REQUESTED,doLogin);
}