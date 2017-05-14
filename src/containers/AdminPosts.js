/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../constants/actionTypes';
import MenueItem from '../components/AdminPostListItem';
import SearchInput, {createFilter} from 'react-search-input/lib/index';
import {Row,Col,Container}from 'react-grid-system';


class AdminPosts extends Component{
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
            type:actionTypes.ADMIN_ALL_POSTS_REQUESTED,
            payload:{
                token:this.props.user.token
            }
        });
    }
    handleMore(postId){
        this.props.router.push("/admin/post/"+postId);
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
        try{
            const posts = this.props.adminData.allPosts;
            const KEYS_TO_FILTERS=['about_job','com_name','country_name','expire_date','initiated_date','subject','tags.name'];
            const filteredPosts = posts.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
            const listItems = filteredPosts.map((post) =>
                <MenueItem
                    key={post.id}
                    post={post}
                    handleMore={this.handleMore.bind(this)}
                    handleAllow={this.handleAllow.bind(this)}
                    handleReject = {this.handleReject.bind(this)}
                    handleRedirect={this.handleRedirect.bind(this)}
                />
            );
            return(

                    <div  style={{marginTop:"40px"}}>
                        <h2 className="ui horizontal divider header">
                            <i className="suitcase icon"></i>
                            {filteredPosts.length+" Job Posts"}
                        </h2>
                        <div className="ui  segment" >
                            <SearchInput className='search-input ui input focus fluid' onChange={this.searchUpdated.bind(this)} />
                        </div>
                        <div className="ui cards">
                            {listItems}
                            {filteredPosts.length===0? <h1>No Results Found :(</h1>:undefined}
                        </div>
                    </div>
            );

        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading Posts</div></div>;
        }
    }
    render(){
        return(
            <div >
                <Container fluid>
                    <Row>
                        <Col lg={2} xs={2} >
                        </Col>
                        <Col lg={8} xs={8} >
                            {this.makepage()}
                        </Col>
                        <Col lg={2} xs={2} >
                        </Col>
                    </Row>
                </Container>
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