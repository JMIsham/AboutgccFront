/**
 * Created by Isham on 4/20/2017.
 */
import React,{Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
class EmployerPostsItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }

    callHandleMore(){
        this.props.handleMore(this.props.post);
    }
    callHandleDelete(){
        this.handleClose();
        this.props.handleDelete(this.props.post.id);
    }
    callToggleVisibility(){
        const post = this.props.post;
        this.props.handleVisibility(post.id,post.status);
    }
    handleOpen () {
        this.setState({open: true});
    }

    handleClose (){
        this.setState({open: false});
    }

    loadhidebutton(status){
        switch (status){
            case "1":
                return <div className="ui basic orange button" onClick={this.callToggleVisibility.bind(this)}>Hide Post</div>;
            case "2":
                return <div className="ui basic green button" onClick={this.callToggleVisibility.bind(this)} >Activate Post</div>;

        }
    }
    loadlable(status){
        switch (status){
            case "1":
                return  <span className="ui right ribbon green  label">Activated</span>;
            case "2":
                return  <span className="ui right ribbon orange  label">Hidden</span>;
            case "3":
                return  <span className="ui right ribbon label">Pending</span>;
            case "4":
                return  <span className="ui right ribbon label">Edited</span>;
            case "5":
                return  <span className="ui right ribbon red label">Rejected</span>;

        }
    }

    render(){
        const actions = [
            <FlatButton
                label="Do Not Delete"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Delete Anyway"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.callHandleDelete.bind(this)}
            />,
        ];
        const post = this.props.post;
        return(
        <div  className=" ui fluid card">
            <div className="content">
                {this.loadlable(post.status)}
                <div className="header" style={{marginTop:"-28px"}}>
                    {post.subject}
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
                    {this.loadhidebutton(post.status)}
                    <div className="ui basic red button" onClick={this.handleOpen.bind(this)}>Delete</div>
                    <div className="ui basic blue button" onClick={this.callHandleMore.bind(this)}>More >></div>

                </div>

            </div>
            <Dialog
                title="Conform Delete"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
               This action will permanently delete this post!
            </Dialog>
        </div>);



    }
}
export default EmployerPostsItem;