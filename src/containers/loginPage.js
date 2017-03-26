/**
 * Created by Isham on 3/4/2017.
 */
import React from "react";
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux';
import * as types from "../constants/actionTypes";
import {Row,Col,Container}from 'react-grid-system'
import MatLoginForm from '../components/MatLoginForm';
import CompanyRegistrationForm from '../components/CompanyRegisterForm';


class LoginPage extends React.Component{

    doLogin(formData) {
        console.log(this.props);
        this.props.dispatch({
            type: types.LOGIN_REQUESTED,
            payload: {
                username: formData.username,
                password: formData.password
            }
        });

    }
    render(){
        return (
            <div style={styles.mainDiv} >
                <Container fluid>
                    <Row>
                        <Col lg={4}>
                        </Col>
                        <Col  lg={4}>
                            <MatLoginForm onSubmit = {this.doLogin.bind(this)}/>

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

export default connect()(LoginPage);
// export default LoginPage;
