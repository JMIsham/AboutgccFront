/**
 * Created by Isham on 3/4/2017.
 */
import React from "react";
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux';
import * as types from "../constants/actionTypes";
import {Row,Col,Container}from 'react-grid-system'
import MatLoginForm from '../components/MatLoginForm';
var Router = require('react-router');
import CompanyRegistrationForm from '../components/CompanyRegisterForm';
import {withRouter} from 'react-router';

class LoginPage extends React.Component{

    componentWillMount(){
        if(this.props.user.loggedIn){
            this.props.router.replace("/mypage");
        }

    }
    componentWillReceiveProps(nextProps){
        console.log("next props in login page",nextProps);
        if(this.props.user.loggedIn){
            this.props.router.replace("/mypage");
        }
    }
    doLogin(formData) {

        this.props.dispatch({
            type: types.LOGIN_REQUESTED,
            payload: {
                username: formData.username,
                password: formData.password
            }
        });

    }
    handleLoginDataChange(){
       this.props.dispatch({
           type:types.LOGOUT_FORM_CHANGED_AFTER_ERROR
       })
    }
    render(){

        return (
            <div style={styles.mainDiv} >
                <Container fluid>
                    <Row>
                        <Col lg={4}>
                        </Col>
                        <Col  lg={4}>
                            <MatLoginForm onSubmit = {this.doLogin.bind(this)} handleFormChange={this.handleLoginDataChange.bind(this)} hasError={this.props.user.loginError}/>

                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }

}
const styles = {
    title: {
        color: '#ECEFF1',
        cursor: 'pointer',
    },
    bar: {

        background:'#37474F',
        position: "fixed",
        top: 0,

    },
    mainDiv:{
      marginTop:'50px',
    }
};
function mapStateToProps(state){
    return {
        user:state.user
    }
}
LoginPage = withRouter(LoginPage);
export default connect(mapStateToProps)(LoginPage);
// export default LoginPage;
