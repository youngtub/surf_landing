import React from 'react';
import * as d3 from 'd3';
import InfoPanel from './InfoPanel';
import {Grid, Row, Col} from 'react-bootstrap';
import $ from 'jquery';
import axios from 'axios';


class VizPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      links: [],
      selectedProject: {},
      display: ''
    }
    this.generateCharts = this.generateCharts.bind(this);
  }

  componentDidMount() {

    this.setState({
      projects: jsonData.nodes,
      links: jsonData.links
    }, () => {
      this.generateCharts();
    });

  };

  generateCharts() {

    d3.select('#canvas').selectAll('svg').remove();

    var width = 960,
        height = 500

    var svg = d3.select("#canvas").append("svg")
        .attr("width", width)
        .attr("height", height);

    var linkDistance = 250;
    var circleSize = 60;
    var artistNum = 7;

    var sim = d3.forceSimulation(this.state.projects)
    .force("charge", d3.forceManyBody().strength(-100))
    .force("link", d3.forceLink(this.state.links)
      .distance((d) => {
        // return d.value > 1 ? linkDistance/(d.value/1.5) : linkDistance*1.5;
        return linkDistance
      })
      // .strength((d) => {
      //   return d.value > 0 ? d.value*2 : 1;
      // })
      )
    .force("center", d3.forceCenter(width/2 + 40, height/2))
    // .force("gravity", d3.forceManyBody().strength(-50))
    // .force("distance", d3.forceManyBody(100))

    // .force('collision', d3.forceCollide().radius(function(d) {
    //   return 30
    // }))
    .force("size", d3.forceManyBody([width, height]));

    sim.alpha(0.9)

    var link = svg.selectAll(".link").data(this.state.links).enter()
        .append("line")
        .attr("class", (d) => d.value > 1 ? `link ${d.source.name} ${d.target.name}` : `link `)
        .style("stroke", '#dbdde0')
        .attr("stroke-width", (d) => d.value*2);

          $('.link').toggle();

var node = svg.selectAll(".node").data(this.state.projects).enter()
    .append("g").attr("class", "node")
    .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended)
    );

function dragstarted() {
  if (!d3.event.active) sim.alphaTarget(0.3).restart();
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
}

function dragged() {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
}

function dragended() {
  if (!d3.event.active) sim.alphaTarget(0);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
}

var colors = {
  "InTheStudio": "#423068",
  "Movies": "#6d1f4b",
  "Reddit": "#2b3575",
  "Songs": "#23579b",
  "YouTube": "#8c1a0f",
  "Comments": "#316a8c",
  "Playground": '#191919'
}

  node.append("circle")
      .attr("r", circleSize)
      .attr("fill", (d) => colors[d.name])
      .attr("class", (d) => `${d.name} node`);

  node.append("text")
      .attr("dx", -(circleSize/2 -1))
      .attr("dy", ".70em")
      .text(function(d) { return d.name })
      .style("font-size", "15px")
      .style("font-weight", "bold")
      .style("fill", "#ceccd1")
      .attr("class", (d) => `${d.name}`)

    node.on('click', d => {

      let proj = d.name;

      // $(`.${artist.split(' ').join('')}`).css('display', 'inline');
      // $('.link').css('display', 'none')
      $(`.${proj}.link`).css('display', 'inline')

      this.setState({
        selectedProject: d,
        display: 'project'
      }, () => {
        console.log('project in state', this.state.selectedProject)
      })
    });

    // var movement = setInterval(function(){
    //   var randNum = Math.floor(Math.random()*100)/100;
    //   console.log('random number', randNum);
    //   sim.alpha(randNum).restart();
    // }, 1000);

      sim.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
      });

  };

  render() {
    return (
        <Grid fluid={true}>

          <Row>

            <Col md={9} className="show-grid">
              <div id='canvas' style={border}></div>
            </Col>

            <Col md={3} style={border}>

              <Row className="show-grid">
                  <InfoPanel selectedProject={this.state.selectedProject}
                    display={this.state.display} projects={this.state.projects}
                    links={this.state.links}
                    />
              </Row>

            </Col>

          </Row>
          <br/>
        </Grid>
    )
  }

};

const border = {
  // border: 'solid black 1px'
}

const jsonData = {
  "nodes": [
    {"name": 'InTheStudio', "description": 'Collaborations between Rappers & Producers', "data": ['Spotify', 'RapGenius'], "url": "https://inthestudio.herokuapp.com/", "thumbnail": "http://animalkingdomrecordings.com/wp-content/uploads/2017/10/recording-console-clipart.png" },
    {"name": 'Movies', "description": 'Similar movie search engine', "data": ['The Movie DB (TMDB)'], "url": "https://surfmovies.herokuapp.com/", "thumbnail": "http://www.mygraphichunt.com/wp-content/uploads/2015/09/wpid-cinema-with-screen-and-seats_23-2147506328-650x650.jpg" },
    {"name": 'Reddit', "description": 'Surf subreddits, comments, and more!', "data": ['Reddit API'], "thumbnail": "https://ichef-1.bbci.co.uk/news/1024/media/images/62071000/png/_62071291_reddit-alien.png" },
    {"name": 'Songs', "description": 'Explore your music library like never before', "data": ['Spotify', 'TheEchoNest'], "thumbnail": "http://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Cloud-Music-icon.png" },
    {"name": 'Comments', "description": 'Because linear comments can be so limiting...', "data": ['Anyone'], "thumbnail": "http://www.iconarchive.com/download/i60499/custom-icon-design/pretty-office-9/comment-edit.ico" },
    {"name": 'YouTube', "description": 'Surf related YouTube videos', "data": ['YouTube API'], "thumbnail": "https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697037-youtube-512.png" },
    {"name": 'Playgrounds', "description": 'Check out the platform', "data": ['Null'], "url": "https://surfplaygrounds.herokuapp.com/", "thumbnail": "https://coconutgirlwireless.files.wordpress.com/2016/01/surf-icon.png" }
  ],
  "links": [
    {"source": 0, "target": 1, "value": 2 },
    {"source": 0, "target": 2, "value": 1 },
    {"source": 0, "target": 3, "value": 2 },
    {"source": 0, "target": 4, "value": 1 },
    {"source": 0, "target": 5, "value": 1 },
    {"source": 0, "target": 6, "value": 1 },
    {"source": 1, "target": 2, "value": 1 },
    {"source": 1, "target": 3, "value": 1 },
    {"source": 1, "target": 4, "value": 1 },
    {"source": 1, "target": 5, "value": 2 },
    {"source": 1, "target": 6, "value": 1 },
    {"source": 2, "target": 3, "value": 1 },
    {"source": 2, "target": 4, "value": 2 },
    {"source": 2, "target": 5, "value": 1 },
    {"source": 2, "target": 6, "value": 1 },
    {"source": 3, "target": 4, "value": 1 },
    {"source": 3, "target": 5, "value": 1 },
    {"source": 3, "target": 6, "value": 1 },
    {"source": 4, "target": 5, "value": 2 },
    {"source": 4, "target": 6, "value": 1 },
    {"source": 5, "target": 6, "value": 1 }
  ]
}


export default VizPanel;
