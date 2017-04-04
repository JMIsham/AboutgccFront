/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

class EmployerListItem extends Component{
    handle(){
        console.log(this.props.data.id);
    }

    render(){
        return(
            <div className="ui items segment" style={{margin:'20px', maxWidth:'600px'}}>
                <div className="item">
                    <div className="content">
                        <a className="header">{this.props.data.name}</a>
                        <div className="meta">
                            <div>{this.props.data.email}</div>
                            <div>{this.props.data.contact_num}</div>
                            <div>{this.props.data.enabled==1? "Enabled":"Disabled"}</div>
                        </div>
                        <div className="ui right floated" style={{marginTop:'-30px'}}><FlatButton label={this.props.data.enabled==1? "Disable":"Enable"} onTouchTap={this.handle.bind(this)}/> </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmployerListItem;
