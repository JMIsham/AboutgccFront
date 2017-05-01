import React from 'react';
import {Row,Col,Container}from 'react-grid-system';
import Paper from 'material-ui/Paper';
const HomePage = () => {
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
                        <div className="ui cards">
                            <div className="card">
                                <div className="content">
                                    <div className="header">this is the coolest job subject ever created in the entire world</div>
                                    <div className="description">
                                        Elliot Fu is a film-maker from New York.
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="info circle icon"></i>
                                    More Details
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="header">Elliot Fu</div>
                                    <div className="description">
                                        Elliot Fu is a film-maker from New York.
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    Add Friend
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="header">Elliot Fu</div>
                                    <div className="description">
                                        Elliot Fu is a film-maker from New York.
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    Add Friend
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="header">Elliot Fu</div>
                                    <div className="description">
                                        Elliot Fu is a film-maker from New York.
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    Add Friend
                                </div>
                            </div>
                        </div>
                    </Paper>

                </Col>

            </Row>
        </Container>

        <div className="ui active loader"></div>
    </div>
  );
};

export default HomePage;
