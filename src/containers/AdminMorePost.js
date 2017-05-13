/**
 * Created by Isham on 5/11/2017.
 */
import React, {Component} from "react";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import {getCountry} from './Country';
import {Link} from 'react-router';
class AdminMorePost extends Component{

    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.ADMIN_SPECIFIC_POST_REQUESTED,
            payload:{
                token:this.props.user.token,
                id:this.props.params.id
            }
        });
    }
    handleAllow(){
        const postId=this.props.post.id;
        this.props.dispatch({
            type:actionTypes.ADMIN_ALLOW_POST_REQUESTED,
            payload:{
                postId:postId,
                token:this.props.user.token,
                more:true
            }
        });
    }
    handleReject(){
        const postId=this.props.post.id;
        this.props.dispatch({
            type:actionTypes.ADMIN_BLOCK_POST_REQUESTED,
            payload:{
                postId:postId,
                token:this.props.user.token,
                more:true
            }
        });
    }
    loadAllowButton(status){
        if(status==="3" || status==="4"||status==="5") return <div className="ui basic green button" onClick={this.handleAllow.bind(this)} >Allow Post</div>;

    }
    loadRejectButton(status){
        if(status==="3" || status==="4"||status==="1") return <div className="ui basic red button" onClick={this.handleReject.bind(this)}>Reject Post</div>;

    }
    setStatus(){
        switch (this.props.post.status){
            case "1":
                return(
                    <div className="ui label green ui right floated">
                        <i className="unhide icon"></i>Activated
                    </div>
                );
            case "2":
                return(
                    <div className="ui label orange right floated">
                        <i className="hide icon"></i>Hidden
                    </div>
                );
            case "3":
                return(
                    <div className="ui label right floated">
                        <i className="hourglass start icon"></i> <i className="hide icon"></i>Pending
                    </div>
                );
            case "4":
                return(
                    <div className="ui label right floated">
                        <i className="edit icon"></i> <i className="hide icon"></i>Edited
                    </div>
                );

        }

    }
    makePage(){
        try{
            var post = this.props.post;
            return (
                <div style={{padding:"15px"}} className="ui segment">
                    <h2 className="ui header">
                        <i className="suitcase icon"></i>
                        <div className="content " >
                            {this.props.post.subject}
                            {this.setStatus()}
                            {getCountry(this.props.post.country_name)}
                            <div className="sub header">{post.initiated_date}</div>
                        </div>
                    </h2>
                    <div className="ui raised segment">
                        <span className="ui gray ribbon label">Employer</span>
                        <span><Link to={"/admin/employer/"+post.user_id}>{post.com_name}</Link></span>
                    </div>
                    <div className="ui raised segment">
                        <span className="ui gray ribbon label">Details</span>
                        <span>{post.about_job}</span>
                    </div>
                   <div className="ui raised segment">
                        <span className="ui gray ribbon label">Skills</span>
                        <span>{post.about_skill}</span>
                    </div>
                    <div className="ui raised segment">
                        <span className="ui gray ribbon label">Salary</span>
                        <span>{post.about_salary}</span>
                    </div>
                    <div className="ui raised segment">
                        <span className="ui gray ribbon label">Apply Before</span>
                        <span>{post.expire_date}</span>
                    </div>
                    <h4 className="ui header">
                        <i className="tags icon"></i>
                        <div className="content " >
                            Tags
                        </div>
                    </h4>
                    <div className="ui raised segment">
                        {post.tags.map((tag)=><span style={{margin:"5px"}} key={post.id+""+tag.tag_id} className="ui tag label">{tag.name}</span>)}
                    </div>
                    <div className="ui three buttons">
                        {this.loadAllowButton(post.status)}
                        {this.loadRejectButton(post.status)}
                    </div>
                </div>

            );
        }
            catch (e){
                return    <div className="ui active dimmer"><div className="ui text loader huge">loading Details</div></div>;
            }

    }
    render(){
        return (
            <div style={{margin:"40px auto",marginTop:"80px"}}>
                {this.makePage()}
            </div>
            );
    }
}
const mapStateToProps = (state) =>{
    return({
        user:state.user,
        post:state.adminData.currentPost
    });
};
AdminMorePost = withRouter(AdminMorePost);
export default connect(mapStateToProps)(AdminMorePost);