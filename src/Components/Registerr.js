import React from 'react';  
import axios from 'axios';  
import './reg.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class Addstudent extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
id:'',  
FirstName:'',  
LastName:'',  
Email:'',
Password:'',
ConfirmPassword:''
}  
}   
Addstudent=()=>{  
  axios.post('https://localhost:44356/Api/Registers', {id:this.state.id,FirstName:this.state.FirstName,LastName:this.state.LastName,Email:this.state.Email,Password:this.state.Password,ConfirmPassword:this.state.ConfirmPassword,})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Studentlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Studentlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Informations</h4>  
    <Form className="form1">  
      <Col>  
        <FormGroup row>  
          <Label for="id" sm={2}>id</Label>  
          <Col sm={10}>  
            <Input type="text" name="id" onChange={this.handleChange} value={this.state.id} placeholder="Enter id" />  
          </Col>  
        </FormGroup>  
        <FormGroup row> <br></br> 
          <Label for="FirstName" sm={2}>FirstName</Label>  
          <Col sm={10}>  
            <Input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder="Enter FirstName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row> <br></br>  
          <Label for="LastName" sm={2}>LastName</Label>  
          <Col sm={10}>  
            <Input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder="Enter LastName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  <br></br> 
          <Label for="Email" sm={2}>Email</Label>  
          <Col sm={10}>  
            <Input type="text" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  <br></br> 
          <Label for="Password" sm={2}>Password</Label>  
          <Col sm={10}>  
            <Input type="text" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password" />  
          </Col>  
        </FormGroup>  
        <FormGroup row> <br></br>  
          <Label for="ConfirmPassword" sm={2}>ConfirmPassword</Label>  
          <Col sm={10}>  
            <Input type="text" name="ConfirmPassword" onChange={this.handleChange} value={this.state.ConfirmPassword} placeholder="Enter ConfirmPassword" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row> 
          <Col sm={5}>  
          </Col>  
          <Col sm={1}> <br></br>  
          <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  <br></br> 
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>   <br></br> 
  </Container>  
);  
}  
   
}  
   
export default Addstudent; 