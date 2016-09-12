import React from 'react';
import NavigationBar from './NavigationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends React.Component {
  render(){
    return(
          <MuiThemeProvider>
            <div>
              <NavigationBar />
              {this.props.children}
            </div>
          </MuiThemeProvider>
    );
  }
}

export default App;
