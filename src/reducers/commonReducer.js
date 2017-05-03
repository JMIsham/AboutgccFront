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
        case (actionTypes.FETCH_ALL_POSTS_SUCCEEDED):
            //changes the user status to pending to show loading window
            newState=objectAssign({},state);
            newState.allPosts=action.payload;
            return newState;
        case (actionTypes.POST_MORE_DETAILS_REQUESTED):
            //changes the user status to pending to show loading window
            newState=objectAssign({},state);
            newState.currentPost=undefined;
            return newState;
        case (actionTypes.POST_MORE_DETAILS_SUCCEEDED):
            //changes the user status to pending to show loading window
            newState=objectAssign({},state);
            newState.currentPost=action.payload[0];
            return newState;

        default:
            return state
    }

}