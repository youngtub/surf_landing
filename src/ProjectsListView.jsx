import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'

const ProjectsListView = (props) => {
  return (
    <Grid fluid={true}>
    <Row>

      <Row>
        <Col md={2}>
        <ButtonToolbar>
          <ToggleButtonGroup name='view' type="radio" value={props.radioValue} onChange={props.handleRadioChange}>
            <ToggleButton value={1}><p onClick={() => props.handleRadioChange(1)}>List</p></ToggleButton>
            <ToggleButton value={2}><p onClick={() => props.handleRadioChange(2)}>Surf</p></ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        </Col>
        <Col md={10}>
          <h3 style={headerStyle}>Current Projects</h3>
        </Col>
      </Row>

      <br/><br/>
      <Col md={3} sm={3} lg={3} style={projectStyle}>
        <a href='https://inthestudio.herokuapp.com'>
          <h4 >InTheStudio</h4>
          <img src={"http://animalkingdomrecordings.com/wp-content/uploads/2017/10/recording-console-clipart.png"} height={100} width={150}></img>
          <br/><br/><br/>
          <p style={{fontSize: '14px'}}>Collaborations between Rappers & Producers</p>
          </a>
      </Col>
      <Col md={3} sm={3} lg={3} style={projectStyle}>
        <a href='https://surfmovies.herokuapp.com'>
        <h4 >Movies</h4>
        <img src={"http://www.mygraphichunt.com/wp-content/uploads/2015/09/wpid-cinema-with-screen-and-seats_23-2147506328-650x650.jpg"} height={100} width={150}></img>
        <br/><br/><br/>
        <p style={{fontSize: '14px'}}>Explore movies by similarity</p>
        </a>
      </Col>
      <Col md={3} sm={3} lg={3} style={projectStyle}>
        <a href='https://surfcomments.herokuapp.com'>
        <h4 >Comments</h4>
          <img src={"http://www.iconarchive.com/download/i60499/custom-icon-design/pretty-office-9/comment-edit.ico"} height={100} width={100}></img>
        <br/><br/><br/>
        <p style={{fontSize: '14px'}}>Non-linear comments widget</p>
      </a>
      </Col>

      <Col md={3} sm={3} lg={3} style={projectStyle}>
        <a href='https://surfplaygrounds.herokuapp.com'>
        <h4 >Playgrounds</h4>
          <img src={"https://coconutgirlwireless.files.wordpress.com/2016/01/surf-icon.png"} height={100} width={150}></img>
        <br/><br/><br/>
        <p style={{fontSize: '14px'}}>Play around with the platform</p>
      </a>
      </Col>


    </Row>
    <br/><hr/><br/>
    <Row>
      <h3 style={centered}>Coming Soon</h3>
      <br/><br/>
      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >Songs</h4>
          <img src={"http://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Cloud-Music-icon.png"} height={125} width={125}></img>
        <br/><br/><br/>
      </Col>

      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >YouTube</h4>
          <img src={"https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697037-youtube-512.png"} height={125} width={125}></img>
        <br/><br/><br/>
      </Col>

      <Col md={4} sm={4} lg={4} style={centered}>
        <h4 >Reddit</h4>
        <img src={"https://ichef-1.bbci.co.uk/news/1024/media/images/62071000/png/_62071291_reddit-alien.png"} height={100} width={150}></img>
        <br/><br/><br/>
      </Col>

    </Row>
    <br/><br/>
    </Grid>
  )
};

const headerStyle = {
  textAlign:'center',
  marginLeft: '-21%'
}

const projectStyle = {
  textAlign: 'center',
  padding: '7px',
  border: 'solid black 1px',
  borderRadius: '7px'
}

const centered = {
  textAlign: 'center'
}

export default ProjectsListView;
