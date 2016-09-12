import React from 'react';
import Social from './Social';
import HeadShots from './HeadShots.js';
import DemoReel from './DemoReel.js';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class Home extends React.Component{
  render(){
    return(
      <Paper>
        <center>
        <img src="https://s3.amazonaws.com/zackryan/beauitulsomething_cover.png" width="80%"/>
        </center>
          <Subheader>Reviews</Subheader>
            <List>
              <ListItem
                primaryText= {" An Amazing Film "}
                secondaryText={<a href="http://fireisland.edgemedianetwork.com/entertainment/movies/reviews//200791/beautiful_something">-Edge Media Network </a>}
              />
              <ListItem
                primaryText= {" The best film in years by a gay director from the U.S "}
                secondaryText={<a href="http://www.out.com/armond-white/2016/5/19/movie-myths-and-poetry-city-men">-Out Magazine </a>}
              />
            </List>

        <HeadShots/>
        <a name="demoreel"></a>
        <DemoReel/>
        <Social/>

      </Paper>
    );
  }
}

export default Home;
