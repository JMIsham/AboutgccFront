/**
 * Created by Isham on 4/4/2017.
 */
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'
import jwtDecode from 'jwt-decode'
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';

class AdminPanal extends Component{
    loadPage(){
        try{
            const roles=(jwtDecode(this.props.state.user.token)).roles;
            console.log(roles);
            if(roles.indexOf("ROLE_SUPER_ADMIN")== -1) this.props.router.replace("/logout");
        }catch (e){
            this.props.router.replace("/logout");
        }


    }

    render(){
        this.loadPage();
        return(
            <div>
                <Drawer open={true} openSecondary={true}  >
                        <div style={{background:'#37474F',minHeight:'100%'}}>
                            <Link to="/admin"><FlatButton label="Applications"    labelStyle = {{color :"#00bcd4"}} style={{width:'100%',height:'55px'}}></FlatButton></Link>
                            <Link to="/admin/employers"><FlatButton label="Employers"    labelStyle = {{color :"#00bcd4"}} style={{width:'100%',height:'55px'}}></FlatButton></Link>
                            <Link to="/admin/posts"><FlatButton label="Posts"    labelStyle = {{color :"#00bcd4"}} style={{width:'100%',height:'55px'}}></FlatButton></Link>
                            <Link to="/admin/jobseekers"><FlatButton label="Job Seekers"    labelStyle = {{color :"#00bcd4"}} style={{width:'100%',height:'55px'}}></FlatButton></Link>
                        </div>
                </Drawer>
                {this.props.children}
            </div>
        );
    }
}
const mapStateToProps=(state)=> {
    return({
        state:state
    }
    );
};
AdminPanal=withRouter(AdminPanal);
export default connect(mapStateToProps)(AdminPanal);