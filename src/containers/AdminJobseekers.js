/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import ListItem from '../components/EmployeeListItem';
import SearchInput, {createFilter} from 'react-search-input/lib/index';

class AdminJobseekers extends Component{
    constructor(props){
        super(props);
        this.state={
            searchTerm:''
        }
    }
    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
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
            const KEYS_TO_FILTERS=['contact_num','first_name','last_name','email'];
            const filteredEmployees = employees.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
            const listItems = filteredEmployees.map((employee) =>
                <ListItem
                    key={employee.id}
                    data={employee}
                    handleBlockUnblock={this.handleBlockUnblock.bind(this)}
                    handleMore={this.redirectToEmployee.bind(this)}
                />
            );
            return (
                <div className="ui link cards">
                    {listItems}
                    {filteredEmployees.length===0? <h1>No Results Found :(</h1>:undefined}

                </div>
            );
        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading Job Seekers</div></div>;
        }


    }

    render(){
        return(
            <div >
                <div style={{marginTop:'15px',}}  >
                    <div className="ui  segment" style={{maxWidth:"600px",margin:"20px"}}>
                        <SearchInput className='search-input ui input focus fluid' onChange={this.searchUpdated.bind(this)} />
                    </div>
                        {this.makePage()}

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