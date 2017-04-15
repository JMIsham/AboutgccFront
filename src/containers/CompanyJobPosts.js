/**
 * Created by Isham on 4/15/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actionTypes from '../constants/actionTypes';

class CompanyJobPosts extends Component{

    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.EMPLOYER_ALL_POSTS_REQUESTED,
            payload:{
                token:this.props.user.token
            }
        });
    }
    loadPosts(){
        try{
            const posts = this.props.allPosts;
            const listItems = posts.map((post) =>
                <div key={post.id} className="column">

                    <div className=" ui fluid card">
                        <div className="content">

                            <div className="header">
                                {post.subject}
                            </div>
                            <div className="meta">
                                {post.initiated_date
                                }
                            </div>
                            <div className="description">
                                Elliot requested permission to view your contact details
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui three buttons">
                                <div className="ui basic orange button disabled">Hide</div>
                                <div className="ui basic blue button">Edit</div>
                                <div className="ui basic red button">Delete</div>
                            </div>

                        </div>

                    </div></div>

            );
            return listItems;
        }catch (e){
            return    <div className="ui active loader huge"></div>;
        }
    }

    render(){
        return (
            <div className="ui  column grid" style={{margin:"10px"}}>
                {this.loadPosts()}
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