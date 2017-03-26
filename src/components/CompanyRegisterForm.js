/**
 * Created by Isham on 3/11/2017.
 */
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem'

import {
    SelectField,
    TextField
} from 'redux-form-material-ui'

// validation functions
const required = value => value == null ? 'Required' : undefined;
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;
const number = value => value && !/^[.+]+[0-9]{11,20}$/i.test(value) ? 'invalid contact number' : undefined;
const username = value => value && !/^[A-Z0-9._%+-@]{3,100}$/i.test(value) ? 'invalid username' : undefined;

class Form extends Component {

    constructor(props) {
        super(props);

    }

    handlePassword(value){
        if(this.refs.password.value==undefined) return "Please Enter a Password First";
        return value.toString() == this.refs.password.value.toString() ? undefined : "Password Mismatch"
    }

    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <Field name="companyName"
                               component={TextField}
                               hintText="CompanyName"
                               floatingLabelText="Company Name"
                               validate={required}
                               ref="name" withRef/>
                    </div>
                    <div>
                        <Field name="registrationNumber"
                               component={TextField}
                               hintText="RegistrationNumber"
                               floatingLabelText="Company Registration Number"
                               validate={required}
                               />
                    </div>
                    <div>
                        <Field
                            name="location"
                            component={SelectField}
                            hintText="Select a Location"
                            floatingLabelText="Location"
                            validate={required}
                            value = {1}

                            ref = "country" withRef


                        >
                            <MenuItem value={1} primaryText="Bahrain" />
                            <MenuItem value={2} primaryText="Iran" />
                            <MenuItem value={3} primaryText="Iraq"/>
                            <MenuItem value={4} primaryText="Kuwait"/>
                            <MenuItem value={5} primaryText="Oman"/>
                            <MenuItem value={6} primaryText="Qatar"/>
                            <MenuItem value={7} primaryText="Saudi Arabia"/>
                            <MenuItem value={8} primaryText="United Arab Emirates"/>
                        </Field>
                    </div>
                    <div>
                        <Field name="doorAddress"
                               component={TextField}
                               hintText="Address"
                               floatingLabelText="Door Address"
                               validate={required}
                               multiLine={true}
                               rows={1}
                               rowsMax={4}
                        />
                    </div>
                    <div>
                        <Field name="email"
                               component={TextField}
                               hintText="Email"
                               floatingLabelText="Email"
                               validate={[ required, email ]}/>
                    </div>
                    <div>
                        <Field name="contactNumber"
                               component={TextField}
                               hintText="778696585"
                               floatingLabelText="Contact Number"
                               validate={[required,number]}
                               />
                    </div>
                    <div>
                        <Field name="aboutUs"
                               component={TextField}
                               hintText="Brief the company hear..."
                               floatingLabelText="About Us"
                               validate={required}
                               multiLine={true}
                               rows={1}
                               rowsMax={4}
                        />
                    </div>
                    <div>
                        <Field name="username"
                               component={TextField}
                               hintText="username"
                               id = "Username"
                               floatingLabelText="username"
                               validate={[required,username]}
                        />
                    </div>
                    <div>
                        <Field name="password"
                               id = "password"
                               type = "password"
                               component={TextField}
                               hintText="Password"
                               floatingLabelText="Password"
                               validate={required}
                               ref = "password"
                        />
                    </div>
                    <div>
                        <Field name="rePassword"
                               id = "rePassword"
                               type = "password"
                               component={TextField}
                               hintText="Password"
                               floatingLabelText="Re Enter password"
                               validate={[required,this.handlePassword.bind(this)]}



                        />
                    </div>

                    <div >

                        <FlatButton type="submit"  labelStyle = {{color :"#2196f3",}} style={{ marginRight:'10px',marginLeft:"20px",}} disabled={submitting} label="Register" className="button-submit" />
                        <FlatButton disabled={pristine || submitting} onClick={reset} label="Clear All"  secondary={true} />

                    </div>
                </form>
            </div>
        )
    }
}

const style = {
    textAlign : "center"
};
export default reduxForm({
    form: 'employeeRegistration'
})(Form)