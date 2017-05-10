/**
 * Created by Isham on 5/3/2017.
 */
import React,{Component} from 'react';
import {withRouter} from "react-router";
import {getCountry} from '../containers/Country'
class postItem extends Component{
    handleMore(){
        this.props.router.push("view-post/"+this.props.post.id);
    }
    setCountry(){
        const name=this.props.post.c_name;
        switch (name){
            case "Bahrain":
                return(
                    <div className="ui label" data-tooltip="Bahrain" data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="bh flag"></i>
                    </div>
                );
            case "Iran":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="ir flag"></i>
                    </div>
                );
            case "Iraq":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="iq flag"></i>
                    </div>
                );
            case "Kuwait":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="kw flag"></i>
                    </div>
                );
            case "Oman":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="ae flag"></i>
                    </div>
                );
            case "Qatar":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="qa flag"></i>
                    </div>
                );
            case "Saudi Arabia":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="sa flag"></i>
                    </div>
                );
            case "United Arab Emirates":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px"}}>
                        <i className="ae flag"></i>
                    </div>
                );

        }
    }
    render(){
        const post = this.props.post;
        return(
        <div className="card" onClick={this.handleMore.bind(this)} style={{backgroundColor:"#90a4ae"}}>
            <div className="content">
                <div className="header">{post.subject}{getCountry(this.props.post.c_name)} </div>

                <div className="description">
                    <h4>Apply before : {post.expire_date}</h4>
                    {post.tags.map((tag)=><span style={{margin:"5px"}} key={post.id+""+tag.tag_id} className="ui label">{tag.name}</span>)}
                </div>
            </div>

        </div>);
    };
}
postItem = withRouter(postItem);
export default postItem;