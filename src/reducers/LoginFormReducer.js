/**
 * Created by Isham on 4/3/2017.
 */
import * as actionTypes from "../constants/actionTypes";
import objectAssign from 'object-assign';

export default function loginFormReducer(state={},action){
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
            newState.loginRequestPending=false;
            return newState;

        case(actionTypes.LOGOUT_COMPLETED):
            //when logged out returns to thee initial state
            return {};

        case (actionTypes.LOGIN_FAILED):
            //when the login is failed change the store accordingly
            //all the previous user data will be replaced by these two data
            return ({
                loginRequestPending: false,
                loginError:true
            });
        case (actionTypes.LOGOUT_FORM_CHANGED_AFTER_ERROR):
            return ({
                loginRequestPending: false,
                loginError:false
            });

        default:
            return state
    }
}
