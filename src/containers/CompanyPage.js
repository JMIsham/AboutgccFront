import React,{Component} from 'react';
import {withRouter,Link} from 'react-router';
import {connect} from 'react-redux';
import {Row,Col,Container}from 'react-grid-system';
import * as actionTypes from '../constants/actionTypes';
import Paper from 'material-ui/Paper';
import CompanyJobPosts from  './CompanyJobPosts';
import jwtDecode from 'jwt-decode';
import Dropzone from 'react-dropzone';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ChangePassword from '../components/ChangePassword';


class CompanyPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            postsClicked:true,
            profileClicked:false,
            loginClicked:false,
            open:false,
            openChangePassword:false,
            files: []
        };
    }
    onDrop(files, rejected) {
        this.setState({
            files
        });
    }
    handleChangePassword(formData){
        this.props.dispatch({
            type:actionTypes.USER_CHANGE_PASSWORD_REQUESTED,
            payload:{
                formData:formData,
                token:this.props.user.token
            }
        });
    }
    handleDP(){
        this.props.dispatch({
            type:actionTypes.USER_DP_REQUESTED,
            payload:{
                file:this.state.files[0],
                token:this.props.user.token,
                user:"EMPLOYER"
            }
        })
    }
    loadPage(){
        try{
            const roles=(jwtDecode(this.props.user.token)).roles;
            console.log(roles);
            if(roles.indexOf("ROLE_EMPLOYER")== -1) this.props.router.replace("/logout");
        }catch (e){
            this.props.router.replace("/logout");
        }


    }
    handleOpen(){
        this.setState({
            open:true
        })
    }
    handleClose(){
        this.setState({
            open:false,
            files:[]
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

    handleJobPosts(){
        this.props.router.push("/employer/posts")
    }
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_MORE_INFO_REQUESTED,
            payload:{
                userType:1,
                id:this.props.user.id,
                token:this.props.user.token
            }
        });
    }

    handleAllPosts(){
        this.setState({
            postsClicked:true,
            profileClicked:false,
            loginClicked:false,
        });

    }
    DisplayPage(){
        if(this.state.postsClicked){
            return <CompanyJobPosts/>;
        }
    }
    prepareProfileSection(){
        try{
        return(
            <div className="ui card centered" style={{maxWidth:"200px",minWidth:"100px",paddingTop:"5px"}}>
                <div className="image" data-tooltip="Click to Change DP" data-position="bottom center" onClick={this.handleOpen.bind(this)}>
                    <img src={"http://localhost/aboutGccAsserts/DPs/"+this.props.user.moreInfo.dp} style={{backgroundColor:"red"}}/>
                </div>
                <div className="content" >
                    <a className="header" > <i className="user icon"></i>{this.props.user.moreInfo.name}</a>
                    <div className="meta">
                        <span className="date"><i className="marker icon"></i>{this.props.user.moreInfo.c_name}</span>
                    </div>
                </div>
                <div className="extra content">
                    <div style={{textAlign:"center",padding:"10px"}}>
                        <a  onClick={this.handleJobPosts.bind(this)}>
                            <i className="suitcase icon"></i>
                            Job Posts
                        </a>
                        <div className="floating ui red label">20</div>
                    </div>
                    <div style={{textAlign:"center",padding:"10px"}}>
                        <Link to="/employer/profile">
                            <i className="settings icon"></i>
                            Profile Details
                        </Link>
                    </div>
                    <div style={{textAlign:"center",padding:"10px"}}>
                        <a onClick={this.handleOpenPassword.bind(this)}>
                            <i className="protect icon"></i>
                            Change Password
                        </a>
                    </div>
                </div>
            </div>


        );

        }
        catch (e){
            return <div className="ui active loader huge"></div>;
        }

    }
    displayPreview(){
        try {
           return <img src={this.state.files[0].preview} width="200px" high="200px"/>
        }
        catch (e){
            return <img src={"http://localhost/aboutGccAsserts/DPs/"+this.props.user.moreInfo.dp} width="200px" high="200px"/>
        }
    }
    render(){
        // this.loadPage();
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Update"
                primary={true}
                onTouchTap={this.handleDP.bind(this)}
            />
        ];
         const passwordActions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClosePassword.bind(this)}
            />
        ];
        try{
        return(
            <div style={{backgroundColor:"#eeeeee",minHeight:"800px",paddingTop:"20px"}}>
                <Container fluid>
                    <Row>
                        <Col lg={3} xs={4} >
                            <div className="ui sticky" style={{width:"670.72px !important",height: "42px !important", left: "272.32px"}}>
                            {this.prepareProfileSection()}
                            </div>
                        </Col>
                        <Col lg={6} xs={8} >
                            <Paper zDepth={1}>
                                {this.props.children}
                            </Paper>

                        </Col>

                    </Row>
                </Container>
                <Dialog
                    title="Edit DP"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                    autoScrollBodyContent={true}
                >
                    Drop your DP or Click to select one
                    <section>
                        <div className="dropzone">
                            <Dropzone
                                accept="image/jpeg, image/png"
                                onDrop={this.onDrop.bind(this)}>
                                {this.displayPreview()}
                            </Dropzone>
                        </div>
                    </section>
                </Dialog>
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
                        passwordError={this.props.user.wrongPassword}
                        succeeded = {this.props.user.passwordChangeSucceeded}
                    />

                </Dialog>
            </div>

        )}catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading page</div></div>;
        }
    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user
    });
};
CompanyPage = withRouter(CompanyPage);
export default connect(mapStateToProps)(CompanyPage);