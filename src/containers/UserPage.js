/**
 * Created by Isham on 3/29/2017.
 */
import React , {Component} from "react";
import {connect} from 'react-redux';
import AdminPage from './AdminMoreEmployer';
import CompanyPage from './CompanyPage';
import JobseekerPage from './JobseekerPage';
import {withRouter} from 'react-router';
import jwtDecode from 'jwt-decode';
import * as actionTypes from '../constants/actionTypes';
class UserPage extends Component{

    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.FETCH_TAGS_REQUSTED
        });
        if(!this.props.user.loggedIn){
            this.props.router.replace("/login");
        }
        const roles=(jwtDecode(this.props.user.token)).roles;
        console.log(roles);
        if(roles.indexOf("ROLE_SUPER_ADMIN")!= -1) this.props.router.replace("/admin");
        if(roles.indexOf("ROLE_EMPLOYER")!= -1) this.props.router.replace("/employer");
    }
    componentWillReceiveProps(nextProps){
        if(!this.props.user.loggedIn){
            this.props.router.replace("/login");
        }

    }
    loadPage(){
        const roles=(jwtDecode(this.props.user.token)).roles;
        console.log(roles);
        if(roles.indexOf("ROLE_EMPLOYER") != -1) return undefined;
        if(roles.indexOf("ROLE_SUPER_ADMIN")!= -1) return undefined;
        if(roles.indexOf("ROLE_EMPLOYEE") != -1) return <JobseekerPage/>;
        else{
            this.props.router.replace("/logout");
        }
    }

    render(){
        return (
            <div  >

                {this.loadPage()}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return ({
        user:state.user
    });

};

UserPage= withRouter(UserPage);
export default connect(mapStateToProps)(UserPage);

