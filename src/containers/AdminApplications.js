/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import ListItem from '../components/ApplicationListItem';
import SearchInput, {createFilter} from 'react-search-input/lib/index';

class AdminApplications extends Component{
    constructor(props){
        super(props);
        this.state={
            searchTerm:''
        }
    }
    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.ADMIN_GET_ALL_APPLICATIONS_REQUESTED,
            payload:{
                token:this.props.user.token
            }
        });
    }
    makePage(){
        try {
            const applications = this.props.adminData.allApplications;
            const KEYS_TO_FILTERS=['first_name','last_name','subject'];
            const filteredApplications = applications.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
            const listItems = filteredApplications.map((application) =>
                <ListItem
                    key={application.id}
                    data={application}
                />
            );
            return (
                <div>
                    <h2 className="ui horizontal divider header">
                        <i className="file text icon"></i>
                        {filteredApplications.length+"Applications"}
                    </h2>
                    <div className="ui  segment" style={{maxWidth:"600px",margin:"20px"}}>
                        <SearchInput className='search-input ui input focus fluid' onChange={this.searchUpdated.bind(this)} />
                    </div>
                    <div className="ui cards">
                        {listItems}
                        {filteredApplications.length===0? <h1>No Results Found :(</h1>:undefined}
                    </div>
                </div>);
        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading Job Applications</div></div>;
        }
    }
    render(){
        return(
            <div style={{margin:"20px"}} >

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