import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {Row,Col,Container}from 'react-grid-system';
import * as actionTypes from '../constants/actionTypes';
import Paper from 'material-ui/Paper';
import CompanyJobPosts from  './CompanyJobPosts';
import jwtDecode from 'jwt-decode';
class CompanyPage extends Component{

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
            if(roles.indexOf("ROLE_EMPLOYER")== -1) this.props.router.replace("/logout");
        }catch (e){
            this.props.router.replace("/logout");
        }


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
                <div className="image">
                    <img src="https://scontent.fcmb3-1.fna.fbcdn.net/v/t1.0-1/p240x240/14516414_1796826027122985_1912927303627841408_n.jpg?oh=5b6ce630db456c674f2ae628166f4ef6&amp;oe=597532B5" style={{backgroundColor:"red"}}/>
                </div>
                <div className="content" >
                    <a className="header" > <i className="user icon"></i>{this.props.user.moreInfo.name}</a>
                    <div className="meta">
                        <span className="date"><i className="marker icon"></i>{this.props.user.moreInfo.c_name}</span>
                    </div>
                </div>
                <div className="extra content">
                    <div style={{textAlign:"center",padding:"10px"}}>
                        <a  selected={true}>
                            <i className="suitcase icon"></i>
                            Job Posts
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
CompanyPage = withRouter(CompanyPage);
export default connect(mapStateToProps)(CompanyPage);