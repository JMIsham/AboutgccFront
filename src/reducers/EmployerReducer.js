/**
 * Created by Isham on 4/15/2017.
 */
import objectAssign from 'object-assign';
import * as actionTypes from '../constants/actionTypes';

export default function EmployerReducer(state={},action){
    let newState;
    switch (action.type) {
        case actionTypes.EMPLOYER_ALL_POSTS_SUCCEEDED:
            //listen to the username checking action and enables the loading near username
            newState = objectAssign({}, state);
            newState.AllPosts = action.payload;
            return newState;

        case actionTypes.EMPLOYER_ALL_POSTS_NO_CONTENT:
            newState = objectAssign({}, state);
            newState.AllPosts = [];
            return newState;
        case actionTypes.EMPLOYER_MORE_POST_REQUESTED:
            newState = objectAssign({}, state);
            newState.currentPost=action.payload;
            return newState;
        case actionTypes.EMPLOYER_POST_MORE_REQUESTED:
            newState = objectAssign({},state);
            newState.unUsedTags = action.payload.unUsedTags;
            newState.UsedTags = action.payload.usedTags;
            return newState;
        default:
            return state;
    }
}