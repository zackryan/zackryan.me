import React from 'react';
import Videos from './Videos'
import Paper from 'material-ui/Paper';

class DemoReel extends React.Component{
  render(){
    return(
      <Paper id="demoreel">
        <h1> Demo Reel </h1>
        <center>
        <iframe
          max-width="600"
          width="70%"
          height="350"
          src="https://www.youtube.com/embed/pjWo9Cg81zs"
          frameborder="0"
          allowfullscreen>
          </iframe>
          </center>
        <Videos/>
      </Paper>
    );
  }
}

export default DemoReel;
