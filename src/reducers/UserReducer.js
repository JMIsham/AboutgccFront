/**
 * Created by Isham on 3/27/2017.
 */
import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';
import objectAssign from 'object-assign';
export default function userReducer(state =initialState.User,action ){
    let newState;
    switch (action.type){
        //changes the user status to pending to show loading window
        case (actionTypes.LOGIN_REQUESTED):
            newState=objectAssign({},state);
            newState.loginRequestPending = true;
            return newState;
        case (actionTypes.LOGIN_COMPLETED):
            newState=objectAssign({},state);
            newState.userName = action.payload.username;
            newState.id = action.payload.id;
            newState.exp=action.payload.exp;
            newState.loginRequestPending=false;
            newState.loggedIn=true;
            newState.roles=action.payload.roles;
            return newState;
        case (actionTypes.LOGIN_FAILED):
            return ({
                loggedIn: false,
                loginRequestPending: false
            });
        default:
            return state
    }

}