import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const LinearProjects = (props) => {
  return (
    <Grid>
    <Row>
        <h2 style={centered}>Current Projects</h2>
        <br/><br/><br/>
    </Row>

    <Row>
      <Col md={4} sm={4} lg={4} style={centered}>
          <h4 >InTheStudio</h4>
          {/*<img src={its} height={100} width={150}></img>*/}
          <br/><br/><br/>
      </Col>
      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >Movies</h4>
        <br/><br/><br/>
      </Col>
      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >Reddit</h4>
        <br/><br/><br/>
      </Col>
    </Row>

    <Row>
      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >Songs</h4>
        <br/><br/><br/>
      </Col>
      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >Comments</h4>
        <br/><br/><br/>
      </Col>
      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >YouTube</h4>
        <br/><br/><br/>
      </Col>
    </Row>
    </Grid>
  )
};

export default LinearProjects;
