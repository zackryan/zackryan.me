import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const styles={
  HeadShot:{
    maxHeight:"320px",
    overflow:"hidden",
  },
  Card:{
    maxWidth:"25%",
    margin:"10",
  },
  Button:{

  },
  CardHolder:{
    display:"flex",
  },


}

class AgeRange extends React.Component{
  render(){
    return(
      <div style={styles.CardHolder}>
          <Card style={styles.Card}>

              <CardMedia style={styles.HeadShot} >
                <img src="https://s3.amazonaws.com/zackryan/headshot7.png" />
              </CardMedia>
              <CardTitle title="Age Range 18-22" subtitle="Clean Shaven" />

              <CardActions>
                <RaisedButton label="Book Now!" primary={true} />

              </CardActions>
          </Card>

          <Card style={styles.Card}>

              <CardMedia style={styles.HeadShot} >
                <img src="https://s3.amazonaws.com/zackryan/headshot5.png" max-width="50%" />
              </CardMedia>
              <CardTitle title="Age Range 18-22" subtitle="Clean Shaven Smiling" />

              <CardActions>
                <RaisedButton label="Book Now!" primary={true} />

              </CardActions>
          </Card>
          <Card style={styles.Card}>

              <CardMedia style={styles.HeadShot} >
                <img src="https://s3.amazonaws.com/zackryan/headshot6.png" max-width="50%" />
              </CardMedia>
              <CardTitle title="Age Range 22-32" subtitle="Facial hair" />

              <CardActions>
                <RaisedButton label="Book Now!" primary={true} />

              </CardActions>
          </Card>
          <Card style={styles.Card}>

              <CardMedia style={styles.HeadShot} >
                <img src="https://s3.amazonaws.com/zackryan/headshot7.png" max-width="50%" />
              </CardMedia>
              <CardTitle title="Age Range 22-32" subtitle="Clean Shaven Smiling" />

              <CardActions>
                <RaisedButton label="Book Now!" primary={true} />

              </CardActions>
          </Card>
          </div>
    );
  }
}

export default AgeRange;
