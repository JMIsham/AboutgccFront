/**
 * Created by Isham on 3/29/2017.
 */

import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import {FlatButton} from 'material-ui';
import MoreEmployerDetail from '../components/MoreEmployerDetail';

class AdminPage extends Component{
    getList(){
        const listItems = numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} />
        );
        return listItems;
    }



    componentWillReceiveProps(nextProps){
        // this.props.dispatch({
        //     type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
        //     payload:{
        //         token:this.props.user.token
        //     }
        // });
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>welcome admin {this.props.user.userName}</h1>

            </div>
            )
    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user,
        adminData:state.adminData
    });
};
AdminPage = withRouter(AdminPage);
export default connect(mapStateToProps)(AdminPage);
