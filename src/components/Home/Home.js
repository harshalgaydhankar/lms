import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Navigation from '../MyNav/Navigation';
import Paper from 'material-ui/Paper';
import ChangePassword from '../ChangePassword/CP';
import LeaveApplication from '../LeaveApplication/LA';


class Home extends Component {
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
    var displayString = '';
    switch (index) {
      case 0:
        displayString = (
          <LeaveApplication userData={this.props.userData}/>
        )
        this.setState({displayString});
        break;
      case 8:
        displayString = (
          <ChangePassword userData={this.props.userData}/>
        )
        this.setState({displayString});
        break;
      default:
        displayString = (
          <h3> You have clicked on {index} </h3>
        );
        this.setState({displayString});
    }
  }

  render() {
    const style = {
      paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 3%',
      },
    };
    return (
      <div>
        <MuiThemeProvider>

          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-2">
              <Navigation userData={this.props.userData} callParent={this.navigationClicked} />
            </div>
            <div className="col-sm-6" style={style.paper}>

                  {this.state.displayString}

            </div>
            <div className="col-sm-2"></div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;
