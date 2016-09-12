import React from 'react';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


const styles = {
  appBar: {
    flexWrap: 'wrap',
    position: 'fixed',
    top: 0,
    left:0,
  },
  tabs: {
    width: '95%',
  },
};

export default() => {
  return(
    <AppBar style={styles.appBar}>

      <Tabs style= {styles.tabs}>
          <Tab href="#headshots" label="HEAD SHOTS" primary={true} />
          <Tab href="#demoreel" label="DEMO REEL" primary={true} />
          <Tab href="#funnyreel" label="FUNNY REEL" primary={true} />
          <Tab href="#contact"   label="CONTACT" primary={true} />
      </Tabs>
      </AppBar>

  );
}
