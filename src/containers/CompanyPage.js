import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class CompanyPage extends Component{

    render(){
        return(
            <h1>welcome company {this.props.user.userName}</h1>
        )
    }
}
const mapStateToProps=(state)=>{
    return({
        user: state.user
    });
};
CompanyPage = withRouter(CompanyPage);
export default connect(mapStateToProps)(CompanyPage);