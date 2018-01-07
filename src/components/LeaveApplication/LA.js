import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

import Snackbar from 'material-ui/Snackbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';



const items = [
  <MenuItem key={1} value={"CL"} primaryText="CL" />,
  <MenuItem key={2} value={"SL"} primaryText="SL" />,
  <MenuItem key={3} value={"DL"} primaryText="Dl" />,
  <MenuItem key={4} value={"CO"} primaryText="CO" />,
  <MenuItem key={5} value={"WP"} primaryText="WP" />,

];


class LA extends Component {

  constructor(props){
    super(props);
    this.state = {
      staff :[],
      leaveTypeValue : '',
      staffNamevalue : '',
      toDate:'',
      fromDate:'',
      open : false
    };
    this.applyForLeave = this.applyForLeave.bind(this);
    this.handleLeaveTypeChange = this.handleLeaveTypeChange.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.toDateChange = this.toDateChange.bind(this);
    this.fromDateChange = this.fromDateChange.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount(){
    axios.get('http://localhost:3000/users/getStaff', {
      params: {
        deptName: this.props.userData[0].dept
        }
    })
    .then((res) => {
      console.log('hiya we r in la *************');
      console.log(res.data.output);
      console.log('hiya we r in la *************');

      var staff = res.data.output.map((item,index) =>{
        return (
          <MenuItem key={index} value={item.userName} primaryText={item.staffName} />
        )
      })
      this.setState({staff:staff});

    })
    .catch((error)=> {
      console.log(error);
    });
  }

  applyForLeave(){
    // console.log('clicked on apply leave');
    // console.log('Leave Type ',this.state.leaveTypeValue);
    // console.log('Adjusted Person Name  ',this.state.staffNamevalue);
    // console.log('from date ',this.state.fromDate);
    // console.log('to date ',this.state.toDate);
    // console.log('reason ',this.refs.reasonTXT.getValue());
    var leaveObj = {
      userName : this.props.userData[0].userName,
      dept : this.props.userData[0].dept,
      leaveType : this.state.leaveTypeValue,
      fromDate : this.state.fromDate,
      toDate : this.state.toDate,
      adjustedUser : this.state.staffNamevalue,
      reason : this.refs.reasonTXT.getValue()
    };
    axios.get('http://localhost:3000/users/applyLeave', {
      params: {
        leaveObj: JSON.stringify(leaveObj)
        }
    })
    .then((res) => {
      console.log('in leave app');
      console.log(res);
      this.setState({open:true});
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  handleLeaveTypeChange(event, index, value){
    this.setState({leaveTypeValue : value});
  }

  handlePersonChange(event, index, value){
    this.setState({staffNamevalue : value});
  }

  fromDateChange(e,date){
    this.setState({fromDate : date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()});
  }

  toDateChange(e,date){
    this.setState({toDate : date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()});
  }
  handleRequestClose(){
    this.setState({open:false});
  }

  render() {
    return (
      <div className="row panelMargin">
          <Card>

             <CardTitle title="Leave Application" />
            <CardText>
              <SelectField
                value={this.state.leaveTypeValue}
                onChange={this.handleLeaveTypeChange}
                floatingLabelText="Type of Leave"
              >
                {items}
              </SelectField>
              <DatePicker
              hintText="Select From Date"
              onChange = {this.fromDateChange}
              container="inline"
              mode="landscape" />
              <DatePicker
              hintText="Select To Date"
              onChange = {this.toDateChange}
              container="inline"
              mode="landscape" />
              <SelectField
                value={this.state.staffNamevalue}
                onChange={this.handlePersonChange}
                floatingLabelText="Adjusted Person"
              >
                {this.state.staff}
              </SelectField>
              <TextField
                hintText="Reason for Leave : "
                ref="reasonTXT"
                floatingLabelText="Reason for Leave : "
              />
              <Snackbar
                  open={this.state.open}
                  message="Your Leave Application has been Sent Successfuly ..!"
                  autoHideDuration={8000}
                  onRequestClose={this.handleRequestClose}
                />
            </CardText>
            <CardActions>
              <RaisedButton label="Send Application" primary={true} onClick={this.applyForLeave} />
            </CardActions>
          </Card>
      </div>
    );
  }
}

export default LA;
