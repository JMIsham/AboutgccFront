/**
 * Created by Isham on 3/29/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import {withRouter} from 'react-router';

class LogoutPage extends Component{

    componentWillMount(){
        this.props.dispatch({
           type: actionTypes.LOGOUT_REQUESTED
        });
        this.props.router.replace("/");
    };
    render(){
        return null;
    };
}

const mapStateToProps=(state)=>{
    return({
       pageState:state
    });
};
LogoutPage = withRouter(LogoutPage);
export default connect(mapStateToProps)(LogoutPage);