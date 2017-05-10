/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import MenueItem from '../components/AdminPostListItem';
class AdminPosts extends Component{
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.ADMIN_ALL_POSTS_REQUESTED,
            payload:{
                token:this.props.user.token
            }
        });
    }
    handleMore(postId){

    }
    handleAllow(postId){
        this.props.dispatch({
            type:actionTypes.ADMIN_ALLOW_POST_REQUESTED,
            payload:{
                postId:postId,
                token:this.props.user.token
            }
        });
    }
    handleReject(postId){
        this.props.dispatch({
            type:actionTypes.ADMIN_BLOCK_POST_REQUESTED,
            payload:{
                postId:postId,
                token:this.props.user.token
            }
        });
    }
    handleRedirect(employerID){
        this.props.router.push("/admin/employer/"+employerID);

    }
    makepage(){
        // try{
            const posts = this.props.adminData.allPosts;
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
            return(<div className="ui  column grid" style={{margin:"10px"}}>
                <div  className="column ">
                    <div className="ui cards">
                        {listItems}
                    </div>
                </div>
            </div>);

        // }catch (e){
        //
        // }
    }
    render(){
        return(
            <div style={{maxWidth:"800px"}}>
                {this.makepage()}
            </div>
        );
    }

}

AdminPosts=withRouter(AdminPosts);
const mapStateToProps=(state)=>{
    return ({
        adminData:state.adminData,
        user:state.user
    })
};
export default connect(mapStateToProps)(AdminPosts);