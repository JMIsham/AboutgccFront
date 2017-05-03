import React,{Component} from 'react';
import {Row,Col,Container}from 'react-grid-system';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actionTypes from '../constants/actionTypes';
import PostItem from './postItem';
class HomePage extends Component{
    componentWillMount(){
        this.props.dispatch({
            type:actionTypes.HOMEPAGE_REQUESTED
        });
    }
    handelClick(){
        console.log("testing");
    }
    makePage(){
        try{
            const posts = this.props.common.allPosts;
            const listItems = posts.map((post) =>
                <PostItem
                    onClick = {this.handelClick.bind(this)}
                    key={post.id}
                    post={post}
                />
            );
            return listItems;
        }catch (e){
            return    <div className="ui active loader huge"></div>;
        }

    }

    render(){
        return (
            <div style={{backgroundColor:"#e0e0e0", minHeight:"690px"}}>
                <h1>this is the homepage</h1>
                <Container fluid>
                    <Row>
                        <Col lg={3} xs={4} >
                            <div className="ui sticky" style={{width:"670.72px !important",height: "42px !important", left: "272.32px"}}>

                            </div>
                        </Col>
                        <Col lg={9} xs={8} >
                            <Paper zDepth={1} style={{paddingLeft:"10%"}}>
                                <div className="ui link cards" >
                                    {this.makePage()}
                                </div>
                            </Paper>

                        </Col>
                    </Row>
                </Container>

            </div>
        );
    };

}
const mapStateToProps =(state)=>{
    return({
       common:state.common
    });
};
HomePage=withRouter(HomePage);
export default connect(mapStateToProps)(HomePage);
