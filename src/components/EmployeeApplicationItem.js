/**
 * Created by Isham on 5/3/2017.
 */
import React,{Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';

class EmployeeApplicationItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }

    callHandleDelete(){
        this.handleClose();
        console.log("deleting!!");
        this.props.dispatch({
            type:actionTypes.EMPLOYEE_CANCEL_APPLICATION_REQUESTED,
            payload:{
                token:this.props.user.token,
                applicationId:this.props.application.application_id
            }
        });
    }

    handleOpen () {
        this.setState({open: true});
    }

    handleClose (){
        this.setState({open: false});
    }
    setStatus(status){
        switch (status){
            case "1":
                return(
                    <div className="ui label green ui ">
                        <i className="unhide icon"></i>Available
                    </div>
                );
            case "2":
                return(
                    <div className="ui label orange ">
                        <i className="hide icon"></i>Hidden
                    </div>
                );
            case "0":
                return(
                    <div className="ui label red ">
                        <i className="hourglass start icon"></i> <i className="hide icon"></i>Not Available
                    </div>
                );
            case "4":
                return(
                    <div className="ui label orange ">
                        <i className="edit icon"></i> <i className="hide icon"></i>Edited
                    </div>
                );

        }

    }

    loadApplicationlable(status){
        switch (status){
            case "2":
                return  <span className="ui right ribbon green  label">Accepted</span>;
            case "3":
                return  <span className="ui right ribbon red  label">Rejected</span>;
            case "1":
                return  <span className="ui right ribbon label">Pending</span>;
        }
    }

    render(){
        const actions = [
            <FlatButton
                label="Do Not Cancel this application"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Cancel this Application"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.callHandleDelete.bind(this)}
            />,
        ];
        const application = this.props.application;
        return(
            <div  className=" ui fluid card">
                <div className="content">
                    {this.loadApplicationlable(application.application_status)}
                    <div className="header" >
                        <a href={"view-post/"+application.id} target="_blank">{application.subject}</a>
                        {this.setStatus(application.status)}
                    </div>
                    <div className="meta">
                        <div>
                            <i className="calendar outline icon">: </i>
                            {application.date}
                        </div>
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui three buttons">
                        <div className="ui basic red button" onClick={this.handleOpen.bind(this)}>{application.application_status=="1" ? "Cancel Application":"Delete"}</div>
                    </div>

                </div>
                <Dialog
                    title="Conform Delete"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    This action will permanently delete this post!
                </Dialog>
            </div>);
    }
}
const mapStateToProps = (state)=>{
    return({
        user:state.user
    });
};
export default connect(mapStateToProps)(EmployeeApplicationItem);