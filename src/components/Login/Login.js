import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import './login.css';


class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      userNameErrorText : '',
      passwordErrorText : ''
    }
    this.validateME = this.validateME.bind(this);
  }
  // errorText="Invalid User Name"

  validateME(){
    console.log('U clicked me');
    console.log(this.refs.userName.getValue());
    console.log(this.refs.password.getValue());
    axios.get('http://localhost:3000/users/auth', {
      params: {
        userName: this.refs.userName.getValue(),
        password : this.refs.password.getValue()
      }
    })
    .then((res) => {
      console.log(res.data.output);
      if(res.data.output.length == 0){
          this.setState({userNameErrorText : 'Invalid Username',passwordErrorText:'invalid password'});
      }else{
        this.props.callParent(true,res.data.output);
      }
    })
    .catch((error)=> {
      console.log(error);
    });

    // User.authenticate(this.refs.userName.getValue(),this.refs.password.getValue(),(valid)=>{
    // //   valid == true ? console.log('success') : console.log('failed');
    // // })
  }

  render() {
    return (
      <div className="row panelMargin">
        <div className= "col-sm-4"></div>
        <div className= "col-sm-4">
          <Card>

             <CardTitle title="LogIn" />
            <CardText>
              <TextField
                hintText="User Name : "
                errorText = {this.state.userNameErrorText}
                ref="userName"
                floatingLabelText="User Name :"
              />
              <TextField
                hintText="Password : "
                ref="password"
                errorText = {this.state.passwordErrorText}
                type = "password"
                floatingLabelText="Password :"
              />

            </CardText>
            <CardActions>
              <RaisedButton label="Log In" primary={true} onClick={this.validateME} />
            </CardActions>
          </Card>

        </div>
        <div className= "col-sm-4"></div>

      </div>
    );
  }
}

export default Login;
