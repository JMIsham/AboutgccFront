/**
 * Created by Isham on 4/20/2017.
 */
import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actionTypes from '../constants/actionTypes';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import EditPost from '../components/EditPostForm';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class CompanyPostMore extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }
    handleSubmit(formData){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_EDIT_POST_REQUESTED,
            payload:{
                id:parseInt(this.props.post.id),
                formData:formData,
                token:this.props.user.token
            }
        });
    }

    handleOpen () {
        this.setState({open: true});
    }

    handleClose (){
        this.setState({open: false});
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
    setCountry(){
        const name=this.props.post.country_name;
        switch (name){
            case "Bahrain":
                return(
                    <div className="ui label" data-tooltip="Bahrain" data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="bh flag"></i>
                    </div>
                );
            case "Iran":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="ir flag"></i>
                    </div>
                );
            case "Iraq":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="iq flag"></i>
                    </div>
                );
            case "Kuwait":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="qw flag"></i>
                    </div>
                );
            case "Oman":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="ae flag"></i>
                    </div>
                );
            case "Qatar":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="qt flag"></i>
                    </div>
                );
            case "Saudi Arabia":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="sa flag"></i>
                    </div>
                );
            case "United Arab Emirates":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="ae flag"></i>
                    </div>
                );

        }
    }
    generatePage(){
        try{
            console.log("props at ",this.props.post);
            var post = this.props.post;
            return (
                <div style={{padding:"15px"}} className="ui segment">
                    <h2 className="ui header">
                        <i className="suitcase icon"></i>
                        <div className="content " >
                            {this.props.post.subject}
                            {this.setStatus()}
                            {this.setCountry()}
                            <div className="sub header">{post.initiated_date}</div>
                        </div>
                    </h2>
                    <div data-tooltip="Edit Details" data-position="right center" style={{maxWidth:"40px"}}>
                        <FloatingActionButton mini={true} backgroundColor={"#37474f"} onTouchTap={this.handleOpen.bind(this)}>
                            <ModeEdit />
                        </FloatingActionButton>
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
                            <div className="sub header">Adding Tags improves the search results of Jobs

                            </div>
                        </div>
                    </h4>
                    <div data-tooltip="Edit Tags" data-position="right center" style={{maxWidth:"40px"}}>
                    <FloatingActionButton mini={true} backgroundColor={"#37474f"} >
                        <ModeEdit />
                    </FloatingActionButton>
                        </div>
                    <div className="ui raised segment">
                        {post.tags.map((tag)=><span key={post.id+""+tag.tag_id} className="ui tag label">{tag.name}</span>)}
                    </div>
                </div>


            );
        }catch(e){
            this.props.router.replace("/employer/posts");
        }

    }
    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />
        ];
       return(<div >
           {this.generatePage()}
           <div style={{maxWidth:"400px",margin:"20px"}}>
           </div>
           <Dialog
               title="New Post"
               actions={actions}
               modal={false}
               open={this.state.open}
               onRequestClose={this.handleClose.bind(this)}
               autoScrollBodyContent={true}
           >
               All fields are required
               <EditPost onSubmit={this.handleSubmit.bind(this)}/>

           </Dialog>

           </div>);

    }
}
const mapStateToProps = (state)=>{
    return({
        user:state.user,
        post:state.employerReducer.currentPost
    });
};
CompanyPostMore = withRouter(CompanyPostMore);

export default connect(mapStateToProps)(CompanyPostMore);