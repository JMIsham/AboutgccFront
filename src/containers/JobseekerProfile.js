/**
 * Created by Isham on 5/15/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getCountry} from '../containers/Country';
import Employee from '../components/JobSeekerEditForm';
import * as types from '../constants/actionTypes';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
class JobseekerProfile extends Component{
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
    getCVLink(cv){
        if(cv==="") return <h3 style={{color:"red"}}>No CV is been uploaded</h3>;
        else{
            return( <h3><a href={"http://localhost/aboutGccAsserts/CVs/"+cv} target="_blank"  >
                <i className="sticky note icon"></i>
                view CV</a></h3>);
        }

    }
    handleEmployee(formData){
        console.log(formData);
        this.props.dispatch({
            type:types.EMPLOYEE_REGISTRATION_REQUESTED,
            payload: {
                formData:formData,
                token:this  .props.user.token,
                id:this.props.user.id,
                edit:true
            }
        });
    }
    handleEmployeeUsernameChange(){
        this.props.dispatch({
            type:types.EMPLOYEE_USERNAME_CHANGED,
        });
    }
    handleEmployeeEmailChange(){
        this.props.dispatch({
            type:types.EMPLOYEE_EMAIL_CHANGED,
        });
    }handleEmployeeNICChange(){
    this.props.dispatch({
        type:types.EMPLOYEE_NIC_CHANGED,
    });
}
    handleEmployeeContactNumberChange(){
        this.props.dispatch({
            type:types.EMPLOYEE_CONTACT_NUMBER_CHANGED,
        });
    }
    render(){
        const employee = this.props.user.moreInfo;
        const EditDetailsActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />
        ];
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
                                <div className="header">First Name</div>
                                {employee.first_name}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Last Name</div>
                                {employee.last_name}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Country</div>
                                {getCountry(employee.c_name)}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Contact Number</div>
                                {employee.contact_num}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Username</div>
                                {employee.username}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Email</div>
                                {employee.email}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Address</div>
                                {employee.door_address}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">NIC Number</div>
                                {employee.nic_number}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">About</div>
                                {employee.about_me}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">CV</div>
                                {this.getCVLink(employee.cv)}
                            </div>
                        </div>
                    </div>
                </div>
                <div data-tooltip="Edit Tags" data-position="right center" style={{maxWidth:"40px"}}>
                    <FloatingActionButton mini={true} backgroundColor={"#37474f"} onTouchTap={this.handleOpen.bind(this)}>
                        <ModeEdit />
                    </FloatingActionButton>
                    <Dialog
                        title="Edit Details"
                        actions={EditDetailsActions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose.bind(this)}
                        autoScrollBodyContent={true}
                    >
                        All fields are required
                        <Employee
                            onSubmit = {this.handleEmployee.bind(this)}
                            handleUserNameChange = {this.handleEmployeeUsernameChange.bind(this)}
                            handleEmailChanged = {this.handleEmployeeEmailChange.bind(this)}
                            handleNicChanged = {this.handleEmployeeNICChange.bind(this)}
                            handleContactNumChange = {this.handleEmployeeContactNumberChange.bind(this)}
                            usernameError = {this.props.employeeForm.usrnameError}
                            emailError = {this.props.employeeForm.emailError}
                            nicError = {this.props.employeeForm.nicError}
                            contactNumError = {this.props.employeeForm.contactNumberError}
                        />
                    </Dialog>
                </div>

            </div>);

    }
}

const mapStateToProps = (state)=>{
    return({
        user:state.user,
        employeeForm:state.employeeForm
    });
};
export default connect(mapStateToProps)(JobseekerProfile);