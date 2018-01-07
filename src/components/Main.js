import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Login from './Login/Login'
import Home from './Home/Home';
import './main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayString : '',

    };

    this.callME = this.callME.bind(this);
  }

  componentWillMount(){
    var displayString = (
      <div className={this.state.loginCSS}>
          <Login callParent={this.callME}/>
      </div>
    )
    this.setState({displayString : displayString});
  }

  callME(data,UserData){
    if(data == true){
      var displayString = (
        <div>
          <Home userData = {UserData}/>
        </div>
      )
      this.setState({displayString:displayString,loginCSS : 'row hideComponent',homeCSS : 'row showComponent'})
    }
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
          <div>
              {this.state.displayString}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
