import React from 'react';
import {Carousel} from 'antd';
import {Grid, Row, Col} from 'react-bootstrap';
import its from './images/its.png'
import sim from './images/sim.png'
import mov from './images/mov.png'
import surch from './images/surch.png'
import pg from './images/pg.png'
import surchPanel from './images/surchPanel.png'

const About = (props) => {
  return (
    <Grid fluid={true}>

    <Row>
      <Col md={6} style={leftColStyle}>
        <br/><br/><br/>
        <h3>Similarity-based visualization</h3>
        <h5></h5>
      </Col>
      <Col md={6}>
        <img src={mov} height={400} width={500} />
      </Col>
    </Row>

    <br/><br/>

    <Row>
      <Col md={2}></Col>
      <Col md={4}>
        <img src={sim} height={300} width={450} />
      </Col>
      <Col md={4} style={rightColStyle}>
        <br/><br/><br/>
        <h3>Simulation > Interactive Visualization</h3>
        <h5>Unlike a DAG's (directed acyclic graphs), Surf sets data in motion and invites fluid, intuitive interaction </h5>
      </Col>
    </Row>

    <br/><br/>

      <Row>
        <Col md={6} style={leftColStyle}>
          <br/><br/><br/>
          <h3>Surch engine: parallel search queries</h3>
          <h5>Control precisely what you see on the panel</h5>
        </Col>
        <Col md={2}>
          <img src={surch} height={300} width={400} />
        </Col>
        <Col md={2}>
          <img src={surchPanel} height={300} width={400} />
        </Col>
      </Row>

      <br/><br/>

        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <img src={pg} height={375} width={450} />
          </Col>
          <Col md={6} style={rightColStyle}>
            <br/><br/><br/>
            <h3>A lot more fun than feeds/lists/graphs!</h3>
            <h5></h5>
          </Col>
        </Row>

  </Grid>
  )
};

const rightColStyle = {
  textAlign: 'left'
}

const leftColStyle = {
  textAlign: 'right'
}

export default About;
