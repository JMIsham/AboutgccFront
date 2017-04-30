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
class JobseekerPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            postsClicked:true,
            profileClicked:false,
            loginClicked:false,
        };
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
    prepareProfileSection(){
        try{
            return(
                <div className="ui card centered" style={{maxWidth:"200px",minWidth:"100px",paddingTop:"5px"}}>
                    <div className="image">
                        <img src="../images/isham.jpg" style={{backgroundColor:"red"}}/>
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
                    </div>
                </div>


            );}catch (e){
            return <div className="ui active loader huge"></div>;
        }

    }
    render(){
        // this.loadPage();
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
            </div>

        )
    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user
    });
};
JobseekerPage = withRouter(JobseekerPage);
export default connect(mapStateToProps)(JobseekerPage);