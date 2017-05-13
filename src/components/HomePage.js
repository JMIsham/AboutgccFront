import React,{Component} from 'react';
import {Row,Col,Container}from 'react-grid-system';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actionTypes from '../constants/actionTypes';
import PostItem from './postItem';
import SearchInput, {createFilter} from 'react-search-input/lib/index';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'
import {Button,Carousel,CarouselItem} from 'react-bootstrap'
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            searchTerm:''
        }
    }
    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
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
            const KEYS_TO_FILTERS=['c_name','subject','tags.name'];
            const filteredPosts = posts.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
            const listItems = filteredPosts.map((post) =>
                <PostItem
                    onClick = {this.handelClick.bind(this)}
                    key={post.id}
                    post={post}
                />
            );
            return(<Paper zDepth={1} >
                <div style={{margin:"20px"}}>
                <h2 className="ui horizontal divider header">
                    <i className="suitcase icon"></i>
                    {filteredPosts.length+" Job Posts Available"}
                </h2>
                <div className="ui  segment" style={{maxWidth:"600px",margin:"20px"}}>
                    <SearchInput className='search-input ui input focus fluid' onChange={this.searchUpdated.bind(this)} />
                </div>
                <div className="ui link cards" >

                    {listItems}
                    {filteredPosts.length===0? <h1>No Results Found :(</h1>:undefined}
                </div>
                </div>
            </Paper>) ;
        }catch (e){
            return    <div className="ui active loader huge"></div>;
        }

    }

    render(){
        return (
            <div style={{backgroundColor:"#e0e0e0", minHeight:"690px"}}>
                <Carousel>
                    <CarouselItem>
                        <img width="100%" height={200} alt="900x400" src="http://localhost/aboutGccAsserts/Carousel/download.jpg"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img width="100%" height={200} alt="900x400" src="http://localhost/aboutGccAsserts/Carousel/download.jpg"/>                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img width="100%" height={200} alt="900x400" src="http://localhost/aboutGccAsserts/Carousel/download.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
                <div>
                </div>
                <Container fluid>
                    <Row>
                        <Col lg={1} xs={2} >
                        </Col>
                        <Col lg={10} xs={8} >
                            {this.makePage()}
                        </Col>
                        <Col lg={1} xs={2} >
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
