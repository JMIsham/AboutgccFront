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
    loadlable(status){
        switch (status){
            case "1":
                return  <span  className="ui left ribbon green  label">Activated</span>;
            case "0":
                return  <span className="ui left ribbon red  label">Blocked</span>;
        }
    }
    render(){
        return(

                <div className="blue card" style={{marginLeft:"15px"}} >
                    <div className="content" onClick={this.redirect.bind(this)}>
                        <img className="right floated mini ui image" src={"http://localhost/aboutGccAsserts/DPs/"+this.props.data.dp}/>
                            <div className="header">
                                <a onClick={this.redirect.bind(this)} className="header">{this.props.data.name}</a>
                            </div>
                            <div className="meta">
                                {this.loadlable(this.props.data.enabled)}
                            </div>
                            <div className="description" >
                                <div style={{textColor:"#ffffff"}}>{this.props.data.email}</div>
                                <div style={{textColor:"#ffffff"}}>{this.props.data.contact_num}</div>
                            </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div onClick={this.handle.bind(this)} className={this.props.data.enabled=="1"?"ui basic red button":"ui basic green button"}>{this.props.data.enabled=="1"?"Block This Employer":"Activate This Employer"}</div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default EmployerListItem;
