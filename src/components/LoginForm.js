/**
 * Created by Isham on 3/4/2017.
 */
import React from 'react';
import {Field,reduxForm} from "redux-form";



const LoginForm = (props) => {
    console.log("test");

    return (
        <div style={style}>
            <form onSubmit={props.handleSubmit}>


                <Field
                    component = "input"
                    name = "username"
                    id = "username"
                    type = "text"
                    placeholder = "username or email address"
                    required = "required"
                />
                <Field
                    component = "input"
                    name = "password"
                    id = "password"
                    type = "password"
                    placeholder = "password"
                    required = "required"
                />
                <button type="submit">
                    login>>
                </button>
            </form>
        </div>

    );
};
const style = {
    textAlign: 'center'
};
LoginForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({form: 'login'})(LoginForm);