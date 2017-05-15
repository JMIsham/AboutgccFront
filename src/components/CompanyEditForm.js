/**
 * Created by Isham on 3/11/2017.
 */
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {Flag} from 'semantic-ui-react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem'
import {connect} from 'react-redux';

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
    userNameChanged(){
         this.props.handleUserNameChange();
    }
    emailChanged(){

        this.props.handleEmailChanged();
    }
    usernameExistance(){
        return this.props.usernameError;
    }
    emailExistance(){
        return this.props.emailError;
    }
    render() {
        //
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
                               defaultValue="test"
                               ref="name" withRef/>
                    </div>
                    <div>
                        <Field name="registrationNumber"
                               component={TextField}
                               hintText="RegistrationNumber"
                               floatingLabelText="Company Registration Number"
                               validate={[required]}
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
                            <MenuItem value={1} primaryText="Bahrain" leftIcon={<Flag name='bh' className="flag"/>} ></MenuItem>
                            <MenuItem value={2} primaryText="Iran" leftIcon={<Flag name='ir' className="flag"/>}/>
                            <MenuItem value={3} primaryText="Iraq" leftIcon={<Flag name='iq' className="flag"/>}/>
                            <MenuItem value={4} primaryText="Kuwait" leftIcon={<Flag name='kw' className="flag"/>}/>
                            <MenuItem value={5} primaryText="Oman" leftIcon={<Flag name='om' className="flag"/>}/>
                            <MenuItem value={6} primaryText="Qatar" leftIcon={<Flag name='qa' className="flag"/>}/>
                            <MenuItem value={7} primaryText="Saudi Arabia" leftIcon={<Flag name='sa' className="flag"/>}/>
                            <MenuItem value={8} primaryText="United Arab Emirates" leftIcon={<Flag name='ae' className="flag"/>}/>
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
                               errorText = {this.props.emailError}
                               onChange={this.emailChanged.bind(this)}
                               validate={[ required, email]}/>
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
                               defaultValue="Default Value"
                               onChange={this.userNameChanged.bind(this)}
                               floatingLabelText="username"
                               errorText = {this.props.usernameError}
                               validate={[required,username]}
                        />
                    </div>



                    <div >

                        <FlatButton type="submit"  labelStyle = {{color :"#2196f3",}} style={{ marginRight:'10px',marginLeft:"20px",}} disabled={submitting} label="Update" className="button-submit" />
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
Form = reduxForm({form: 'employerEdit'})(Form);

Form=connect(state => (
{
    initialValues: {
        companyName:state.user.moreInfo.name,
        registrationNumber:state.user.moreInfo.reg_number,
        location:parseInt(state.user.moreInfo.country_id),
        doorAddress:state.user.moreInfo.door_address,
        email:state.user.moreInfo.email,
        contactNumber:state.user.moreInfo.contact_num,
        aboutUs:state.user.moreInfo.about_us,
        username:state.user.moreInfo.username

    }

}))(Form);
export default Form;