/**
 * Created by Isham on 5/11/2017.
 */
import React ,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import ListItem from '../components/ApplicationListItem';
import {getCountry} from './Country'
class AdminMoreJobseeker extends Component{
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.ADMIN_SPECIFIC_EMPLOYEE_REQUESTED,
            payload:{
                token:this.props.user.token,
                employeeID:this.props.params.id
            }
        });
    }

    getCVLink(cv){
        if(cv==="") return <h3 style={{color:"red"}}>No CV is been uploaded</h3>;
        else{
            return( <h3><a href={"http://localhost/aboutGccAsserts/CVs/"+cv} target="_blank"  >
                <i className="sticky note icon"></i>
                view CV</a></h3>);
        }

    }
    makePage(){
        try{
            const applications=this.props.adminData.currentEmployeeApplications;
            const listItems = applications.map((application) =>
                <ListItem
                    key={application.id}
                    data={application}
                />
            );
            const employee = this.props.adminData.currentEmployee;
            return(
                <div>
                    <h4 className="ui horizontal divider header">
                        <i className="tag icon"></i>
                        Description
                    </h4>
                    <div className="ui  segment" >
                        <div className="ui  relaxed divided list">
                            <div className="item">
                                <div className="content">
                                    <div className="header">First Name</div>
                                    {employee.first_name}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">Last Name</div>
                                    {employee.last_name}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">Country</div>
                                    {getCountry(employee.country_name)}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">Contact Number</div>
                                    {employee.contact_num}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">Username</div>
                                    {employee.username}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">Email</div>
                                    {employee.email}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">Address</div>
                                    {employee.door_address}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">NIC Number</div>
                                    {employee.nic_number}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">About</div>
                                    {employee.about_me}
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">CV</div>
                                    {this.getCVLink(employee.cv)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="ui horizontal divider header">
                        <i className="suitcase icon"></i>
                        Applications from this user
                    </h4>
                    <div className="ui  column grid" style={{margin:"10px"}}>
                        <div  className="column ">
                            <div className="ui cards">
                                {listItems}
                            </div>
                        </div>
                    </div>
                </div>);

        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading Details</div></div>;
        }
    }
    render(){
        return (<div style={{margin:"20px"}}>{this.makePage()}</div>)
    }
}
const mapStateToProps =(state)=>{
    return({
        user:state.user,
        adminData:state.adminData
    });
} ;
AdminMoreJobseeker=withRouter(AdminMoreJobseeker);
export default connect(mapStateToProps)(AdminMoreJobseeker);