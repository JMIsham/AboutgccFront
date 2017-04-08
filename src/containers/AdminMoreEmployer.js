/**
 * Created by Isham on 4/8/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import {withRouter} from 'react-router';

class AdminMoreEmployer extends Component{
    componentWillMount(){
        console.log("props at component will mount",this.props);
        this.props.dispatch(
            {
                type:actionTypes.GET_SPECIFIC_EMPLOUER_REQUESTED,
                payload:{
                    id:this.props.params.id,
                    token:this.props.user.token
                }
            }
        );
    }
    makeData(){
        try{
            console.log(this.props.data[0]);
            const employer = this.props.data[0];
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
                            <div className="header">Company Name</div>
                            {employer.name}
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="header">Country</div>
                            {employer.c_name}
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="header">Contact Number</div>
                            {employer.contact_num}
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="header">Username</div>
                            {employer.username}
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="header">Email</div>
                            {employer.email}
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="header">Address</div>
                            {employer.door_address}
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="header">Registration Number</div>
                            {employer.reg_number}
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="header">About</div>
                            {employer.about_us}
                        </div>
                    </div>
                </div>
            </div>
                    <h4 className="ui horizontal divider header">
                        <i className="suitcase icon"></i>
                        Job Offers by this company

                    </h4>
                </div>);

            }catch (e){
    return    <div className="ui active loader huge"></div>;
            }


    }
    render(){
        console.log(this.props);

        return this.makeData();
    }

}
AdminMoreEmployer=withRouter(AdminMoreEmployer);
const mapStateToProps=(state)=>{
  return({
      data:state.adminData.currentemployer,
      user:state.user
  });
};
export default connect(mapStateToProps)(AdminMoreEmployer);