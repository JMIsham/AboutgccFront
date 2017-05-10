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
            newState.employers=undefined;
            return newState;

        case actionTypes.ALL_EMPLOYER_SUCCESS:
            console.log("listening");
            newState=objectAssign({},state);
            newState.employersRequestPending=false;
            newState.employers=action.payload;
            return newState;
        case actionTypes.GET_SPECIFIC_EMPLOUER_REQUESTED:
            newState=objectAssign({},state);
            newState.currentemployer=undefined;
            return newState;

        case actionTypes.GET_SPECIFIC_EMPLOUER_SUCCEEDED:
            newState=objectAssign({},state);
            newState.currentemployer=action.payload[0][0];
            newState.currentemployerPosts=action.payload[1];
            return newState;
        default:
            return state;
    }
}