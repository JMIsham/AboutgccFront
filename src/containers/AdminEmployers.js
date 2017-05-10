/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import EmployerListItem from '../components/EmployerListItem';
import * as actionTypes from '../constants/actionTypes';

class AdminEmployers extends Component{
    //this method gets data from backend
    makeList(){
        try{
            const employers = this.props.adminData.employers;
            const listItems = employers.map((employer) =>
                <EmployerListItem
                    key={employer.id}
                    data={employer}
                    handleBlock={this.handleBlock.bind(this)}
                    handleMore={this.redirectToEmployer.bind(this)}
                />
            );
            return listItems;
        }catch (e){
            return    <div className="ui active loader huge"></div>;
        }
    }
    //this method blocks/unblocks a given employer
    handleBlock(id,status){
        this.props.dispatch({
            type:status==1? actionTypes.BLOCK_USER_REQUESTED:actionTypes.UNBLOCK_USER_REQUESTED,
            payload:{
                token:this.props.user.token,
                id:id
            }
        });
    }

    redirectToEmployer(id){
        console.log("/admin/employer/"+id);
        this.props.router.push("/admin/employer/"+id);
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
            <div style={{marginTop:'15px',}}  >
                <div className="ui link cards">
                    {this.makeList()}
                </div>

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