/**
 * Created by Isham on 5/3/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actionTypes from '../constants/actionTypes';
import EmployeeApplicationsItem from '../components/EmployeeApplicationItem';
class JobSeekerApplications extends Component{
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.EMPLOYEE_ALL_APPLICATIONS_REQUSTED,
            payload:{
                token:this.props.user.token
            }
        });
    }
    createList(){
        const applications = this.props.applications;
        const listItems = applications.map((application) =>
            <EmployeeApplicationsItem
                key={application.application_id}
                application={application}
            />
        );
        return listItems;
        return "test";
    }

    render(){
        try{
        return (
            <div style={{padding:"15px"}}>
                <h1>All Applications</h1>
                {this.createList()}

            </div>)}catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading Applications</div></div>;
        }

    }
}
const mapStateToProps = (state) =>{
    return({
        user:state.user,
        applications:state.employeeReducer.AllApplications
    });
};
JobSeekerApplications = withRouter(JobSeekerApplications);
export default connect(mapStateToProps)(JobSeekerApplications);