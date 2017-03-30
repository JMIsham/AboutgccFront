/**
 * Created by Isham on 3/29/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class JobseekerPage extends Component{


    render(){
        return(
            <h1>welcome jobseeker {this.props.user.userName}</h1>
        )
    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user
    });
};
JobseekerPage = withRouter(JobseekerPage);
export default connect(mapStateToProps)(JobseekerPage);