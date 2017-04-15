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
                            {this.prepareProfileSection()}

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