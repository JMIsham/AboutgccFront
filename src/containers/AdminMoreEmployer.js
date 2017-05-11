/**
 * Created by Isham on 4/8/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import {withRouter} from 'react-router';
import MenueItem from '../components/AdminPostListItem';

class AdminMoreEmployer extends Component{
    componentWillMount(){
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
    handleMore(postId){
            this.props.router.push("/admin/post/"+postId);

    }
    handleAllow(postId){
        this.props.dispatch({
            type:actionTypes.ADMIN_ALLOW_POST_REQUESTED,
            payload:{
                postId:postId,
                employerID:this.props.params.id,
                token:this.props.user.token
            }
        });
    }
    handleReject(postId){
        this.props.dispatch({
            type:actionTypes.ADMIN_BLOCK_POST_REQUESTED,
            payload:{
                postId:postId,
                employerID:this.props.params.id,
                token:this.props.user.token
            }
        });
    }
    handleRedirect(employerID){
        this.props.router.push("/admin/employer/"+employerID);

    }
    makeData(){
        try{
            const posts = this.props.allPosts;
            const listItems = posts.map((post) =>
                <MenueItem
                    key={post.id}
                    post={post}
                    handleMore={this.handleMore.bind(this)}
                    handleAllow={this.handleAllow.bind(this)}
                    handleReject = {this.handleReject.bind(this)}
                    handleRedirect={this.handleRedirect.bind(this)}
                />
            );
            const employer = this.props.data;
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
                    <div className="ui  column grid" style={{margin:"10px"}}>
                        <div  className="column ">
                            <div className="ui cards">
                                {listItems}
                            </div>
                        </div>
                    </div>
                </div>);

            }catch (e){
    return    <div className="ui active loader huge"></div>;
            }


    }
    render(){
        return (
            <div style={{padding:"20px",maxWidth:"800px"}}>
                {this.makeData()}
            </div>
            );
    }

}
AdminMoreEmployer=withRouter(AdminMoreEmployer);
const mapStateToProps=(state)=>{
  return({
      data:state.adminData.currentemployer,
      allPosts:state.adminData.currentemployerPosts,
      user:state.user
  });
};
export default connect(mapStateToProps)(AdminMoreEmployer);