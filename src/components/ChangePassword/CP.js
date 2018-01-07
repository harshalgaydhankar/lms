import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

import Snackbar from 'material-ui/Snackbar';


class CP extends Component {

  constructor(props){
    super(props);
    this.state = {
      oldPasswordErrorText : '',
      newPasswordErrorText : '',
      confirmPasswordErrorText : '',
      open:false
    };
    this.changePassword = this.changePassword.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

  }

  changePassword(){
      if(this.refs.oldPassword.getValue() == this.props.userData[0].password){
        if(this.refs.newPassword.getValue() == this.refs.confirmPassword.getValue() ){

          axios.get('http://localhost:3000/users/cp', {
            params: {
              userName: this.props.userData[0].userName,
              password : this.refs.newPassword.getValue()
            }
          })
          .then((res) => {
            console.log(res.data.output);
            this.setState({open:true});
          })
          .catch((error)=> {
            console.log(error);
          });



          this.setState({open:true,oldPasswordErrorText:'',newPasswordErrorText:'',confirmPasswordErrorText:''});
          console.log('hapyy happuu');
        }
        else{
          var errorMSG = 'Both New Password and Confirm Password doesnt match';
          this.setState({oldPasswordErrorText:'',newPasswordErrorText:errorMSG,confirmPasswordErrorText:errorMSG});
        }

      }else{
        var errorMSG = 'Incoreect Current Password';
        this.setState({oldPasswordErrorText:errorMSG});
      }
  }

  handleRequestClose(){
    this.setState({open:false});
  }

  render() {
    return (
      <div className="row panelMargin">
          <Card>

             <CardTitle title="Change Password" />
            <CardText>
              <TextField
                hintText="Old Password : "
                type = "password"
                ref="oldPassword"
                errorText = {this.state.oldPasswordErrorText}
                floatingLabelText="Old Password :"
              />
              <TextField
                hintText="New Password : "
                ref="newPassword"
                type = "password"
                errorText = {this.state.newPasswordErrorText}
                floatingLabelText="New Password :"
              />
              <TextField
                hintText="Confirm Password : "
                ref="confirmPassword"
                type = "password"
                errorText = {this.state.confirmPasswordErrorText}
                floatingLabelText="Confirm Password :"
              />
            </CardText>
            <CardActions>
              <RaisedButton label="Change Password" primary={true} onClick={this.changePassword} />
            </CardActions>
          </Card>
          <Snackbar
              open={this.state.open}
              message="Your Password has been changed Successfuly ..!"
              autoHideDuration={8000}
              onRequestClose={this.handleRequestClose}
            />

      </div>
    );
  }
}

export default CP;
