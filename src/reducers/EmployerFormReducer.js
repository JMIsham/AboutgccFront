/**
 * Created by Isham on 4/3/2017.
 */

import objectAssign from "object-assign";
import * as actionTypes from "../constants/actionTypes";
export default function EmployerFormReducer(state={},action){
    let newState;
    switch (action.type) {
        case actionTypes.EMPLOYER_REGISTRATION_REQUESTED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.usernameRequested = true;
            return newState;

        case actionTypes.EMPLOYER_USERNAME_PASSED:
            //if the username is valid, disables the loading state and pass the username
            newState = objectAssign({}, state);
            newState.usernameRequested = false;
            newState.usernameValid = undefined;
            return newState;

        case actionTypes.EMPLOYER_USERNAME_FAILED:
//      if the username is already exists dispaly an error message
            newState = objectAssign({}, state);
            newState.usernameRequested = false;
            newState.usernameValid = "username is not available";
            return newState;

        case actionTypes.EMPLOYER_EMAIL_REQUESTED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.emailRequested = true;
            return newState;

        case actionTypes.EMPLOYER_EMAIL_PASSED:
            //if the email is valid, disables the loading state and pass the username
            newState = objectAssign({}, state);
            newState.emailRequested = false;
            newState.emailValid = undefined;
            return newState;

        case actionTypes.EMPLOYER_EMAIL_FAILED:
//      if email is already exists dispaly an error message
            newState = objectAssign({}, state);
            newState.emailRequested = false;
            newState.emailValid = "email is already registered for another account";
            return newState;

        default:
            return state;
    }
}