/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import ListItem from '../components/EmployeeListItem';
class AdminJobseekers extends Component{
    componentWillMount(){
       this.props.dispatch({
           type:actionTypes.ADMIN_ALL_EMPLOYEES_REQUESTED,
           payload:{
               token:this.props.user.token
           }
       });
    }
    handleBlockUnblock(employeeID,status){
        this.props.dispatch({
            type:actionTypes.ADMIN_BLOCK_UNBLOCK_EMPLOYEE_REQUESTED,
            payload:{
                token:this.props.user.token,
                id:employeeID,
                status:status
            }
        });
    }
    redirectToEmployee(employeeId){
        this.props.router.push("/admin/jobseeker/"+employeeId);
    }
    makePage(){
        try{
            const employees = this.props.adminData.allEmployees;
            const listItems = employees.map((employee) =>
                <ListItem
                    key={employee.id}
                    data={employee}
                    handleBlockUnblock={this.handleBlockUnblock.bind(this)}
                    handleMore={this.redirectToEmployee.bind(this)}
                />
            );
            return listItems;
        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading Job Seekers</div></div>;
        }


    }

    render(){
        return(
            <div >
                jobseekers
                <div style={{marginTop:'15px',}}  >
                    <div className="ui link cards">
                        {this.makePage()}
                    </div>
                </div>
            </div>
        );
    }

}

AdminJobseekers=withRouter(AdminJobseekers);
const mapStateToProps=(state)=>{
    return ({
        adminData:state.adminData,
        user:state.user
    })
};
export default connect(mapStateToProps)(AdminJobseekers);