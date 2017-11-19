import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Card} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProjectsListView from './ProjectsListView'
import its from './images/its.png';
import VizPanel from './VizPanel.jsx';
import Menu from './Menu.jsx';
import About from './About.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'list',
      radioValue: 1
    }
  }

  handleRadioChange = (val) => {
    var newDisplay; val === 1 ? newDisplay = 'list' : newDisplay = 'surf'
    this.setState({
      radioValue: val,
      display: newDisplay
    })
  }

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
              <h4 style={{paddingLeft: '1%'}}>"Visualizing Similarity" - Fluid & Interactive Data Visualization Platform</h4>
              <br/><br/>
            </Row>
            <hr/>
            <br/><br/>
            <Row>
              <Col md={1}>
                <Menu className='menu'/>
              </Col>
              <Col md={11}>
                {this.state.display === 'list' ? (
                  <ProjectsListView handleRadioChange={this.handleRadioChange} radioValue={this.state.radioValue}/>
                ) : (
                  <VizPanel handleRadioChange={this.handleRadioChange} radioValue={this.state.radioValue}/>
                )}
              </Col>
            </Row>

            <ScrollableAnchor id={'about'}>
            <hr/>
            </ScrollableAnchor>
            <Row style={aboutStyle}>
              <h2 style={centered}>About</h2>
              <br/><br/><br/>
              <Col md={12}>
                <About />
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
  // textAlign: 'center',
  // height: '100vh'
}

const centered = {
  textAlign: 'center'
}

const mainStyle = {
  height: '84vh'
}

export default App;
