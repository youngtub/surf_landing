import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Card} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';

import its from './images/its.png';
import VizPanel from './VizPanel.jsx';
import Menu from './Menu.jsx';
import Carousel from './AntCarousel.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={'main'}>
        <header className="header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2 className='Balmain'>Surf</h2>
        </header>
        </ScrollableAnchor>
          <Grid fluid={true} className='main' style={mainStyle}>
            <br/><hr/><br/>

            <Row>
              <br/>
              <h4 style={{paddingLeft: '1%'}}>Fluid, intuitive, interactive data visualization platform</h4>
              <br/><br/>
            </Row>


            <hr/>

            <br/><br/>
            <Row>
              <h3 style={centered}>Current Projects</h3>
              <Col md={2}>
                <Menu className='menu'/>
              </Col>
              <Col md={10}>
                <VizPanel />
              </Col>
            </Row>

            <ScrollableAnchor id={'about'}>
            <hr/>
            </ScrollableAnchor>
            <Row style={aboutStyle}>
              <h2 style={centered}>About</h2>
              <br/>
              <Col md={3}></Col>
              <Col md={6}>
                <Carousel />
              </Col>
              <Col md={3}></Col>
            </Row>

          </Grid>
      </div>
    );
  }
}

const cardStyle = {
  width: '20vw'
}

const aboutStyle = {
  backgroundColor: '#dbdde0',
  padding: '2%',
  textAlign: 'center',
  height: '50vh'
}

const centered = {
  textAlign: 'center'
}

const mainStyle = {
  height: '84vh'
}

export default App;
