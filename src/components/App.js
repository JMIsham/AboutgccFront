import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import NavbarButton from '../components/NavbarButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import "babel-es6-polyfill";
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

                  }}/>


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

export default App;
