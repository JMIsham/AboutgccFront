/**
 * Created by Isham on 4/4/2017.
 */
import objectAssign from "object-assign";
import * as actionTypes from "../constants/actionTypes";
export default function adminReducer(state={},action){
    let newState;
    switch(action.type){
        case actionTypes.ALL_EMPLOYER_REQUESTED:
            newState=objectAssign({},state);
            newState.employersRequestPending=true;
            return newState;

        case actionTypes.ALL_EMPLOYER_SUCCESS:
            console.log("listening");
            newState=objectAssign({},state);
            newState.employersRequestPending=false;
            newState.employers=action.payload;
            return newState;
        default:
            return state;
    }
}