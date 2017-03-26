/**
 * Created by Isham on 3/26/2017.
 */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class NavbarButton extends React.Component{
    handle(){
        this.props.handle();
    }

    render(){
       return( <FlatButton
            primary={true}
            label={this.props.lable}
            labelStyle={{textTransform:'none',
                fontSize :'15px',
                paddingLeft:'0px',
                paddingRight: '-15px',
            }}
            style={{margin:"0px 0px",
                border:"10px",
                minWidth:"10px",
                paddingRight:'3px',
                paddingLeft:'3px',
            }}
            rippleColor="#00bcd4"
            onTouchTap = {this.handle.bind(this)}
        />);
    }
}


