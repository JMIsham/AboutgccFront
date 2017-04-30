/**
 * Created by Isham on 4/30/2017.
 */

import objectAssign from "object-assign";
import * as actionTypes from "../constants/actionTypes";
export default function EmployeeFormReducer(state={},action){
    let newState;
    switch (action.type) {
        case actionTypes.EMPLOYEE_USERNAME_INVALID:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.usrnameError = "username already exists";
            return newState;
        case actionTypes.EMPLOYEE_USERNAME_CHANGED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.usrnameError = undefined;
            return newState;
        case actionTypes.EMPLOYEE_EMAIL_INVALID:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.emailError = "email already exists";
            return newState;
        case actionTypes.EMPLOYEE_EMAIL_CHANGED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.emailError = undefined;
            return newState;
        case actionTypes.EMPLOYEE_CONTACT_NUMBER_INVALID:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.contactNumberError = "contact number is already used by another user";
            return newState;
        case actionTypes.EMPLOYEE_CONTACT_NUMBER_CHANGED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.contactNumberError = undefined;
            return newState;
        case actionTypes.EMPLOYEE_NIC_INVALID:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.nicError = "nic already exists";
            return newState;
        case actionTypes.EMPLOYEE_NIC_CHANGED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.nicError = undefined;
            return newState;

        default:
            return state;
    }
}