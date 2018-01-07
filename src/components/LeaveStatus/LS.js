import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import ReactTable from 'react-table'
import './react-table.css';

const columns = [{
    Header: 'Leave Type',
    accessor: 'leaveType' // String-based value accessors!
  },
  {
      Header: 'From Date',
      accessor: 'fromDate' // String-based value accessors!
  },
  {
      Header: 'To Date',
      accessor: 'toDate' // String-based value accessors!
    },
    {
        Header: 'Pending With',
        accessor: 'pending' // String-based value accessors!
      },
 ]



class LS extends Component {

  constructor(props){
    super(props);
    this.state = {
      displayString : ''
    }
  }

  componentWillMount(){
    axios.get('http://localhost:3000/users/leaveStatus', {
      params: {
        userName: this.props.userData[0].userName
              }
    })
    .then((res) => {
      console.log(res.data.output);

      var pendingData = res.data.output.filter((item)=>{
        if(item.isUserApproved == 1 && item.isHODApproved == 1 && item.isAdminApproved == 1){

        }else{
          return item;
        }
      })

      var data = pendingData.map((item)=>{
        if(item.isUserApproved == 0){
          item.pending = "Pending with Staff";
        }else if(item.isHODApproved == 0){
          item.pending = "Pending with HOD";
        }else {
          item.pending = "Pending with Admin";
        }
        return item;
      })

      var displayString = (
        <ReactTable
          data={data}
          columns = {columns}
        />
      )
      this.setState({displayString:displayString})
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="row panelMargin">

        <div className= "col-sm-12">
          {this.state.displayString}
        </div>


      </div>
    );
  }
}

export default LS;
