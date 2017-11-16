import React from 'react';
import {Col, Row, Grid, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const InfoPanel = (props) => {

  const handleRedirect = () => {
    var url = props.selectedProject.url || '';
    if (url !== '') props.history.push(url)
  }

  return (
    <div id='infoPanel'>

    {props.display === 'project' ? (
      <Grid fluid={true}>


      <Row>

        <Col sm={12} md={12} style={centered}>
          <br/>
          <Row>
            <h2>{props.selectedProject.name}</h2>
          </Row>
          <br/><hr/><br/>
          <Row>
            {<img src={props.selectedProject.thumbnail} height={150} width={160}/>}
          </Row>

        </Col>

      </Row>
      <br/><br/>
      <Row style={centered}>
        <p style={descriptionStyle}>{props.selectedProject.description}</p>
      </Row>

      <br/><hr/><br/>

        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <h4 style={centered}> Data From</h4>
            <br/>
            </Col>
          <Col md={1}></Col>
        </Row>

        <Row>
          <Col md={2}></Col>
          <Col md={8}>
          <ListGroup>
            {props.selectedProject.data.map((data, i) => (
              <ListGroupItem key={i} style={{width: '100%', textAlign: "center"}}>
                {data}
              </ListGroupItem>
            ))}
          </ListGroup>
          </Col>
          <Col md={2}></Col>
        </Row>


      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          {props.selectedProject.url ? (
            <a href={props.selectedProject.url}>
              <Button type="primary">
                Go<Icon type="right" />
              </Button>
            </a>
          ) : (
            <Button>
              Coming Soon
            </Button>
          )
        }
          {props.selectedProject.name === 'Comments' ? (
            <div>
              <br/>
              <Button>
                Try<Icon type="down" />
              </Button>
            </div>
          ) : ''}
        </Col>
        <Col md={4}></Col>
      </Row>

    </Grid>
  ) : ''}

    {props.display === '' ? (
      <Col md={12} style={{textAlign: 'center'}}>
        <br/>
        <img src='https://drive.google.com/uc?id=1xK-T-oFbGhA36UHCVIuNRXcRTU0PAirN' height={230} width={300}></img>
        <br/><br/>
        <h4>Welcome to Surf</h4>
        <br/>
        <h5>Click to learn more about a project...</h5>
        <h5>or just move the circles around!</h5>
      </Col>
    ) : ''}

    </div>
  )
};

const descriptionStyle = {
  fontSize: '15px',
  fontWeight: '100'
}

const centered = {
  textAlign: "center",
  align: "center"
}

const offset = {
  // marginLeft: '7%'
}

export default InfoPanel;
