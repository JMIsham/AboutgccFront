/**
 * Created by Isham on 5/12/2017.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
class ApplicationListItem extends Component{
    getCVLink(){
        const cv = this.props.data.cv;
        if(cv==="") return <h3 style={{color:"red"}}>No CV is been uploaded</h3>;
        else{
            return( <h3><a href={"http://localhost/aboutGccAsserts/CVs/"+cv} target="_blank"  >
                <i className="sticky note icon"></i>
                view CV</a></h3>);
        }
    }
    loadlable(status){
        switch (status){
            case "1":
                return  <span  className="ui left ribbon green  label">Accepted</span>;
            case "2":
                return  <span className="ui left ribbon red  label">Rejected</span>;
            case "3":
                return  <span className="ui left ribbon blue  label">New</span>;
        }
    }
    acceptAction(){
        this.props.dispatch({
            type:actionTypes.ADMIN_ACCEPT_APPLICATION_REQUESTED,
            payload:{
                applicationId:this.props.data.id,
                token:this.props.user.token,
                allApplications:true
            }
        });
    }
     rejectAction(){
        this.props.dispatch({
            type:actionTypes.ADMIN_REJECT_APPLICATION_REQUESTED,
            payload:{
                applicationId:this.props.data.id,
                token:this.props.user.token,
                allApplications:true
            }
        });
    }
    acceptButton(status){
        if(status==="2"||status==="3")return <div className="ui basic green button" onClick={this.acceptAction.bind(this)}>Accept</div>
    }
    rejectButon(status){
        if(status==="1"||status==="3")return <div className="ui basic red button" onClick={this.rejectAction.bind(this)}>Reject</div>

    }
    render(){
        return (
            <div className="card" style={{margin:"15px"}}>
            <div className="content">
                <img className="right floated mini ui image" src={"http://localhost/aboutGccAsserts/DPs/"+this.props.data.dp}/>
                <div className="header" data-tooltip="More Details" data-position="top center">
                    <Link to={"/admin/jobseeker/"+this.props.data.user_id}>{this.props.data.first_name+" "+this.props.data.last_name}</Link>
                </div>
                <div className="meta">
                    <div data-tooltip="Load CV" data-position="top left">{this.getCVLink()}</div>
                    {this.loadlable(this.props.data.status)}
                </div>
                <div className="description">
                    <div data-tooltip="More Post Details" data-position="top left">Job:<Link to={"/admin/post/"+this.props.data.post_id}>{this.props.data.subject}</Link></div>
                </div>
            </div>
            <div className="extra content">
                {this.props.data.date}
                <div className="ui two buttons">
                    {this.acceptButton(this.props.data.status)}
                    {this.rejectButon(this.props.data.status)}
                </div>
            </div>
        </div>)
    }
}
const mapStateToProps=(state)=>{
    return({
        user:state.user,
    });
};
export default connect(mapStateToProps)(ApplicationListItem);