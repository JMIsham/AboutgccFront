/**
 * Created by Isham on 3/29/2017.
 */
import React , {Component} from "react";
import {connect} from 'react-redux';
import AdminPage from './AdminPage';
import CompanyPage from './CompanyPage';
import JobseekerPage from './JobseekerPage';
import {withRouter} from 'react-router';
class UserPage extends Component{

    componentWillMount(){
        if(!this.props.user.loggedIn){
            this.props.router.replace("/login");
        }
    }
    componentWillReceiveProps(nextProps){
        if(!this.props.user.loggedIn){
            this.props.router.replace("/login");
        }

    }

    render(){
        return (<h1>test</h1>);
    }
}

const mapStateToProps=(state)=>{
    return ({
        user:state.user
    });

};

UserPage= withRouter(UserPage);
export default connect(mapStateToProps)(UserPage);

