/**
 * Created by Isham on 5/15/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import FlatButton from 'material-ui/RaisedButton';
import {
    TextField
} from 'redux-form-material-ui';
const required = value => value == null ? 'Required' : undefined;

class ChangePassword extends Component{

    handlePassword(value){
        if(this.refs.password.value==undefined) return "Please Enter a Password First";
        return value.toString() == this.refs.password.value.toString() ? undefined : "Password Mismatch"
    }
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="password"
                               id = "oldPassword"
                               type = "password"
                               component={TextField}
                               hintText="Current Password"
                               floatingLabelText="Current Password"
                               errorText = {this.props.passwordError}
                               validate={required}

                        />
                    </div>
                    <div>
                        <Field name="newPassword1"
                               id = "password"
                               type = "password"
                               component={TextField}
                               hintText="New Password"
                               floatingLabelText="New Password"
                               validate={required}
                               ref = "password"
                        />
                    </div>
                    <div>
                        <Field name="newPassword2"
                               id = "rePassword"
                               type = "password"
                               component={TextField}
                               hintText="Conform Password"
                               floatingLabelText="Conform Password"
                               validate={[required,this.handlePassword.bind(this)]}
                        />
                    </div>
                    {this.props.succeeded}
                    <div >

                        <FlatButton type="submit"  labelStyle = {{color :"#2196f3",}} style={{ marginRight:'10px',marginLeft:"20px",}} disabled={submitting} label="Change Password" className="button-submit" />
                        <FlatButton disabled={pristine || submitting} onClick={reset} label="Clear All"  secondary={true} />

                    </div>
                </form>
            </div>
        );
    }
}
ChangePassword = reduxForm({form: 'change password'})(ChangePassword);
export default ChangePassword;

