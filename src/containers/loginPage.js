/**
 * Created by Isham on 3/4/2017.
 */
import React from "react";
import LoginForm from "../components/LoginForm";
import {connect} from 'react-redux';
import * as types from "../constants/actionTypes";

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
                            <LoginForm onSubmit = {this.doLogin.bind(this)}/>
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
