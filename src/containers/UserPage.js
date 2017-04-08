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
class UserPage extends Component{

    componentWillMount(){
        if(!this.props.user.loggedIn){
            this.props.router.replace("/login");
        }
        const roles=(jwtDecode(this.props.user.token)).roles;
        console.log(roles);
        if(roles.indexOf("ROLE_SUPER_ADMIN")!= -1) this.props.router.replace("/admin");;
    }
    componentWillReceiveProps(nextProps){
        if(!this.props.user.loggedIn){
            this.props.router.replace("/login");
        }

    }
    loadPage(){
        const roles=(jwtDecode(this.props.user.token)).roles;
        console.log(roles);
        if(roles.indexOf("ROLE_EMPLOYER") != -1) return <CompanyPage/>;
        if(roles.indexOf("ROLE_SUPER_ADMIN")!= -1) return undefined;
        if(roles.indexOf("ROLE_EMPLOYEE") != -1) return <JobseekerPage/>;
        else{
            this.props.router.replace("/logout");
        }
    }

    render(){
        return (
            <div >
                <h1>this is the profile page</h1>
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

