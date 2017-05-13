/**
 * Created by Isham on 3/26/2017.
 */
import React, {Component} from 'react';
import Employer from '../components/CompanyRegisterForm';
import Employee from '../components/EmployeeRegistrationForm';
import {connect} from 'react-redux';
import * as types from "../constants/actionTypes";
import SwipeableViews from 'react-swipeable-views';
import {Tab,Tabs} from 'material-ui';
import {Row,Col,Container}from 'react-grid-system';

class RegistrationPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          slideIndex: 0,
        };
    }
    handleEmployer(formData){
        console.log(formData);
        this.props.dispatch({
            type:types.EMPLOYER_REGISTRATION_REQUESTED,
            payload: formData
        });
    }
    handleSwipe(value){
        this.setState(
            {
                slideIndex:value
            }
        );
    }

    handleEmployerUsernameChange(){
        this.props.dispatch({
                type:types.EMPLOYER_USERNAME_CHANGED,
            });
    }
    handleEmployerEmailChange(){
        this.props.dispatch({
                type:types.EMPLOYER_EMAIL_CHANGED,
            });
    }
    handleEmployee(formData){
        console.log(formData);
        this.props.dispatch({
            type:types.EMPLOYEE_REGISTRATION_REQUESTED,
            payload: formData
        });
    }
    handleEmployeeUsernameChange(){
        this.props.dispatch({
                type:types.EMPLOYEE_USERNAME_CHANGED,
            });
    }
    handleEmployeeEmailChange(){
        this.props.dispatch({
                type:types.EMPLOYEE_EMAIL_CHANGED,
            });
    }handleEmployeeNICChange(){
        this.props.dispatch({
                type:types.EMPLOYEE_NIC_CHANGED,
            });
    }
    handleEmployeeContactNumberChange(){
        this.props.dispatch({
                type:types.EMPLOYEE_CONTACT_NUMBER_CHANGED,
            });
    }
    render(){


        return(
            <div style={style}>
                <Container fluid>
                    <Row>
                        <Col lg={2}>
                        </Col>
                        <Col  lg={8}>
                            <Tabs onChange={this.handleSwipe.bind(this)} value={this.state.slideIndex} >
                                <Tab label="Employer Registration" value={0} buttonStyle={{backgroundColor:"#37474f", fontColor:"#000000"}}/>
                                <Tab label="JobSeeker Registration" value={1} buttonStyle={{fontColor:"#37474f",backgroundColor:"#37474f",}}/>
                            </Tabs>
                            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleSwipe.bind(this)}>
                                <div>
                                    <Employer
                                        onSubmit={this.handleEmployer.bind(this)}
                                        handleUserNameChange = {this.handleEmployerUsernameChange.bind(this)}
                                        handleEmailChanged = {this.handleEmployerEmailChange.bind(this)}
                                        usernameError = {this.props.employerForm.usrnameError}
                                        emailError = {this.props.employerForm.emailError}
                                    />
                                </div>
                                <div>
                                    <Employee
                                        onSubmit = {this.handleEmployee.bind(this)}
                                        handleUserNameChange = {this.handleEmployeeUsernameChange.bind(this)}
                                        handleEmailChanged = {this.handleEmployeeEmailChange.bind(this)}
                                        handleNicChanged = {this.handleEmployeeNICChange.bind(this)}
                                        handleContactNumChange = {this.handleEmployeeContactNumberChange.bind(this)}
                                        usernameError = {this.props.employeeForm.usrnameError}
                                        emailError = {this.props.employeeForm.emailError}
                                        nicError = {this.props.employeeForm.nicError}
                                        contactNumError = {this.props.employeeForm.contactNumberError}
                                    />
                                </div>

                            </SwipeableViews>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
const style ={
    padding:"20px",

};
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
    bar: {
        background:'#37474F',
    },
};
const mapStateToProps=(state)=>{
  return(
      {
          employerForm:state.employerForm,
          employeeForm:state.employeeForm
      }
  );
};
export default connect(mapStateToProps)(RegistrationPage);