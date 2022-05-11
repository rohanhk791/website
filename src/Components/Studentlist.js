import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table'; 
//import 'bootstrap/dist/css/bootstrap.css'; 
  
export default class Studentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44356/Api/Registers')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">User List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>ID</th>  
                <th>FirstName</th>  
                <th>LastName </th>  
                <th>Email</th> 
                <th>Password</th> 
                <th>ConfirmPassword</th>  
                {/* <th colSpan="4">Action</th>   */}
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  