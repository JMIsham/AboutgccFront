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
    setCountry(){
        const name=this.props.post.country_name;
        var flagClass ;
        var tooltip;
        switch (name){
            case "Bahrain":
                return(
                    <div className="ui label" data-tooltip="Bahrain" data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="bh flag"></i>
                    </div>
                );
            case "Iran":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="ir flag"></i>
                    </div>
                );
            case "Iraq":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="iq flag"></i>
                    </div>
                );
            case "Kuwait":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="kw flag"></i>
                    </div>
                );
            case "Oman":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="ae flag"></i>
                    </div>
                );
            case "Qatar":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="qa flag"></i>
                    </div>
                );
            case "Saudi Arabia":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="sa flag"></i>
                    </div>
                );
            case "United Arab Emirates":
                return(
                    <div className="ui label" data-tooltip={name} data-position="right center" style={{paddingTop:"1px",paddingRight:"1px",paddingLeft:"6px",marginLeft:"5px"}}>
                        <i className="ae flag"></i>
                    </div>
                );

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
                        {this.setCountry()}
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