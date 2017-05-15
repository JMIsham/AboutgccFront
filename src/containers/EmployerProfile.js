/**
 * Created by Isham on 5/15/2017.
 */
import React ,{Component} from 'react';
import * as types from '../constants/actionTypes';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Employer from '../components/CompanyEditForm';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

class EmployerProfile extends Component{

    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    handleOpen(){
        this.setState({
            open:true
        });
    }
    handleClose(){
        this.setState({
            open:false
        });
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
    handleEmployer(formData){
        console.log(formData);
        this.props.dispatch({
            type:types.EMPLOYER_REGISTRATION_REQUESTED,
            payload: {
                data:formData,
                token:this.props.user.token,
                edit:true,
                id:this.props.user.id
            }
        });
        console.log(formData);
    }
    makePage(){
        const employer = this.props.user.moreInfo;
        return(
            <div style={{margin:"20px"}}>
                <br/>
                <h4 className="ui horizontal divider header">
                    <i className="user icon"></i>
                    Profile Details
                </h4>
                <div className="ui  segment" >
                    <div className="ui  relaxed divided list">
                        <div className="item">
                            <div className="content">
                                <div className="header">Company Name</div>
                                {employer.name}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Country</div>
                                {employer.c_name}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Contact Number</div>
                                {employer.contact_num}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Username</div>
                                {employer.username}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Email</div>
                                {employer.email}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Address</div>
                                {employer.door_address}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Registration Number</div>
                                {employer.reg_number}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">About</div>
                                {employer.about_us}
                            </div>
                        </div>
                        </div>
                    </div>
                <div data-tooltip="Edit Tags" data-position="right center" style={{maxWidth:"40px"}}>
                    <FloatingActionButton mini={true} backgroundColor={"#37474f"} onTouchTap={this.handleOpen.bind(this)}>
                        <ModeEdit />
                    </FloatingActionButton>
                </div>

                </div>

        )
    }

    render(){
        const EditDetailsActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />
        ];
        return (
            <div>
                {this.makePage()}
                <Dialog
                    title="Edit Details"
                    actions={EditDetailsActions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                    autoScrollBodyContent={true}
                >
                    All fields are required

                    <Employer
                        onSubmit={this.handleEmployer.bind(this)}
                        handleUserNameChange = {this.handleEmployerUsernameChange.bind(this)}
                        handleEmailChanged = {this.handleEmployerEmailChange.bind(this)}
                        usernameError = {this.props.employerForm.usrnameError}
                        emailError = {this.props.employerForm.emailError}
                    />
                </Dialog>
            </div>

        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.user,
        employerForm:state.employerForm
    }
};
export default connect(mapStateToProps)(EmployerProfile);