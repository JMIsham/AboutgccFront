/**
 * Created by Isham on 3/29/2017.
 */

import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';

class AdminPage extends Component{

    componentWillMount(){
        this.props.dispatch({
           type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
            payload:{
               token:this.props.user.token
            }
        });
    }
    componentWillReceiveProps(nextProps){
        this.props.dispatch({
            type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
            payload:{
                token:this.props.user.token
            }
        });
    }
    render(){
        console.log("called");
        return(
            <h1>welcome admin {this.props.user.userName}</h1>
        )
    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user
    });
};
AdminPage = withRouter(AdminPage);
export default connect(mapStateToProps)(AdminPage);
