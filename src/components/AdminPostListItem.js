/**
 * Created by Isham on 5/10/2017.
 */
import React,{Component} from 'react';
class AdminPostListItem extends Component{

    callHandleMore(){
        console.log("will be redirected");
    }

    callAllow(){
        const post = this.props.post;
        this.props.handleAllow(post.id);
    }
    callReject(){
        const post = this.props.post;
        this.props.handleReject(post.id);
    }
    redirect(){
        this.props.handleRedirect(this.props.post.user_id);
    }
    loadAllowButton(status){
            if(status==="3" || status==="4"||status==="5") return <div className="ui basic green button" onClick={this.callAllow.bind(this)} >Allow Post</div>;

    }
    loadRejectButton(status){
        if(status==="3" || status==="4"||status==="1") return <div className="ui basic red button" onClick={this.callReject.bind(this)}>Reject Post</div>;

    }
    loadlable(status){
        switch (status){
            case "1":
                return  <span className="ui right ribbon green  label">Activated</span>;
            case "2":
                return  <span className="ui right ribbon orange  label">Hidden</span>;
            case "3":
                return  <span className="ui right ribbon blue label">New</span>;
            case "4":
                return  <span className="ui right ribbon blue label">Edited</span>;
            case "5":
                return  <span className="ui right ribbon red label">Rejected</span>;

        }
    }

    render(){
        const post = this.props.post;
        return(
            <div  className=" ui fluid card">
                <div className="content">
                    {this.loadlable(post.status)}
                    <div className="header" style={{marginTop:"-28px"}}>
                        {post.subject}
                    </div>
                    <div>
                        <a onClick={this.redirect.bind(this)} className="header">{this.props.post.com_name}</a>
                    </div>
                    <div className="meta">
                        <div>
                            <i className="calendar outline icon">: </i>
                            {post.initiated_date}
                        </div>
                        <div>
                            <i className="delete calendar icon">: </i>
                            {post.expire_date}
                        </div>

                    </div>
                    <div className="description">
                        <i className="tags icon"></i>
                        {post.tags.map((tag)=><span style={{margin:"5px"}} key={post.id+""+tag.tag_id} className="ui label">{tag.name}</span>)}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui three buttons">
                        {this.loadAllowButton(post.status)}
                        {this.loadRejectButton(post.status)}
                        <div className="ui basic blue button" onClick={this.callHandleMore.bind(this)} >More >></div>;
                    </div>

                </div>
            </div>);



    }
}
export default AdminPostListItem;