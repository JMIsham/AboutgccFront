/**
 * Created by Isham on 4/15/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actionTypes from '../constants/actionTypes';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MenueItem from '../components/EmployerPostsItem';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import PostForm from '../components/NewPostForm';


class CompanyJobPosts extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }

    handleSubmit(formData){
        this.setState({open: false});
        this.props.dispatch({
            type:actionTypes.EMPLOYER_NEW_POST_REQUESTED,
            payload:{
                formData:formData,
                token:this.props.user.token
            }
        });
    }
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_ALL_POSTS_REQUESTED,
            payload:{
                token:this.props.user.token
            }
        });
    }

    handleOpen () {
        this.setState({open: true});
    }

    handleClose (){
        this.setState({open: false});
    }
    handleMore(post){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_MORE_POST_REQUESTED,
            payload:post
    });
        this.props.router.push("/employer/post-more");
    }
    handleDelete(id){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_POST_DELETE_REQUESTED,
            payload:{
                id:id,
                token:this.props.user.token
            }
        });
    }
    toggleVisibility(id,status){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_POST_TOGGLE_VISIBILITY_REQUESTED,
            payload:{
                id:id,
                status:status,
                token:this.props.user.token
            }
        });
    }
    loadPosts(){
        try{
            const posts = this.props.allPosts;
            const listItems = posts.map((post) =>
                    <MenueItem
                        key={post.id}
                        post={post}
                        handleMore={this.handleMore.bind(this)}
                        handleDelete={this.handleDelete.bind(this)}
                        handleVisibility = {this.toggleVisibility.bind(this)}
                    />
            );
            return(
            <div>
                <h2 className="ui horizontal divider header">
                    <i className="suitcase icon"></i>
                    All Job Posts

                </h2>
                <div data-tooltip="Post a New Job Offer" data-position="right center" style={{maxWidth:"40px"}}>
                    <FloatingActionButton mini={true} backgroundColor={"#37474f"} onTouchTap={this.handleOpen.bind(this)}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>

                <div className="floating ui black label">{(this.props.allPosts).length}</div>
                {listItems}
            </div>);
        }catch (e){
            return    <div className="ui active dimmer"><div className="ui text loader huge">loading posts</div></div>;
        }
    }

    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />
        ];

        return (

            <div>
                <div className="ui  column grid" style={{margin:"10px"}}>
                    <div  className="column">
                    {this.loadPosts()}
                    </div>
                </div>
                <Dialog
                    title="New Post"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                    autoScrollBodyContent={true}
                >
                    All fields are required
                    <PostForm onSubmit={this.handleSubmit.bind(this)}/>
                </Dialog>
            </div>


        );
    }
}
const mapStateToProps=(state)=>{
    return({
        user:state.user,
        allPosts:state.employerReducer.AllPosts
    });
};
CompanyJobPosts=withRouter(CompanyJobPosts);
export default connect(mapStateToProps)(CompanyJobPosts);