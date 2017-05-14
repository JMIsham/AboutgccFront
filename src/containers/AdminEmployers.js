/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import EmployerListItem from '../components/EmployerListItem';
import * as actionTypes from '../constants/actionTypes';
import SearchInput, {createFilter} from 'react-search-input/lib/index';


class AdminEmployers extends Component{
    //this method gets data from backend
    constructor(props){
        super(props);
        this.state={
            searchTerm:''
        }
    }
    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
    makeList(){
        try{
            const employers = this.props.adminData.employers;
            const KEYS_TO_FILTERS=['contact_num','name','email'];
            const filteredEmployers = employers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
            const listItems = filteredEmployers.map((employer) =>
                <EmployerListItem
                    key={employer.id}
                    data={employer}
                    handleBlock={this.handleBlock.bind(this)}
                    handleMore={this.redirectToEmployer.bind(this)}
                />
            );
            return (
                <div>
                    <h2 className="ui horizontal divider header">
                        <i className="user icon"></i>
                        {filteredEmployers.length+" Employers"}
                    </h2>
                    <div className="ui  segment" style={{maxWidth:"600px",margin:"20px"}}>
                        <SearchInput className='search-input ui input focus fluid' onChange={this.searchUpdated.bind(this)} />
                    </div>
                    <div className="ui link cards" style={{margin:"0 auto"}}>
                        {listItems}
                        {filteredEmployers.length===0? <h1>No Results Found :(</h1>:undefined}
                    </div>
                </div>


        );
        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading Employers</div></div>;
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