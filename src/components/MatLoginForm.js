/**
 * Created by Isham on 3/11/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import {
    TextField,
    DatePicker,
} from 'redux-form-material-ui';
import {Link} from 'react-router';
// validation functions
const required = value => value == null ? 'Required' : undefined;
const username = value => value && !/^[A-Z0-9._%+-@]{3,100}$/i.test(value) ? 'invalid username' : undefined;


class Form extends Component {

    errorMessage(){
        if(this.props.hasError){
            return (<h4 style={{color:"red"}}>Invalid username password combination!!</h4>);
        }
        return undefined;
    }

    render() {
        const { handleSubmit   , submitting } = this.props;
        return (
            <div style={style}>
                <form onSubmit={handleSubmit} >
                    <div>
                        <Field name="username"
                               component={TextField}
                               hintText="username"
                               id = "username"
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
                               floatingLabelText="password"
                               validate={[required]}
                        />
                    </div>
                    {/*<div>*/}
                        {/*<Field name="when"*/}
                               {/*component={DatePicker}*/}
                               {/*format={null}*/}
                               {/*onChange={(value) => {*/}
                                   {/*console.log('date changed ',value); // eslint-disable-line no-console*/}
                               {/*}}*/}
                               {/*hintText="Day of delivery?"*/}
                               {/*validate={required}/>*/}
                    {/*</div>*/}
                    <br/>
                    {this.errorMessage()}
                    <div>
                        <FlatButton type="submit"  labelStyle = {{color :"#2196f3"}} disabled={submitting} label="login" className="button-submit" />
                        <Link to="/register"><FlatButton label="Register"    labelStyle = {{color :"#2196f3"}} style={{marginLeft:'10px'}}></FlatButton></Link>
                    </div>

                </form>
            </div>

        )
    }
}
const style = {
    textAlign : 'center'
};
export default reduxForm({
    form: 'example',
    initialValues: {
        delivery: 'delivery',
        name: 'Jane Doe',
        cheese: 'Cheddar'
    }
})(Form)
