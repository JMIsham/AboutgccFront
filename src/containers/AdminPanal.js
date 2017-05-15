/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'
import jwtDecode from 'jwt-decode'
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router';
import {cyan100,cyan500} from 'material-ui/styles/colors';
import EmployerIcon from 'material-ui/svg-icons/action/account-balance';
import PostIcon from 'material-ui/svg-icons/action/work';
import ApplicationIcon from 'material-ui/svg-icons/action/note-add';
import JobSeekerIcon from 'material-ui/svg-icons/action/assignment-ind';
import PasswordIcon from 'material-ui/svg-icons/action/lock';
import IconButton from 'material-ui/IconButton';
import * as actionTypes from '../constants/actionTypes';
import ChangePassword from '../components/ChangePassword';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


import Apply from 'material-ui/svg-icons/action/note-add';


class AdminPanal extends Component{
    constructor(props){
        super(props);
        this.state={
            openChangePassword:false
        }
    }
    handleChangePassword(formData){
        this.props.dispatch({
            type:actionTypes.USER_CHANGE_PASSWORD_REQUESTED,
            payload:{
                formData:formData,
                token:this.props.state.user.token
            }
        });
    }
    handleOpenPassword(){
        this.setState({
            openChangePassword:true
        });
    }
    handleClosePassword(){
        this.setState({
            openChangePassword:false
        });
        this.props.dispatch({type:actionTypes.USER_CHANGE_PASSWORD_CLOSED});
    }
    loadPage(){
        try{
            const roles=(jwtDecode(this.props.state.user.token)).roles;
            console.log(roles);
            if(roles.indexOf("ROLE_SUPER_ADMIN")== -1) this.props.router.replace("/logout");
        }catch (e){
            this.props.router.replace("/logout");
        }


    }

    render(){
        this.loadPage();
        const passwordActions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClosePassword.bind(this)}
            />
        ];

        return(

            <div>
                <Drawer open={true} openSecondary={true} width={"84px"} >
                        <div style={{background:'#37474F',minHeight:'100%'}}>
                            <Link to="/admin" >
                                <IconButton tooltip="Applications" tooltipPosition="bottom-right" iconStyle={{width:"40px",height:"40px"}} style={{marginTop:"55px",width:"80px",height:"80px"}}>
                                    <ApplicationIcon color={cyan500} hoverColor={cyan100} />
                                </IconButton>
                            </Link>
                            <Link to="/admin/posts">
                                <IconButton tooltip="Posts"  tooltipPosition="bottom-right" iconStyle={{width:"40px",height:"40px"}} style={{marginTop:"10px",width:"80px",height:"80px"}}>
                                    <PostIcon color={cyan500} hoverColor={cyan100}/>
                                </IconButton>
                            </Link>
                            <Link to="/admin/employers">
                                <IconButton tooltip="Employers" tooltipPosition="bottom-right" iconStyle={{width:"40px",height:"40px"}} style={{marginTop:"10px",width:"80px",height:"80px"}}>
                                    <EmployerIcon color={cyan500} hoverColor={cyan100}  />
                                </IconButton>
                            </Link>
                            <Link to="/admin/jobseekers">
                                <IconButton tooltip="JobSeekers" tooltipPosition="bottom-right" iconStyle={{width:"40px",height:"40px"}} style={{marginTop:"10px",width:"80px",height:"80px"}}>
                                    <JobSeekerIcon color={cyan500} hoverColor={cyan100} />
                                </IconButton>
                            </Link>
                            <IconButton onTouchTap={this.handleOpenPassword.bind(this)} tooltip="Change Password" tooltipPosition="bottom-center" iconStyle={{width:"40px",height:"40px"}} style={{marginTop:"10px",width:"80px",height:"80px"}}>
                                <PasswordIcon color={cyan500} hoverColor={cyan100} />
                            </IconButton>

                        </div>
                </Drawer>
                <div style={{marginRight:"80px"}}>

                    {this.props.children}

                </div>
                <Dialog
                    title="Change Password"
                    actions={passwordActions}
                    modal={false}
                    open={this.state.openChangePassword}
                    onRequestClose={this.handleClosePassword.bind(this)}
                    autoScrollBodyContent={true}
                >
                    <ChangePassword
                        onSubmit={this.handleChangePassword.bind(this)}
                        passwordError={this.props.state.user.wrongPassword}
                        succeeded = {this.props.state.user.passwordChangeSucceeded}
                    />
                </Dialog>

            </div>
        );
    }
}
const mapStateToProps=(state)=> {
    return({
        state:state
    }
    );
};
AdminPanal=withRouter(AdminPanal);
export default connect(mapStateToProps)(AdminPanal);