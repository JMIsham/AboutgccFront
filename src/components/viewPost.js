/**
 * Created by Isham on 5/3/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actionTypes from '../constants/actionTypes';
import jwtDecode from 'jwt-decode';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Login from 'material-ui/svg-icons/action/input';
import Apply from 'material-ui/svg-icons/action/note-add';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LoginPage from '../containers/loginPage';
import {Row,Col,Container}from 'react-grid-system';

class viewPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false
        };
    }
    componentWillMount(){
        if(this.props.params.id==undefined) this.props.router.replace("/");
        this.props.dispatch({
            type:actionTypes.POST_MORE_DETAILS_REQUESTED,
            payload:this.props.params.id
        });
    }


    handleOpen () {
        this.props.dispatch({
            type:actionTypes.LOGOUT_REQUESTED
        });
        this.setState({open: true});
    }

    handleClose (){
        this.setState({open: false});
    }

    handleApplication(){
        this.props.dispatch({
            type:actionTypes.JOB_APPLICATION_REQUESTED,
            payload:{
                token:this.props.user.token,
                postID:this.props.post.id
            }
        });
    }
    loadButton(){
        try{
            const roles=(jwtDecode(this.props.user.token)).roles;
            if(roles.indexOf("ROLE_EMPLOYEE")!= -1) {
                return(
                    <div data-tooltip="Apply for this Job" data-position="right center" style={{maxWidth:"40px"}}>
                        <FloatingActionButton mini={true} backgroundColor={"#37474f"} onTouchTap={this.handleApplication.bind(this)}>
                            <Apply />
                        </FloatingActionButton>
                    </div>);
            }else {
                return(
                    <div data-tooltip="Login to your Employee account to Apply for the job" data-position="right center" style={{maxWidth:"40px"}}>
                        <FloatingActionButton mini={true} backgroundColor={"#37474f"} onTouchTap={this.handleOpen.bind(this)}>
                            <Login />
                        </FloatingActionButton>
                    </div>);
            }
        }catch (e){
            return(
                <div data-tooltip="Login to your Employee account to Apply for the job" data-position="right center" style={{maxWidth:"40px"}} >
                    <FloatingActionButton mini={true} backgroundColor={"#37474f"} onTouchTap={this.handleOpen.bind(this)}>
                        <Login />
                    </FloatingActionButton>
                </div>);
        }




    }
    setCountry(){
        const name=this.props.post.c_name;
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
                        <i className="kw flag"></i>
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
                        <i className="qa flag"></i>
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
    loeadPage(){
        try{
            var post = this.props.post;
            const actions = [
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.handleClose.bind(this)}
                />
            ];
            return (
                <Container fluid>
                    <Row>
                        <Col md={2} xs={1}>
                        </Col>
                        <Col md={8} xs={10}>
                            <div style={{padding:"15px"}} className="ui segment">
                                <h2 className="ui header">
                                    <i className="suitcase icon"></i>
                                    <div className="content " >
                                        {this.props.post.subject}
                                        {this.setCountry()}
                                        <div className="sub header">{post.initiated_date}</div>
                                    </div>
                                </h2>
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
                                <div className="ui raised segment">
                                    {post.tags.map((tag)=><span style={{margin:"5px"}} key={post.id+""+tag.tag_id} className="ui tag label">{tag.name}</span>)}
                                </div>
                                <div style={{maxWidth:"400px",margin:"20px"}}>
                                </div>
                                {this.loadButton()}
                                <Dialog
                                    title="Login"
                                    actions={actions}
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose.bind(this)}
                                    autoScrollBodyContent={true}
                                >
                                    <LoginPage/>
                                </Dialog>
                            </div>
                        </Col>
                    </Row>
                </Container>);

        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading posts</div></div>;
        }
    }
    render(){
        return (
            <div style={{paddingTop:"50px"}}>
                {this.loeadPage()}
           </div>);
    }
}
const mapStateToProps = (state)=>{
    return({
        post : state.common.currentPost,
        user:state.user
    });
};
viewPost = withRouter(viewPost);
export default connect(mapStateToProps)(viewPost)
