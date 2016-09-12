import React from 'react';
import AgeRange from './AgeRange';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles={
  Paper:{
    padding:"20",
  },
}
class HeadShots extends React.Component{
  render(){
    return(
      <Paper style={styles.Paper} id="headshots">
      <center>
        <h2> CURRENT HEADSHOTS </h2>
      </center>
          <AgeRange/>
      </Paper>

    );
  }
}

export default HeadShots;
