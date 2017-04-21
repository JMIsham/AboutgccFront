/**
 * Created by Isham on 4/21/2017.
 */
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
    DatePicker,
    TextField
} from 'redux-form-material-ui'

// validation functions
const required = value => value == null ? 'Required' : undefined;
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;
const number = value => value && !/^[.+]+[0-9]{11,20}$/i.test(value) ? 'invalid contact number' : undefined;
const username = value => value && !/^[A-Z0-9._%+-@]{3,100}$/i.test(value) ? 'invalid username' : undefined;
var x;
class Form extends Component {

    constructor(props) {
        super(props);
        x=props;

    }
    render() {
        //
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <Field name="subject"
                               component={TextField}
                               hintText="A very Brief of the offer"
                               floatingLabelText="Subject"
                               validate={required}
                               fullWidth={true}
                               defaultValue="test"
                               ref="subject" withRef/>
                    </div>
                    <div>
                        <Field
                            name="location"
                            component={SelectField}
                            hintText="Select a Location"
                            floatingLabelText="Location"
                            validate={required}
                            ref = "country" withRef
                        >
                            <MenuItem value={1}  primaryText="Bahrain" leftIcon={<Flag name='bh' className="flag"/>} ></MenuItem>
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
                        <Field name="about_job"
                               component={TextField}
                               hintText="explain about the job hear"
                               floatingLabelText="Job Details"
                               validate={required}
                               multiLine={true}
                               rows={1}
                               fullWidth={true}
                               rowsMax={4}
                        />
                    </div>
                     <div>
                        <Field name="about_skill"
                               component={TextField}
                               hintText="explain about the skills needed to apply for the job"
                               floatingLabelText="Requirements"
                               validate={required}
                               multiLine={true}
                               fullWidth={true}
                               rows={1}
                               rowsMax={4}
                        />
                    </div>
                     <div>
                        <Field name="about_salary"
                               component={TextField}
                               hintText="salary details for the job"
                               floatingLabelText="Salary Details"
                               validate={required}
                               multiLine={true}
                               fullWidth={true}
                               rows={1}
                               rowsMax={4}
                        />
                    </div>
                    <div>
                        <Field
                            name="exp_date"
                            component={DatePicker}
                            format={null}
                            hintText="Apply Before"
                            validate={required}
                        />
                    </div>
                    <div >

                        <FlatButton type="submit"  labelStyle = {{color :"#2196f3",}} style={{ marginRight:'10px',marginLeft:"20px",}} disabled={submitting} label="Post" className="button-submit" />
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
    form: 'newPostForm'
})(Form)
