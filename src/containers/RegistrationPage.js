/**
 * Created by Isham on 3/26/2017.
 */
import React, {Component} from 'react';
import Employer from '../components/CompanyRegisterForm';
import {connect} from 'react-redux';
import * as types from "../constants/actionTypes";
import SwipeableViews from 'react-swipeable-views';
import {Tab,Tabs} from 'material-ui';
import {Row,Col,Container}from 'react-grid-system';

class RegistrationPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          slideIndex: 0,
        };
    }
    handleEmployer(formData){
        console.log(formData);
        this.props.dispatch({
            type:types.EMPLOYER_REGISTRATION_REQUESTED,
            payload: formData
        });
    }
    handleSwipe(value){
        this.setState(
            {
                slideIndex:value
            }
        );
    }
    render(){


        return(
            <div style={style}>
                <Container fluid>
                    <Row>
                        <Col lg={4}>
                        </Col>
                        <Col  lg={4}>
                            <Tabs onChange={this.handleSwipe.bind(this)} value={this.state.slideIndex} >
                                <Tab label="Employer Registration" value={0} buttonStyle={{backgroundColor:"#37474f", fontColor:"#000000"}}/>
                                <Tab label="JobSeeker Registration" value={1} buttonStyle={{fontColor:"#37474f",backgroundColor:"#37474f",}}/>
                            </Tabs>
                            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleSwipe.bind(this)}>
                                <div>
                                    <Employer onSubmit={this.handleEmployer.bind(this)}/>
                                </div>
                                <div>
                                    Under Construction
                                </div>

                            </SwipeableViews>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
const style ={
    padding:"20px",

};
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
    bar: {
        background:'#37474F',
    },
};
export default connect()(RegistrationPage);