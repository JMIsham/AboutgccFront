/**
 * Created by Isham on 4/4/2017.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class MoreEmployerDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true,
        };
    }

    handleTouchTap(event){
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose (){
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <RaisedButton
                    onTouchTap={this.handleTouchTap.bind(this)}
                    label="Click me"
                    style={{marginTop:"-40px"}}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose.bind(this)}
                    style={{width:'600px'}}
                >
                    test
                </Popover>
            </div>
        );
    }
}