/**
 * Created by Isham on 4/23/2017.
 */
import * as actionTypes from '../constants/actionTypes';
import objectAssign from 'object-assign';
export default function commonReducer(state =[],action ){
    let newState;
    switch (action.type){

        case (actionTypes.FETCH_TAGS_SUCCEEDED):
            //changes the user status to pending to show loading window
            newState=objectAssign({},state);
            newState.allTags=action.payload;
            return newState;

        default:
            return state
    }

}