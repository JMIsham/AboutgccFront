/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import EmployerListItem from '../components/EmployerListItem';
import * as actionTypes from '../constants/actionTypes';

class AdminEmployers extends Component{

    makeList(){
        try{
            const employers = this.props.adminData.employers;
            const listItems = employers.map((employer) =>
                <EmployerListItem key={employer.id}
                                  data={employer} />
            );
            return listItems;
        }catch (e){
            return    <div className="ui active loader huge"></div>;
        }

    }
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.REQUEST_GET_ALL_EMPLOYER,
            payload:{
                token:this.props.user.token
            }
        });
    }
    render(){


        return(
            <div style={{marginTop:'15px',marginRight:'200px'}} >
                {this.makeList()}
                </div>
        );
    }

}

AdminEmployers=withRouter(AdminEmployers);
const mapStateToProps=(state)=>{
    return ({
        adminData:state.adminData,
        user:state.user
    })
};
export default connect(mapStateToProps)(AdminEmployers);