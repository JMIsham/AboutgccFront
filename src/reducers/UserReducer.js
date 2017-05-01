/**
 * Created by Isham on 3/27/2017.
 */
import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';
import objectAssign from 'object-assign';
export default function userReducer(state =initialState.user,action ){
    let newState;
    switch (action.type){

        case (actionTypes.LOGIN_REQUESTED):
            //changes the user status to pending to show loading window
            newState=objectAssign({},state);
            newState.loginRequestPending = true;
            return newState;

        case (actionTypes.LOGIN_COMPLETED):
            //when the login is completed change the store accordingly
            newState=objectAssign({},state);
            newState.loginError=undefined;
            newState.userName = action.payload.username;
            newState.id = action.payload.id;
            newState.exp=action.payload.exp;
            newState.loggedIn=true;
            newState.roles=action.payload.roles;
            newState.token = action.payload.token;
            return newState;

        case(actionTypes.LOGOUT_COMPLETED):
            //when logged out returns to thee initial state
            return initialState.user;

        case (actionTypes.LOGIN_FAILED):
            //when the login is failed change the store accordingly
            //all the previous user data will be replaced by these two data
            return ({
                loggedIn: false

            });
        case (actionTypes.LOGOUT_FORM_CHANGED_AFTER_ERROR):
            return ({
                loggedIn: false
            });
        case (actionTypes.EMPLOYER_MORE_INFO_SUCCEEDED):
            newState=objectAssign({},state);
            newState.moreInfo=action.payload[0];
            return newState;
        case (actionTypes.USER_DP_SUCCEEDED):
            newState=objectAssign({},state);
            newState.moreInfo.dp=action.payload;
            return newState;
        case (actionTypes.EMPLOYEE_CV_UPDATE_SUCCEEDED):
            newState=objectAssign({},state);
            newState.moreInfo.cv=action.payload;
            return newState;
        default:
            return state
    }

}