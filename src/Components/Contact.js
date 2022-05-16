import React from 'react';  
import axios from 'axios';  
import './reg.css';
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class Register extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
UserName:'',    
Email:'',
Message:'',
}  
}   
Addstudent=()=>{  
  axios.post('https://localhost:44356/Api/Registers', {UserName:this.state.UserName,Email:this.state.Email,Message:this.state.Message,})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Successfully");  
this.props.history.push('/Contactlist')  
}  
else{  
alert('UnSuccessfully');  
debugger;  
this.props.history.push('/Contactlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  <br></br>
    <h4 className="PageHeading">Contact US</h4>  
    <Form className="form1">  
      <Col>  
    
        <FormGroup row> <br></br> 
          <Label for="UserName" sm={2}>UserName</Label>  
          <Col sm={10}>  
            <Input type="text" name="UserName" onChange={this.handleChange} value={this.state.UserName} placeholder="Enter UserName" />  
          </Col>  
        </FormGroup>  
         
        <FormGroup row>  <br></br> 
          <Label for="Email" sm={2}>Email</Label>  
          <Col sm={10}>  
            <Input type="text" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  <br></br> 
          <Label for="Message" sm={2}>Message</Label>  
          <Col sm={10}>  
            <Input type ="text" textarea id="Message" name="Message" onChange={this.handleChange} value={this.state.Message} placeholder="Enter Message" />  
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
      </Col>  <br></br>
      <Link className="btn btn-primary" to="/Getputpost">Back </Link>
    </Form>   <br></br> 
  </Container> 

  
);  
}  
   
}  
export default Register;