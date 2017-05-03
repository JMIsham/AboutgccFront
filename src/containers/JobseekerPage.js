/**
 * Created by Isham on 3/29/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {Row,Col,Container}from 'react-grid-system';
import * as actionTypes from '../constants/actionTypes';
import Paper from 'material-ui/Paper';
import CompanyJobPosts from  './CompanyJobPosts';
import jwtDecode from 'jwt-decode';
import Dropzone from 'react-dropzone';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
class JobseekerPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            postsClicked:true,
            profileClicked:false,
            loginClicked:false,
            open:false,
            cvOpen:false,
            files: [],
            cvFiles: []
        };
    }
    onDrop(files, rejected) {
        this.setState({
            files
        });
    }
    onCVDrop(cvFiles, rejected) {
        this.setState({
            cvFiles
        });
    }
    handleDP(){
        this.props.dispatch({
            type:actionTypes.USER_DP_REQUESTED,
            payload:{
                file:this.state.files[0],
                token:this.props.user.token,
                user:"EMPLOYEE"
            }
        })
    }
    handleCV(){
        this.props.dispatch({
            type:actionTypes.EMPLOYEE_CV_UPDATE_REQUESTED,
            payload:{
                file:this.state.cvFiles[0],
                token:this.props.user.token
            }
        });
    }
    loadPage(){
        try{
            const roles=(jwtDecode(this.props.user.token)).roles;
            console.log(roles);
            if(roles.indexOf("ROLE_EMPLOYEE")== -1) this.props.router.replace("/logout");
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

    openCv(){
        this.setState({
           cvOpen:true
        });
    }
    closeCv(){
        this.setState({
            cvOpen:false,
            cvFiles: []
        });
    }
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_MORE_INFO_REQUESTED,
            payload:{
                userType:2,
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
    displayPreview(){
        try {
            return <img src={this.state.files[0].preview} width="200px" high="200px"/>
        }
        catch (e){
            return <img src={"http://localhost/aboutGccAsserts/DPs/"+this.props.user.moreInfo.dp} width="200px" high="200px"/>
        }
    }
    displayCV(){
        try {
            return <a href={this.state.cvFiles[0].preview} target="_blank"><h1><i className="file pdf outline icon"></i>New CV</h1></a>;
        }catch (e){
            return "select a cv to change";
        }
    }
    displayCurrentCV(){
        try {
            const cv = this.props.user.moreInfo.cv;
            return cv==undefined?
                "You have not uploaded a CV":
                <div style={{textAlign:"center",display:'flex', flexWrap: 'wrap'}} >
                    <h1>Current CV :</h1>
                    <a data-tooltip="Click to view your current CV" data-position="right center"
                        href={"http://localhost/aboutGccAsserts/CVs/"+this.props.user.moreInfo.cv}
                        target="_blank">
                        <h1><i className="file pdf outline icon"></i>View My CV</h1>
                    </a>
                </div>;
        }catch (e){
            return "You have not uploaded a CV";
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
                        <a className="header" > <i className="user icon"></i>{this.props.user.moreInfo.first_name+" "+this.props.user.moreInfo.last_name}</a>
                        <div className="meta">
                            <span className="date"><i className="marker icon"></i>{this.props.user.moreInfo.c_name}</span>
                        </div>
                    </div>
                    <div className="extra content">
                        <div style={{textAlign:"center",padding:"10px"}}>
                            <a>
                                <i className="file text icon"></i>
                                My Applications
                            </a>
                            <div className="floating ui red label">20</div>
                        </div>
                        <div style={{textAlign:"center",padding:"10px"}}>
                            <a>
                                <i className="settings icon"></i>
                                Profile Details
                            </a>
                        </div>
                        <div style={{textAlign:"center",padding:"10px"}}>
                            <a>
                                <i className="protect icon"></i>
                                Login Details
                            </a>
                        </div>
                        <div style={{textAlign:"center",padding:"10px"}}>
                            <a onClick={this.openCv.bind(this)}>
                                <i className="certificate icon"></i>
                                My CV
                            </a>
                        </div>
                    </div>
                </div>


            );}catch (e){
            return <div className="ui active loader huge"></div>;
        }

    }
    render(){
        // this.loadPage();
        try{
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
        const cvActions=[
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.closeCv.bind(this)}
            />,
            <FlatButton
                label="Update CV"
                primary={true}
                onTouchTap={this.handleCV.bind(this)}
            />
        ];
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
                    title={this.displayCurrentCV()}
                    actions={cvActions}
                    modal={false}
                    open={this.state.cvOpen}
                    onRequestClose={this.closeCv.bind(this)}
                    autoScrollBodyContent={true}
                >
                    Drop your CV or Click to select one
                    <section>
                        <div className="dropzone">
                            <Dropzone
                                accept=".pdf"
                                onDrop={this.onCVDrop.bind(this)}>
                                {this.displayCV()}
                            </Dropzone>
                        </div>
                    </section>
                </Dialog>
            </div>)}
            catch (e){
                return    <div className="ui active dimmer"><div className="ui text loader huge">loading page</div></div>;
        }


    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user
    });
};
JobseekerPage = withRouter(JobseekerPage);
export default connect(mapStateToProps)(JobseekerPage);