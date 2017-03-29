/**
 * Created by Isham on 3/29/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes'

class LogoutPage extends Component{

    componentWillMount(){
        console.log("LogoutPage componentWillMount",this.props);
        this.props.dispatch({
           type: actionTypes.LOGOUT_REQUESTED
        });
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

export default connect(mapStateToProps)(LogoutPage);