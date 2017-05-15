/**
 * Created by Isham on 4/3/2017.
 */

import objectAssign from "object-assign";
import * as actionTypes from "../constants/actionTypes";
export default function EmployerFormReducer(state={},action){
    let newState;
    switch (action.type) {
        case actionTypes.EMPLOYER_USERNAME_FAILED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.usrnameError = "username already exists";
            return newState;
        case actionTypes.EMPLOYER_USERNAME_CHANGED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.usrnameError = undefined;
            return newState;
        case actionTypes.EMPLOYER_EMAIL_FAILED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.emailError = "email already exists";
            return newState;
        case actionTypes.EMPLOYER_EMAIL_CHANGED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.emailError = undefined;
            return newState;
        case actionTypes.EMPLOYER_REGISTRATION_REQUESTED:
            newState = objectAssign({}, state);
            newState.emailError = undefined;
            newState.usrnameError = undefined;
            return newState;
        default:
            return state;
    }
}