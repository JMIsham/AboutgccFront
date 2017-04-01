import React, { PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import NavbarButton from '../components/NavbarButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Flag, Segment } from 'semantic-ui-react'
import {Col,Row,Container} from 'react-grid-system';
import {connect} from 'react-redux';
import * as types from '../constants/actionTypes';
import "babel-es6-polyfill";
var Router = require('react-router');
injectTapEventPlugin();

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
    handleHome(){
        this.props.router.push("/");
    }
    handleAboutUs(){
        this.props.router.push("/about");
    }
    handlelogin(){
        this.props.router.push("/login");
    }
    handlelogout(){
        this.props.router.push("/logout");
    }
    handleMyPage(){
        this.props.router.push("/mypage");
    }
    componentWillReceiveProps(nextProps){
        // if(nextProps.user.loggedIn) Router.browserHistory.push("/about");

    }

    button(){
        if(this.props.user.loggedIn){
            return(
                <NavbarButton lable="Logout" handle={this.handlelogout.bind(this)}/>
        );
        }
        return(
            <NavbarButton lable="Login" handle={this.handlelogin.bind(this)}/>
        )
    }
    profilebutton(){
        if(this.props.user.loggedIn){
            return(
                <div>
                    <NavbarButton lable="MyPage" handle={this.handleMyPage.bind(this)}/>
                </div>

            );
        }
    }
    profileDivider(){
        if(this.props.user.loggedIn){
            return(
                <ToolbarSeparator style={{
                    backgroundColor: "#607d8b",
                    marginLeft:'2px',
                    marginLeft:"0px",

                }}/>
            );
        }
    }

  render() {
      return (

      <div>
          <Toolbar style={styles.bar}>
              <ToolbarGroup>

                  <FlatButton
                      primary={true}
                      label="AboutGCC"
                      labelStyle={{textTransform:'none',
                          fontSize :'20px',
                          paddingLeft:'0px',
                          paddingRight: '0px',
                      }}
                      disableTouchRipple = {true}
                      hoverColor="#37474f"

                      onTouchTap = {this.handleHome.bind(this)}
                  />
                  <NavbarButton lable="Home" handle={this.handleHome.bind(this)}/>
                  <ToolbarSeparator style={{
                      backgroundColor: "#607d8b",
                      marginLeft:'2px',

                  }}/>
                  <NavbarButton lable="About Us" handle={this.handleAboutUs.bind(this)}/>
                  <ToolbarSeparator style={{
                      backgroundColor: "#607d8b",
                      marginLeft:'2px',
                      marginLeft:"0px",

                  }}/>

                  {this.profilebutton()}
                  {this.profileDivider()}
                  {this.button()}



              </ToolbarGroup>
          </Toolbar>
        {this.props.children}
      </div>
    );
  }
}
const styles = {
    title: {
        color: '#ECEFF1',
        cursor: 'pointer',

    },
    bar: {
        background:'#37474F',
    },
    mainDiv:{
        marginTop:'50px',
    }
};
App.propTypes = {
  children: PropTypes.element
};
function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(
    mapStateToProps
)(App);
