/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

class EmployerListItem extends Component{
    //this class renders out individual abstract details of the employers
    //hast to send two method as props on for blocking employer other one for go to the next page
    handle(){
        this.props.handleBlock(this.props.data.id,this.props.data.enabled);
    }

    redirect(e){
        this.props.handleMore(this.props.data.id);
    }
    render(){
        return(
            <div className="ui items segment" style={{margin:'20px', maxWidth:'600px'}}>
                <div className="item">
                    <div className="content">
                        <div className="ui icon button ui right floated " data-tooltip={this.props.data.enabled==1? "block this user":"activate this user"} style={{padding:'5px',marginTop:'30px'}}><i  onClick={this.handle.bind(this)} className={this.props.data.enabled==1? "minus circle icon large":"check circle icon large"}> </i></div>

                        <a onClick={this.redirect.bind(this)} className="header">{this.props.data.name}</a>
                        <div className="meta">
                            <div>{this.props.data.email}</div>
                            <div>{this.props.data.contact_num}</div>
                            <div>{this.props.data.enabled==1? "Enabled":"Disabled"}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmployerListItem;
