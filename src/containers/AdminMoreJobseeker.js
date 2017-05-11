/**
 * Created by Isham on 5/11/2017.
 */
import React ,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
class AdminMoreJobseeker extends Component{

    render(){
        return <h1>this is more employer</h1>
    }
}
const mapStateToProps =(state)=>{
    return({
        user:state.user,
        adminData:state.adminData
    });
} ;
AdminMoreJobseeker=withRouter(AdminMoreJobseeker);
export default connect(mapStateToProps)(AdminMoreJobseeker);