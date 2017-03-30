/**
 * Created by Isham on 3/29/2017.
 */

import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class AdminPage extends Component{

    render(){
        return(
            <h1>welcome admin {this.props.user.userName}</h1>
        )
    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user
    });
};
AdminPage = withRouter(AdminPage);
export default connect(mapStateToProps)(AdminPage);
