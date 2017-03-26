/**
 * Created by Isham on 3/26/2017.
 */
import React, {Component} from 'react';
import Employer from '../components/CompanyRegisterForm';
import {connect} from 'react-redux';
import * as types from "../constants/actionTypes";


class RegistrationPage extends Component{
    handleEmployer(formData){
        console.log(formData);
        this.props.dispatch({
            type:types.EMPLOYER_REGISTRATION_REQUESTED,
            payload: formData
        });
    }
    render(){

        return(
            <div style={style}>
                <Employer onSubmit={this.handleEmployer.bind(this)}/>
            </div>
        );
    }
}
const style ={
    padding:"20px",
};
export default connect()(RegistrationPage);