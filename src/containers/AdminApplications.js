/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
class AdminApplications extends Component{
    render(){
        return(
            <div >
                applications
            </div>
        );
    }

}

AdminApplications=withRouter(AdminApplications);
const mapStateToProps=(state)=>{
    return ({
        adminData:state.adminData
    })
};
export default connect(mapStateToProps)(AdminApplications);