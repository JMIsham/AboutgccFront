/**
 * Created by Isham on 5/3/2017.
 */
import objectAssign from 'object-assign';
import * as actionTypes from '../constants/actionTypes';

export default function EmployeeReducer(state={},action){
    let newState;
    switch (action.type) {
        case actionTypes.EMPLOYEE_ALL_APPLICATIONS_SUCCEEDED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.AllApplications = action.payload;
            return newState;

        default:
            return state;
    }
}
