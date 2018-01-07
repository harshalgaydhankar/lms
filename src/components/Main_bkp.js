import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Navigation from './MyNav/Navigation';
import Paper from 'material-ui/Paper';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayString : ''
    };
    this.navigationClicked = this.navigationClicked.bind(this);
  }

  componentWillMount(){
    var displayString = (
      <h3> You are on Home Page </h3>
    );
    this.setState({displayString});
  }

  navigationClicked(index){
    console.log('clicked ',index);
    var displayString = (
      <h3> You have clicked on {index} </h3>
    );
    this.setState({displayString});

  }

  render() {
    const style = {
      paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 7%',
      },
    };
    return (
      <div>
        <MuiThemeProvider>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <AppBar
              title="Nagesh Karajagi Orchid College Of Engineering & Technology, Solapur"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-2">
              <Navigation callParent={this.navigationClicked} />
            </div>
            <div className="col-sm-6">
                <Paper style={style.paper} zDepth={5}>
                  {this.state.displayString}
                </Paper>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
