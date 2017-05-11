/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import ListItem from '../components/ApplicationListItem';
class AdminApplications extends Component{

    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.ADMIN_GET_ALL_APPLICATIONS_REQUESTED,
            payload:{
                token:this.props.user.token
            }
        });
    }
    makePage(){
        const applications=this.props.adminData.allApplications;
        const listItems = applications.map((application) =>
            <ListItem
                key={application.id}
                data={application}
            />
        );
        return(<div className="ui cards">
            {listItems}
        </div>)
    }
    render(){
        return(
            <div style={{margin:"20px"}} >
                applications
                {this.makePage()}
            </div>
        );
    }

}

AdminApplications=withRouter(AdminApplications);
const mapStateToProps=(state)=>{
    return ({
        adminData:state.adminData,
        user:state.user
    })
};
export default connect(mapStateToProps)(AdminApplications);